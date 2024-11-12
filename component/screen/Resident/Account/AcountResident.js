import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Switch, Image, Pressable } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import avatar from "@img/avatar.png";


const Acount = ({ navigation }) => {
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
              <Text style={styles.profilePhone}></Text>
            </View>
        </View>

       

        
        <View style={styles.accountInfo}>
          <Text style={styles.accountDetail}>CH001</Text>
          <Text style={styles.accountAddress}>Vinhomes Serenity, HCM</Text>
        </View>

        <View style={styles.settingsList}>
          <Pressable style={styles.settingItem} onPress={() => navigation.navigate('Vehicle')}>
            <MaterialIcons name="maps-home-work" size={24} color="blue" />
            <Text style={styles.settingText}>Thông tin phương tiện</Text>
          </Pressable>

          <Pressable style={styles.settingItem} onPress={() => navigation.navigate('Infomation')}>
            <FontAwesome name="users" size={24} color="green" />
            <Text style={styles.settingText}>Thông tin cư dân</Text>
          </Pressable>
          
          <Pressable style={styles.settingItem} onPress={() => navigation.navigate('')}>
            <MaterialIcons name="lock" size={24} color="red" />
            <Text style={styles.settingText}>Đổi mật khẩu</Text>
          </Pressable>

          <Pressable style={styles.settingItem} onPress={() => navigation.navigate('')}>
            <MaterialIcons name="language" size={24} color="pink" />
            <Text style={styles.settingText}>Ngôn ngữ</Text>
            <Text style={styles.settingDetail}>Tiếng Việt</Text>
          </Pressable>

        </View>
        <Pressable style={styles.btn_logout} onPress={handleLogout}>
          <SimpleLineIcons name="logout" size={20} color="white" style={{marginLeft: 110, marginTop: 7}} />
          <Text style={styles.logout_text}>ĐĂNG XUẤT</Text>
        </Pressable>
      </ScrollView>

      {/* Footer Navigation */}
      <View style={styles.footer}>
        <Pressable style={styles.footerItem} onPress={() => navigation.navigate('Home')}>
          <Entypo name="home" size={24} color="black" />
          <Text style={styles.footerText}>Trang chủ</Text>
        </Pressable>
        <Pressable style={styles.footerItem} onPress={() => navigation.navigate('Payment')}>
          <MaterialIcons name="payment" size={24} color="black" />
          <Text style={styles.footerText}>Thanh toán</Text>
        </Pressable>
        <Pressable style={styles.footerItem} onPress={() => navigation.navigate('Notification')}>
          <Ionicons name="notifications" size={24} color="black" />
          <Text style={styles.footerText}>Thông báo</Text>
        </Pressable>
        <Pressable style={styles.footerItem} onPress={() => navigation.navigate('Acount')}>
          <MaterialCommunityIcons name="account" size={24} color="#004d8d" />
          <Text style={styles.footerText1}>Tài khoản</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Acount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#a1d2f5',
    width: '100%',
    height: 80,
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  },
  content: {
    padding: 20,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  profileInfo: {
    marginLeft: 15,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profilePhone: {
    fontSize: 16,
    color: 'gray',
  },
  accountInfo: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  accountDetail: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  accountAddress: {
    fontSize: 14,
    color: 'gray',
  },
  settingsList: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  settingText: {
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
  },
  settingDetail: {
    fontSize: 16,
    color: 'gray',
  },
  settingSwitch: {
    marginLeft: 'auto',
  },
  btn_logout:{
    width: '100%',
    height: 40,
    borderRadius: 5,
    flexDirection:'row',
    backgroundColor: '#436EEE',
    marginTop:10,
  },
  
  logout_text:{
    fontSize: 16, 
    fontWeight:'600', 
    color: 'white',
    marginLeft: 10,
    marginTop: 7
  },

  footer: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    height: 60,
    justifyContent: 'space-around',
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    fontWeight: '700',
    marginTop: 2,
  },
  footerText1: {
    fontSize: 12,
    fontWeight: '700',
    marginTop: 2,
    color: '#004d8d'
  },

});
