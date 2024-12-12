import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import avatar from "@img/avatar.png";
import { styles } from '@component/styles/accountStyles';

const AccountStaff = ({ navigation }) => {
  const [staff, setStaff] = useState(null)

  const loadStaffData = async () => {
    try {
      const storedStaffData = await AsyncStorage.getItem('staff');
      if (storedStaffData) {
        const staff = JSON.parse(storedStaffData);
        console.log('staff account staff file: ', staff);
        setStaff(staff);
      }
    } catch (error) {
      console.log('Error loading staff data: ', error);
    }
  };
  
  useEffect(() => {
    loadStaffData();
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
              <Text style={styles.profileName}>{staff?.account_name}</Text>
              <Text style={styles.profilePhone}>Nhân viên kỹ thuật</Text>
            </View>
        </View>

        <View style={styles.settingsList}>
          <Pressable style={styles.settingItem} onPress={() => navigation.navigate('InfoStaff')}>
            <MaterialCommunityIcons name="account-box" size={25} color="blue" />
            <Text style={styles.settingText}>Thông tin cá nhân</Text>
          </Pressable>

          <Pressable style={styles.settingItem} onPress={() => navigation.navigate('')}>
            <MaterialIcons name="language" size={24} color="pink" />
            <Text style={styles.settingText}>Ngôn ngữ</Text>
            <Text style={styles.settingDetail}>Tiếng Việt</Text>
          </Pressable>

          <Pressable style={styles.settingItem} onPress={() => navigation.navigate('')}>
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
        <Pressable style={styles.footerItem} onPress={() => navigation.navigate('HomeStaff')}>
          <Entypo name="home" size={24} color="black" />
          <Text style={styles.footerText}>Trang chủ</Text>
        </Pressable>
        <Pressable style={styles.footerItem} onPress={() => navigation.navigate('NotificationStaff')}>
          <Ionicons name="notifications" size={24} color="black" />
          <Text style={styles.footerText}>Thông báo</Text>
        </Pressable>
        <Pressable style={styles.footerItem} onPress={() => navigation.navigate('AccountStaff')}>
          <MaterialCommunityIcons name="account" size={24} color="#004d8d" />
          <Text style={styles.footerText1}>Tài khoản</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AccountStaff;


