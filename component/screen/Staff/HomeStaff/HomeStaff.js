import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable, Image } from 'react-native';
import avatar from "@img/avatar.png";
import logo from "@img/lo-go.png";
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Octicons from '@expo/vector-icons/Octicons';
import AntDesign from '@expo/vector-icons/AntDesign';

const HomeStaff = ({ navigation }) => {
  return (
    <View style={styles.container}>
        {/* Header */}
      <View style={styles.header}>    
        <View style={styles.circle}>
          <Image source={avatar} style={styles.avatar}/>
        </View>
          <View style={styles.headerText}>
            <Text style={styles.headerTitle}>Xin Chào</Text>
            <Text style={styles.headerTitle}>Name Staff</Text>
          </View>     
        <Image source={logo} style={styles.logo}/>
      </View>

        <ScrollView style={styles.content}>
        {/* Shortcut Icons */}
        <View style={styles.shortcutContainer}>
          <Pressable style={styles.homeItemContainer} onPress={() => navigation.navigate('SalaryStaff')}>
            <View style={styles.iconCircle1}>
              <FontAwesome6 name="sack-dollar" size={24} color="white" />
            </View>
            <Text style={styles.homeItemText}>Lương</Text>
          </Pressable>

          <Pressable style={styles.homeItemContainer} onPress={() => navigation.navigate('LaborContract')}>
            <View style={styles.iconCircle2}>
              <FontAwesome6 name="file-contract" size={24} color="white" />
            </View>
            <Text style={styles.homeItemText}>Hợp đồng</Text>
          </Pressable>

          <Pressable style={styles.homeItemContainer} onPress={() => navigation.navigate('Report', { previousScreen: 'HomeStaff' })} >
            <View style={styles.iconCircle3}>
              <Octicons name="report" size={24} color="white" />
            </View>
            <Text style={styles.homeItemText}>Báo cáo</Text>
          </Pressable>

          <Pressable style={styles.homeItemContainer} onPress={() => navigation.navigate('Rules')}>
            <View style={styles.iconCircle4}>
            <AntDesign name="exception1" size={24} color="white" />
            </View>
            <Text style={styles.homeItemText}>Nội quy</Text>
          </Pressable>
        </View>

        {/* Notifications */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Lịch làm việc hàng tuần</Text>
            <Pressable onPress={() => navigation.navigate('WorkSchedule')}>
              <Text style={styles.sectionLink}>Xem tất cả</Text>
            </Pressable>
          </View>
          <View style={styles.notificationContainer}>
            <View style={styles.notificationIconContainer}>
              <MaterialCommunityIcons name="calendar-edit" size={24} color="blue" />
            </View>
            <View style={styles.notificationTextContainer}>
              <Text style={styles.notificationText}>Từ ngày 11/11/2024 đến ngày 16/11/2024</Text>
              <Text style={styles.notificationDate}>Thứ 2 Ngày 11/11/2024</Text>
              <Text style={styles.notificationDate}>Ca: 8:00 đến 16:00</Text>
              <Text style={styles.notificationDate}>Thứ 2 Ngày 11/11/2024</Text>
              <Pressable onPress={()=> navigation.navigate('WorkSchedule')}>
                <Text style={styles.notificationDate}>Xem thêm</Text>
              </Pressable>

            </View>
          </View>
        </View>

        {/* Management Requests */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Các báo cáo</Text>
            <Pressable onPress={() => navigation.navigate('Report',{ previousScreen: 'HomeStaff' })}>
              <Text style={styles.sectionLink}>Xem tất cả</Text>
            </Pressable>
          </View>
          <View style={styles.requestContainer}>
            <View style={[styles.requestItem, { backgroundColor: '#dff3f5' }]}>
              <Text style={styles.requestTitle}>Khác</Text>
              <Text style={styles.requestStatus}>Đang xử lý</Text>
              <Text style={styles.requestIssue}>Thay đổi cửa kính</Text>
              <Text style={styles.requestDate}>19/09/2024 15:51</Text>
            </View>
            <View style={[styles.requestItem, { backgroundColor: '#f5e9cf' }]}>
              <Text style={styles.requestTitle}>Khác</Text>
              <Text style={styles.requestStatus}>Đang xử lý</Text>
              <Text style={styles.requestIssue}>Sự cố về điện</Text>
              <Text style={styles.requestDate}>01/09/2024 15:31</Text>
            </View>
          </View>
        </View>
      </ScrollView>

        {/* Footer Navigation */}
      <View style={styles.footer}>
        <Pressable style={styles.footerItem} onPress={() => navigation.navigate('HomeStaff')}>
          <Entypo name="home" size={24} color="#004d8d" />
          <Text style={styles.footerText1}>Trang chủ</Text>
        </Pressable>
        <Pressable style={styles.footerItem} onPress={() => navigation.navigate('WorkSchedule')}>
          <MaterialCommunityIcons name="calendar-edit" size={24} color="black" />
          <Text style={styles.footerText}>Lịch làm việc</Text>
        </Pressable>
        <Pressable style={styles.footerItem} onPress={() => navigation.navigate('NotificationStaff')}>
          <Ionicons name="notifications" size={24} color="black" />
          <Text style={styles.footerText}>Thông báo</Text>
        </Pressable>
        <Pressable style={styles.footerItem} onPress={() => navigation.navigate('AccountStaff')}>
          <MaterialCommunityIcons name="account" size={24} color="black" />
          <Text style={styles.footerText}>Tài khoản</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default HomeStaff;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#a1d2f5',
    height: 150,
    width:"100%",
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginLeft: 'auto',
    alignSelf:'center',
    
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'grey',
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  headerText: {
    marginLeft: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
  },
  avatar2: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  shortcutContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  homeItemContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  iconCircle1: {
    backgroundColor: 'orange',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconCircle2: {
    backgroundColor: 'blue',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconCircle3: {
    backgroundColor: 'red',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconCircle4: {
    backgroundColor: 'green',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  homeItemText: {
    fontSize: 14,
    textAlign: 'center',
  },
  section: {
    marginTop: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionLink: {
    color: '#007aff',
  },
  notificationContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff3e0',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  notificationIconContainer: {
    marginRight: 15,
  },
  notificationTextContainer: {
    flex: 1,
  },
  notificationText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  notificationDate: {
    fontSize: 12,
    color: 'grey',
    marginTop: 5,
  },
  requestContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  requestItem: {
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
  },
  requestTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  requestStatus: {
    color: '#ff9800',
    marginVertical: 5,
  },
  requestIssue: {
    fontSize: 14,
  },
  requestDate: {
    fontSize: 12,
    color: 'grey',
  },

  footer: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    height: 60,
    justifyContent: 'space-around',
    alignItems: 'center',
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
