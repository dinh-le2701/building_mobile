import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable, Animated, ScrollView } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Payment = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.text_header}>Thanh toán</Text>
      </View>
      <View style ={styles.content}>
        <Text style ={styles.select}>Chọn hóa đơn thanh toán</Text>
        <Pressable style={styles.btn_select} onPress={()=>navigation.navigate('Invoice')}>
          <Text style={styles.select_invoice}>Chọn hóa đơn</Text>
        </Pressable>
      </View>
      <View style={styles.footer}>
        <Pressable style={styles.content_footer1} onPress={() => navigation.navigate('Home')}>
          <Entypo name="home" size={24} color="black" />
          <Text style={styles.text_footer_home}>Trang chủ</Text>
        </Pressable>

        <Pressable style={styles.content_footer2} onPress={() => navigation.navigate('Payment')}>
          <MaterialIcons name="payment" size={24} color="#004d8d" />
          <Text style={styles.text_footer_pay}>Thanh toán</Text>
        </Pressable>

        <Pressable style={styles.content_footer3} onPress={() => navigation.navigate('Notification')}>
          <Ionicons name="notifications" size={24} color="black" />
          <Text style={styles.text_footer_notification}>Thông báo</Text>
        </Pressable>

        <Pressable style={styles.content_footer4} onPress={() => navigation.navigate('Acount')}>
          <MaterialCommunityIcons name="account" size={24} color="black" />
          <Text style={styles.text_footer_account}>Tài khoản</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'column'
  },
  header: {
    backgroundColor: '#a1d2f5',
    width: '100%',
    height: 80,
    position: 'absolute',
    top: 0,
    zIndex: 1, 
  },
  text_header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 30,
    marginLeft: 30,
  },
  content:{
    flex:1,
    height:'70%',
    marginTop:100,
  },
  select:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 10,
    color: 'black',

  },
  btn_select:{
    width: 140, 
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 5, 
    marginLeft: 20
  },
  select_invoice:{
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 12
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    height: 60,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  content_footer1: {
    alignItems: 'center',
  },
  content_footer2: {
    alignItems: 'center',
    marginTop: 2,
  },
  content_footer3: {
    alignItems: 'center',
  },
  content_footer4: {
    alignItems: 'center',
  },
  text_footer_home: {
    fontSize: 12,
    fontWeight: '700',
    color: 'black',
  },
  text_footer_pay: {
    fontSize: 12,
    fontWeight: '700',
    color: '#004d8d',
  },
  text_footer_notification: {
    fontSize: 12,
    fontWeight: '700',
    color: 'black',
  },
  text_footer_account: {
    fontSize: 12,
    fontWeight: '700',
    color: 'black',
  },
});
