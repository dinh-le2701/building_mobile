import React from 'react';
import { View, Text, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { styles } from '@component/styles/invoiceDetailStyles';

const InvoiceDetail = ({ route, navigation }) => {
  const { 
    electricityAmount,
    waterAmount,
    hygieneFee,
    managementFee,
    totalAmount,
    billingMonth,
    electricityOld,
    electricityNew,
    electricityUsed,
    waterOld,
    waterNew,
    waterUsed,
  } = route.params; 

  // Hàm xử lý khi nhấn vào nút thanh toán
  const handlePayment = () => {
    console.log("Đã nhấn thanh toán!");
    navigation.navigate('PaymentScreen', {
      totalAmount,
      billingMonth,
      electricityAmount,
      waterAmount,
      hygieneFee,
      managementFee,
      electricityOld,
      electricityNew,
      electricityUsed,
      waterOld,
      waterNew,
      waterUsed,
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
          <Text style={styles.text0}>HÓA ĐƠN THÁNG {billingMonth}</Text>

          {/* Tiền điện */}
          <View style={styles.itemContainer}>
            <Text style={styles.text1}>TIỀN ĐIỆN</Text>
            <Text style={styles.text}>Số cũ: {electricityOld}</Text>
            <Text style={styles.text}>Số mới: {electricityNew}</Text>
            <Text style={styles.text}>Số điện đã sử dụng: {electricityUsed}</Text>
            <Text style={styles.amountText1}>Thành tiền: {electricityAmount.toLocaleString()} đồng</Text>
          </View>

          {/* Tiền nước */}
          <View style={styles.itemContainer}>
            <Text style={styles.text1}>TIỀN NƯỚC</Text>
            <Text style={styles.text}>Số cũ: {waterOld}</Text>
            <Text style={styles.text}>Số mới: {waterNew}</Text>
            <Text style={styles.text}>Số nước đã sử dụng: {waterUsed}</Text>
            <Text style={styles.amountText1}>Thành tiền: {waterAmount.toLocaleString()} đồng</Text>
          </View>

            {/* Phí vệ sinh */}
          <View style={styles.itemContainer}>
            <Text style={styles.text1}>PHÍ VỆ SINH</Text>
            <Text style={styles.amountText1}>Đơn giá: {hygieneFee.toLocaleString()} đồng</Text>
          </View>

          {/* Phí quản lý */}
          <View style={styles.itemContainer}>
            <Text style={styles.text1}>PHÍ QUẢN LÝ</Text>
            <Text style={styles.amountText1}>Đơn giá: {managementFee.toLocaleString()} đồng</Text>
          </View>

          {/* Tổng tiền */}
          <View style={styles.itemContainer2}>
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
