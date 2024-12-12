import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, TextInput, Alert } from 'react-native';
import AxiosInstance from '@api/api.js'; // Import instance Axios
import backgroundImg from "@img/toanha.jpg";
import { styles } from "@component/styles/signInStyles";
import { getUser, getUser2 } from '@component/api/user';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignIn = ({ navigation }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  // Hàm xử lý thay đổi dữ liệu đầu vào
  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Hàm xử lý đăng nhập
  const handleSignIn = async () => {
    if (!formData.email || !formData.password) {
      Alert.alert('Thông báo', 'Email và mật khẩu không được để trống');
      return;
    }

    try {
      const response = await AxiosInstance.post('/api/account/login', {
        email: formData.email,
        password: formData.password,
      });

      if (response?.data) {
        const { role, token, account_id } = response.data;

        console.log('Đăng nhập thành công:', response.data.message);
        console.log('Dữ liệu nhận được:', response.data);

        await AsyncStorage.clear();

        const resUser = await getUser(account_id.toString());
        await AsyncStorage.setItem("user", JSON.stringify(resUser));

        if (role) {
          if (role === "USER") {
            navigation.navigate("HomeResident", { token, account_id });
          } else if (role === "STAFF") {
            navigation.navigate("HomeStaff", { token, account_id });
          } else {
            Alert.alert("Thông báo", "Bạn không có quyền truy cập vào chức năng này.");
          }
        } else {
          Alert.alert("Lỗi", "Vai trò không được xác định. Vui lòng liên hệ quản trị viên.");
        }
      } else {
        Alert.alert("Lỗi", "Không nhận được dữ liệu từ server.");
      }
    } catch (error) {
      console.error('Lỗi khi đăng nhập:', error);
      Alert.alert("Lỗi", "Có lỗi xảy ra khi đăng nhập. Vui lòng thử lại.");
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.img_background} source={backgroundImg} />
      <View style={styles.content_signin}>
        <View style={styles.user}>
          <Text style={styles.text}>Email</Text>
          <TextInput
            style={styles.textiput}
            placeholder='Enter your email'
            value={formData.email}
            onChangeText={(text) => handleChange('email', text)}
          />
        </View>

        <View style={styles.user}>
          <Text style={styles.text}>Password</Text>
          <TextInput
            style={styles.textiput}
            placeholder='Enter password'
            secureTextEntry
            value={formData.password}
            onChangeText={(text) => handleChange('password', text)}
          />
        </View>

        <Pressable style={styles.btn_signin} onPress={handleSignIn}>
          <Text style={styles.text_btn_signin}>Sign In</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignIn;
