import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Switch, Image, Pressable } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import avatar from "@img/avatar.png";
import { getUser } from "@component/api/user";
import { styles } from '@component/styles/accountStyles';


const AccountResident = ({ navigation, route }) => {
  const [apartmentInfo, setApartmentInfo] = useState({});

  const loadUserData = async () => {
    try {
      const storedUserData = await AsyncStorage.getItem('user');
      if (storedUserData) {
        const user = JSON.parse(storedUserData);
        setApartmentInfo(user.apartment);

      }
    } catch (error) {
      console.log('Error loading user data: ', error);
    }
  };

  useEffect(() => {
    loadUserData();
  }, []);

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
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Tài khoản</Text>
      </View>

      {/* Content */}
      <ScrollView style={styles.content}>
        <View style={styles.profileSection}>
          <Image
            style={styles.profileImage}
            source={avatar}
          />
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>Cư dân Vinhomes</Text>
            </View>
        </View>
       
        <View style={styles.accountInfo}>
          <Text style={styles.accountDetail}>{apartmentInfo.apartment_name}</Text>
          <Text style={styles.accountAddress}>Vinhomes Serenity, HCM</Text>
        </View>

        <View style={styles.settingsList}>
          <Pressable style={styles.settingItem} onPress={() => navigation.navigate('InfoApartmentResident')}>
            <FontAwesome name="users" size={24} color="green" />
            <Text style={styles.settingText}>Thông tin căn hộ và cư dân</Text>
          </Pressable>
          <Pressable style={styles.settingItem} onPress={() => navigation.navigate('InfoVehicle')}>
            <MaterialIcons name="maps-home-work" size={24} color="blue" />
            <Text style={styles.settingText}>Thông tin phương tiện</Text>
          </Pressable>

          <Pressable style={styles.settingItem}>
            <MaterialIcons name="language" size={24} color="pink" />
            <Text style={styles.settingText}>Ngôn ngữ</Text>
            <Text style={styles.settingDetail}>Tiếng Việt</Text>
          </Pressable>

          <Pressable style={styles.settingItem}>
            <AntDesign name="book" size={24} color="red" />
            <Text style={styles.settingText}>Chính sách</Text>
          </Pressable>

          <Pressable style={styles.settingItem}>
            <AntDesign name="like1" size={24} color="orange" />
            <Text style={styles.settingText}>Đánh giá</Text>
          </Pressable>

          <Pressable style={styles.settingItem}>
            <Ionicons name="settings" size={24} color="gray" />
            <Text style={styles.settingText}>Cài đặt</Text>
          </Pressable>

        </View>
        <Pressable style={styles.btn_logout} onPress={handleLogout}>
          <SimpleLineIcons name="logout" size={20} color="white" style={{marginLeft: 110, marginTop: 7}} />
          <Text style={styles.logout_text}>ĐĂNG XUẤT</Text>
        </Pressable>
      </ScrollView>

      {/* Footer Navigation */}
      <View style={styles.footer}>
        <Pressable style={styles.footerItem} onPress={() => navigation.navigate('HomeResident')}>
          <Entypo name="home" size={24} color="black" />
          <Text style={styles.footerText}>Trang chủ</Text>
        </Pressable>
        <Pressable style={styles.footerItem} onPress={() => navigation.navigate('Payment')}>
          <MaterialIcons name="payment" size={24} color="black" />
          <Text style={styles.footerText}>Thanh toán</Text>
        </Pressable>
        <Pressable style={styles.footerItem}>
          <MaterialCommunityIcons name="account" size={24} color="#004d8d" />
          <Text style={styles.footerText1}>Tài khoản</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AccountResident;



