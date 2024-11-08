import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({ navigation }) => {
  const [token, setToken] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('token');
        if (storedToken) {
          setToken(storedToken);
          fetchUserData(storedToken); // Gọi hàm lấy dữ liệu người dùng
        } else {
          Alert.alert('Thông báo', 'Bạn chưa đăng nhập. Vui lòng đăng nhập.');
          navigation.navigate('SignIn');
        }
      } catch (error) {
        console.error('Error fetching token:', error);
      }
    };

    fetchToken();
  }, []);

  const fetchUserData = async (token) => {
    try {
      const response = await fetch('http://localhost:8901/user', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUserData(data);
      } else {
        Alert.alert('Lỗi', 'Không thể lấy dữ liệu người dùng');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      navigation.navigate('SignIn');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chào mừng đến với trang chủ!</Text>
      {userData && (
        <View style={styles.userInfo}>
          <Text style={styles.text}>Email: {userData.email}</Text>
          {/* Thêm các thông tin khác mà bạn muốn hiển thị */}
        </View>
      )}
      <Button title="Đăng xuất" onPress={handleLogout} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  userInfo: {
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
  },
});
