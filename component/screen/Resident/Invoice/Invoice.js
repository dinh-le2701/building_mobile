import React, { useState } from "react";
import { View, Text, Pressable, ActivityIndicator, ScrollView } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { styles } from "@component/styles/invoiceStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { calculateBillingMonth } from "@component/utils/calculateCosts";

const Invoice = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  const loadUserData = async () => {
    try {
      const data = await AsyncStorage.getItem("monthlyOrders");
      if (data) {
        const datajson = JSON.parse(data);
        console.log("datajson: ", datajson);
        setOrders(datajson || []); 
      } else {
        setOrders([]); 
      }
    } catch (error) {
      console.log("Error loading user data: ", error);
      setOrders([]); 
    } finally {
      setLoading(false); 
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      loadUserData();
    }, [])
  );

  const handleNavigate = (order) => {
    navigation.navigate("InvoiceDetail", {
      electricityAmount: order.electricTotalPrice || 0,
      waterAmount: order.waterTotal_price || 0,
      managementFee: order.manage_price || 0,
      totalAmount: order.totalPrice || 0,
      billingMonth: calculateBillingMonth(order.createDate) || "Chưa có tháng",
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign
            name="arrowleft"
            size={24}
            color="white"
            style={styles.arrowLeft}
          />
        </Pressable>
        <Text style={styles.headerText}>Hóa đơn</Text>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : orders.length === 0 ? (
        <Text style={styles.noDataText}>Chưa có hóa đơn nào.</Text>
      ) : (
        <ScrollView style={styles.content}>
          {orders.map((order, index) => (
            <Pressable
              key={index}
              onPress={() => handleNavigate(order)}
              style={styles.item}
            >
              <Text style={styles.text0}>
                Hóa đơn tháng {calculateBillingMonth(order.createDate) || "Chưa có tháng"}
              </Text>
              <View style={styles.itemContainer}>
                <Text style={styles.text}>Tiền điện:</Text>
                <Text style={styles.amountText}>
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(order.electricTotalPrice || 0)}
                </Text>
              </View>
              <View style={styles.itemContainer}>
                <Text style={styles.text}>Tiền nước:</Text>
                <Text style={styles.amountText}>
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(order.waterTotal_price || 0)}
                </Text>
              </View>
              {/* Hiển thị tiền phí vệ sinh */}
              <View style={styles.itemContainer}>
                <Text style={styles.text}>Phí vệ sinh:</Text>
                <Text style={styles.amountText}>
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(order.hygiene_price || 0)}
                </Text>
              </View>
              {/* Hiển thị phí quản lý */}
              <View style={styles.itemContainer}>
                <Text style={styles.text}>Phí quản lý:</Text>
                <Text style={styles.amountText}>
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(order.manage_price || 0)}
                </Text>
              </View>
              <View style={styles.itemContainer}>
                <Text style={styles.text2}>Tổng tiền:</Text>
                <Text style={styles.amountText2}>
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(order.totalPrice || 0)}
                </Text>
              </View>
            </Pressable>
          ))}
        </ScrollView>
      
      )}
    </View>
  );
};

export default Invoice;
