import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Pressable, Animated, ScrollView, Alert } from 'react-native';
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

  // Hàm xử lý khi nhấn nút thanh toán
  const handlePayment = () => {
    if (selectedMethod === 'counter') {
      Alert.alert(
        "Thông báo",
        "Mời bạn đến quầy lễ tân của Vinhomes Serenity tại HCM để thanh toán.",
        [{ text: "OK"}]
      );
    } else if (selectedMethod === 'onlineBanking') {
      Alert.alert(
        "Thông báo",
        "Chức năng này chưa được hỗ trợ",
        [{ text: "OK" }]
      );
      
    } else if (selectedMethod === 'onlineApp') {
      Alert.alert(
        "Thông báo",
        "Thanh toán thành công!",
        [{ text: "OK", onPress: () => navigation.navigate("Invoice") }]
      );
    }
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

        {/* Thanh toán tại quầy lễ tân */}
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

        {/* Chuyển khoản ngân hàng trực tuyến */}
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

        {/* Thanh toán trực tiếp tại app */}
        <TouchableOpacity
          style={styles.optionContainer}
          onPress={() => setSelectedMethod('onlineApp')}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        > 
          <View style={[styles.radioCircle, selectedMethod === 'onlineApp' && styles.radioSelected]} />
          <View style={styles.radioContainer}>          
            <Text style={styles.optionTitle}>Chuyển khoản trực tiếp</Text>
            <Text style={styles.optionText}>
              Chuyển khoản trực tiếp tại app 
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

      {/* Tổng tiền và nút thanh toán */}
      <View style={styles.transactionSummaryContainer}>
        <View style={styles.transactionSummary}>
          <Text style={styles.transactionText}>Thành tiền</Text>
          <Text style={styles.transactionAmount}>{totalAmount.toLocaleString("vi-VN")} VNĐ</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handlePayment}>
          <Text style={styles.buttonText}>Thanh toán</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentDetail;
