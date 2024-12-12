import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable, Animated, ScrollView } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { styles } from '@component/styles/paymentDetailStyles';

const PaymentDetail = ({ navigation, route }) => {
  const [selectedMethod, setSelectedMethod] = useState('counter'); 
  const scaleValue = new Animated.Value(1); 
  const { totalAmount } = route.params;
  
  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.5,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1, 
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="white" style={styles.arrowLeft} />
        </Pressable>
        <Text style={styles.text_header}>Thanh toán</Text>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.title}>Phương thức thanh toán</Text>

        <TouchableOpacity
          style={styles.optionContainer}
          onPress={() => setSelectedMethod('counter')}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        >
          <View style={[styles.radioCircle, selectedMethod === 'counter' && styles.radioSelected]} />
          <View style={styles.radioContainer}>         
            <Text style={styles.optionTitle}>Thanh toán tại quầy lễ tân</Text>
            <Text style={styles.optionText}>
              Mời quý khách đến quầy lễ tân đóng tiền theo {"\n"}  
              hóa đơn trên ứng dụng. Sau khi thanh toán, {"\n"}
              hóa đơn điện tử sẽ được kiểm tra và gửi đến {"\n"} 
              trạng thái thanh toán.  
            </Text>
          </View>
          
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.optionContainer}
          onPress={() => setSelectedMethod('onlineBanking')}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        > 
          <View style={[styles.radioCircle, selectedMethod === 'onlineBanking' && styles.radioSelected]} />
          <View style={styles.radioContainer}>          
            <Text style={styles.optionTitle}>Chuyển khoản ngân hàng trực tuyến</Text>
            <Text style={styles.optionText}>
              Chuyển khoản ngân hàng trực tuyến qua {"\n"} ứng dụng VNPay
            </Text>
          </View>
          
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.transactionSummaryContainer}>
        <View style={styles.transactionSummary}>
          <Text style={styles.transactionText}>Thành tiền</Text>
          <Text style={styles.transactionAmount}>{totalAmount.toLocaleString("vi-VN")} VNĐ</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Thanh toán</Text>
        </TouchableOpacity>
      </View>

      
    </View>
  );
};

export default PaymentDetail;

