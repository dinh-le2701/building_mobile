import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable, Image, Alert } from 'react-native';
import avatar from "@img/avatar.png";
import logo from "@img/lo-go.png";
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Octicons from '@expo/vector-icons/Octicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { homeStyles } from '@component/styles/homeStyles';
import { getStaff } from '@component/api/staff';
import AsyncStorage from '@react-native-async-storage/async-storage';


const HomeStaff = ({ navigation, route }) => {
  const [staff, setStaff] = useState(null);

  useEffect(() => {
    getStaffData();
  }, []);

  const getStaffData = async () => {
    if(route.params.account_id === undefined) {
      Alert.alert("Không có staff id");
    }
   try {
    const res = await getStaff(route.params.account_id);
    await AsyncStorage.setItem("staff", JSON.stringify(res));
    console.log("Staff", res)
    setStaff(res);
   } catch (error) {
    console.log("error Home staff: " + error)
   }
  };

  return (
    <View style={homeStyles.container}>
        {/* Header */}
      <View style={homeStyles.header}>    
        <View style={homeStyles.circle}>
          <Image source={avatar} style={homeStyles.avatar}/>
        </View>
          <View style={homeStyles.headerText}>
            <Text style={homeStyles.headerTitle}>Xin Chào</Text>
            <Text style={homeStyles.headerTitle}>{staff?.account_name}</Text>
          </View>     
        <Image source={logo} style={homeStyles.logo}/>
      </View>

        <ScrollView style={homeStyles.content}>
        {/* Shortcut Icons */}
        <View style={homeStyles.shortcutContainer}>
          <Pressable style={homeStyles.homeItemContainer} onPress={() => navigation.navigate('SalaryStaff')}>
            <View style={homeStyles.iconCircle1}>
              <FontAwesome6 name="sack-dollar" size={24} color="white" />
            </View>
            <Text style={homeStyles.homeItemText}>Lương</Text>
          </Pressable>

          <Pressable style={homeStyles.homeItemContainer} onPress={() => navigation.navigate('Requirement')} >
            <View style={homeStyles.iconCircle3}>
              <Entypo name="direction" size={24} color="white" />
            </View>
            <Text style={homeStyles.homeItemText}>Yêu cầu & Khiếu nại</Text>
          </Pressable>

          <Pressable style={homeStyles.homeItemContainer} onPress={() => navigation.navigate('RuleStaff')}>
            <View style={homeStyles.iconCircle4}>
            <AntDesign name="exception1" size={24} color="white" />
            </View>
            <Text style={homeStyles.homeItemText}>Nội quy</Text>
          </Pressable>
        </View>

        {/* Management Requests */}
        <View style={homeStyles.section}>
          <View style={homeStyles.sectionHeader}>
            <Text style={homeStyles.sectionTitle}>Các báo cáo</Text>
            <Pressable onPress={() => navigation.navigate('Report',{ previousScreen: 'HomeStaff' })}>
              <Text style={homeStyles.sectionLink}>Xem tất cả</Text>
            </Pressable>
          </View>
          <View style={homeStyles.requestContainer}>
            <View style={[homeStyles.requestItem, { backgroundColor: '#dff3f5' }]}>
              <Text style={homeStyles.requestTitle}>Khác</Text>
              <Text style={homeStyles.requestStatus}>Đang xử lý</Text>
              <Text style={homeStyles.requestIssue}>Thay đổi cửa kính</Text>
              <Text style={homeStyles.requestDate}>19/09/2024 15:51</Text>
            </View>
            <View style={[homeStyles.requestItem, { backgroundColor: '#f5e9cf' }]}>
              <Text style={homeStyles.requestTitle}>Khác</Text>
              <Text style={homeStyles.requestStatus}>Đang xử lý</Text>
              <Text style={homeStyles.requestIssue}>Sự cố về điện</Text>
              <Text style={homeStyles.requestDate}>01/09/2024 15:31</Text>
            </View>
          </View>
        </View>
      </ScrollView>

        {/* Footer Navigation */}
      <View style={homeStyles.footer}>
        <Pressable style={homeStyles.footerItem} onPress={() => navigation.navigate('HomeStaff')}>
          <Entypo name="home" size={24} color="#004d8d" />
          <Text style={homeStyles.footerText1}>Trang chủ</Text>
        </Pressable>
        <Pressable style={homeStyles.footerItem} onPress={() => navigation.navigate('NotificationStaff')}>
          <Ionicons name="notifications" size={24} color="black" />
          <Text style={homeStyles.footerText}>Thông báo</Text>
        </Pressable>
        <Pressable style={homeStyles.footerItem} onPress={() => navigation.navigate('AccountStaff')}>
          <MaterialCommunityIcons name="account" size={24} color="black" />
          <Text style={homeStyles.footerText}>Tài khoản</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default HomeStaff;


