const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const PORT = 8901;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '1234',
  database: 'spring_project',
});

const JWT_SECRET = 'your_jwt_secret';
const REFRESH_SECRET = 'your_refresh_secret';

// Hàm tạo access token
const createAccessToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '24h' });
};

// Hàm tạo refresh token
const createRefreshToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, REFRESH_SECRET, { expiresIn: '7d' });
};

// Endpoint đăng nhập
app.post('/auth/signin', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Vui lòng điền đầy đủ thông tin.' });
  }

  db.query('SELECT * FROM our_users WHERE email = ?', [email], (error, results) => {
    if (error) {
      return res.status(500).json({ success: false, message: 'Có lỗi xảy ra.' });
    }

    if (results.length === 0) {
      return res.status(401).json({ success: false, message: 'Email hoặc mật khẩu không đúng.' });
    }

    const user = results[0];
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return res.status(500).json({ success: false, message: 'Có lỗi xảy ra khi xác thực mật khẩu.' });
      }

      if (isMatch) {
        const accessToken = createAccessToken(user);
        const refreshToken = createRefreshToken(user);

        return res.status(200).json({
          success: true,
          message: 'Đăng nhập thành công.',
          accessToken,
          refreshToken,
        });
      } else {
        return res.status(401).json({ success: false, message: 'Email hoặc mật khẩu không đúng.' });
      }
    });
  });
});

// Endpoint để lấy access token mới từ refresh token
app.post('/auth/refresh', (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) return res.status(401).json({ message: 'Token không hợp lệ.' });

  jwt.verify(refreshToken, REFRESH_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Token không hợp lệ.' });

    const newAccessToken = createAccessToken(user);
    return res.status(200).json({ accessToken: newAccessToken });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
