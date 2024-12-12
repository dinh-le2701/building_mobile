import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable, Animated, ScrollView } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { styles } from '@component/styles/paymentStyles';


const Payment = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="white" style={styles.arrowLeft} />
        </Pressable>
        <Text style={styles.text_header}>Thanh toán</Text>
      </View>
      <View style ={styles.content}>
        <Text style ={styles.select}>Chọn hóa đơn thanh toán</Text>
        <Pressable style={styles.btn_select} onPress={()=>navigation.navigate('Invoice')}>
          <Text style={styles.select_invoice}>Chọn hóa đơn</Text>
        </Pressable>
      </View>
      <View style={styles.footer}>
        <Pressable style={styles.content_footer1} onPress={() => navigation.navigate('HomeResident')}>
          <Entypo name="home" size={24} color="black" />
          <Text style={styles.text_footer_home}>Trang chủ</Text>
        </Pressable>

        <Pressable style={styles.content_footer2} onPress={() => navigation.navigate('Payment')}>
          <MaterialIcons name="payment" size={24} color="#004d8d" />
          <Text style={styles.text_footer_pay}>Thanh toán</Text>
        </Pressable>

        <Pressable style={styles.content_footer4} onPress={() => navigation.navigate('AccountResident')}>
          <MaterialCommunityIcons name="account" size={24} color="black" />
          <Text style={styles.text_footer_account}>Tài khoản</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Payment;

