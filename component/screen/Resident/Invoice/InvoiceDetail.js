import React from 'react';
import { View, Text, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { styles } from '@component/styles/invoiceDetailStyles';

const InvoiceDetail = ({ route, navigation }) => {
  const { 
    electricityAmount,
    waterAmount,
    managementFee,
    totalAmount,
    billingMonth,
  } = route.params; 

  // Hàm xử lý khi nhấn vào nút thanh toán
  const handlePayment = () => {
    console.log("Đã nhấn thanh toán!");
    navigation.navigate('PaymentScreen', {
      totalAmount,
      billingMonth,
      electricityAmount,
      waterAmount,
      managementFee,
    });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="white" style={styles.arrowLeft} />
        </Pressable>
        <Text style={styles.headerText}>Chi tiết Hóa đơn</Text>
      </View>

      {/* Nội dung chính được bọc trong ScrollView */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.invoiceInfo}>
          <Text style={styles.text0}>Hóa đơn tháng {billingMonth}</Text>

          {/* Tiền điện */}
          <View style={styles.itemContainer}>
            <Text style={styles.text}>Tiền điện:</Text>
            <Text style={styles.amountText}>{electricityAmount.toLocaleString()} đồng</Text>
          </View>

          {/* Tiền nước */}
          <View style={styles.itemContainer}>
            <Text style={styles.text}>Tiền nước:</Text>
            <Text style={styles.amountText}>{waterAmount.toLocaleString()} đồng</Text>
          </View>

          {/* Phí quản lý */}
          <View style={styles.itemContainer}>
            <Text style={styles.text}>Phí quản lý:</Text>
            <Text style={styles.amountText}>{managementFee.toLocaleString()} đồng</Text>
          </View>

          {/* Tổng tiền */}
          <View style={styles.itemContainer}>
            <Text style={styles.text2}>Tổng tiền:</Text>
            <Text style={styles.amountText2}>{totalAmount.toLocaleString()} đồng</Text>
          </View>
        </View>
      </ScrollView>

      {/* Nút thanh toán */}
      <TouchableOpacity style={styles.paymentButton} onPress={()=>navigation.navigate('PaymentDetail',{totalAmount})}>
        <Text style={styles.paymentButtonText}>Thanh toán</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InvoiceDetail;
