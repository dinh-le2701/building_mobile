import { Text, View, ScrollView, Pressable, Image } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import logo from "@img/lo-go.png";
import canho from "@img/canho1.jpg";
import Banner from "@component/animation/Banner";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";
import { getUser } from "@component/api/user";
import { homeStyles } from "@component/styles/homeStyles";
import Requirement from "@component/screen/Requirement/Requirement";
import {
  calculateElectricityCost,
  calculateWaterCost,
  calculateTotalAmount,
  calculateBillingMonth,
  getLatestMonthUsages,
} from "@component/utils/calculateCosts";
import { useFocusEffect } from "@react-navigation/native";
import { getInvoices } from "@component/api/invoice";
import { getRequiments } from "@component/api/requirement";

const banners = [
  { id: "1", img: require("../../../img/banner1.png") },
  { id: "2", img: require("../../../img/banner2.png") },
  { id: "3", img: require("../../../img/banner3.png") },
];

const HomeResident = ({ navigation }) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [billingMonth, setBillingMonth] = useState("");
  const [loading, setLoading] = useState(true);
  const [feedbacks, setFeedBacks] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      loadUserData();
    }, [])
  );

  const getAllUtilityUsages = async (apartment_id) => {
    try {
      setLoading(true); // Bắt đầu loading
      const res = await getInvoices(apartment_id);
      if (res && res.utilityUsages) {
        const sortedutilityUsages = res.utilityUsages.sort((a, b) => {
          const dateA = new Date(
            a.update_date.split(" ")[0].split("-").reverse().join("-")
          );
          const dateB = new Date(
            b.update_date.split(" ")[0].split("-").reverse().join("-")
          );
          return dateB - dateA; // Sắp xếp từ mới nhất đến cũ nhất
        });
        setBillingMonth(
          calculateBillingMonth(sortedutilityUsages[0].create_date)
        );
        setTotalAmount(sortedutilityUsages[0].totalPrice);

        await saveAllOrdersToAsyncStorage(sortedutilityUsages);
      } else {
        console.log("No utility usage data found");
      }
    } catch (error) {
      console.log("Error fetching utility usages: ", error);
    } finally {
      setLoading(false); // Kết thúc loading
    }
  };

  const saveAllOrdersToAsyncStorage = async (sortedMonthlyData) => {
    try {
      await AsyncStorage.setItem(
        "monthlyOrders",
        JSON.stringify(sortedMonthlyData)
      );
      console.log("Saved all monthly data to AsyncStorage");
    } catch (error) {
      console.log("Error saving all monthly data to AsyncStorage: ", error);
    }
  };

  const [apartmentInfo, setApartmentInfo] = useState({});

  const loadUserData = async () => {
    try {
      const storedUserData = await AsyncStorage.getItem("user");
      if (storedUserData) {
        const user = JSON.parse(storedUserData);
        setApartmentInfo(user.apartment);
        getAllUtilityUsages(user.apartment.apartment_id);
        feedback(user.apartment.apartment_id);
        console.log("apartment:", JSON.stringify(user.apartment, null, 2));
      }
    } catch (error) {
      console.log("Error loading user data: ", error);
    }
  };

  const feedback = async (id) => {
    try {
      const res = await getRequiments(id);
      if (res) {
        setFeedBacks(res.feedbacks);
        console.log("feedbacks: ", res.feedbacks)
      }
    } catch (error) {
      console.log("Error loading user data: ", error);
    }
  }

  return (
    <View style={homeStyles.container}>
      {/* Header */}
      <Image source={canho} style={homeStyles.banner} />
      <View style={homeStyles.header}>
        <View style={homeStyles.headerText}>
          <Text style={homeStyles.headerTitle1}>Căn hộ</Text>
          <View style={homeStyles.btnTitle}>
            <Text style={homeStyles.headerTitle2}>
              {apartmentInfo.apartment_name}
            </Text>
          </View>
        </View>
        <Image source={logo} style={homeStyles.logo} />
      </View>

      <ScrollView style={homeStyles.content}>
        <View style={homeStyles.shortcutContainer}>
          <Pressable
            style={homeStyles.homeItemContainer}
            onPress={() => navigation.navigate("InfoApartmentResident")}
          >
            <View style={homeStyles.iconCircle1}>
              <FontAwesome name="users" size={24} color="white" />
            </View>
            <Text style={homeStyles.homeItemText}>Căn hộ và cư dân</Text>
          </Pressable>
          <Pressable
            style={homeStyles.homeItemContainer}
            onPress={() => navigation.navigate("InfoVehicle")}
          >
            <View style={homeStyles.iconCircle2}>
              <MaterialIcons name="maps-home-work" size={24} color="white" />
            </View>

            <Text style={homeStyles.homeItemText}>Phương tiện</Text>
          </Pressable>
          <Pressable
            style={homeStyles.homeItemContainer}
            onPress={() => navigation.navigate("Invoice")}
          >
            <View style={homeStyles.iconCircle3}>
              <FontAwesome5
                name="file-invoice-dollar"
                size={24}
                color="white"
              />
            </View>
            <Text style={homeStyles.homeItemText}>Hóa đơn</Text>
          </Pressable>

          <Pressable
            style={homeStyles.homeItemContainer}
            onPress={() => navigation.navigate("Requirement")}
          >
            <View style={homeStyles.iconCircle4}>
              <Entypo name="direction" size={24} color="white" />
            </View>
            <Text style={homeStyles.homeItemText}>Yêu cầu & Khiếu nại</Text>
          </Pressable>

          <Pressable
            style={homeStyles.homeItemContainer}
            onPress={() => navigation.navigate("Payment")}
          >
            <View style={homeStyles.iconCircle5}>
              <MaterialIcons name="payment" size={24} color="white" />
            </View>

            <Text style={homeStyles.homeItemText}>Thanh toán</Text>
          </Pressable>

          <Pressable
            style={homeStyles.homeItemContainer}
            onPress={() => navigation.navigate("Rules")}
          >
            <View style={homeStyles.iconCircle6}>
              <AntDesign name="exception1" size={24} color="white" />
            </View>
            <Text style={homeStyles.homeItemText}>Nội quy</Text>
          </Pressable>
        </View>

        {/* Banner */}
        <View style={homeStyles.bannerItem}>
          <Banner banners={banners} duration={4000} />
        </View>

        {/* Notifications */}
        <View style={homeStyles.section}>
          <View style={homeStyles.sectionHeader}>
            <Text style={homeStyles.sectionTitle}>Thông báo mới</Text>
            <Pressable onPress={() => navigation.navigate("Invoice")}>
              <Text style={homeStyles.sectionLink}>Xem tất cả</Text>
            </Pressable>
          </View>
          <View style={homeStyles.notificationContainer}>
            <View style={homeStyles.notificationIconContainer}>
              <MaterialIcons name="warning" size={24} color="red" />
            </View>
            <View style={homeStyles.notificationTextContainer}>
              {billingMonth === "" ? (
                <Text style={homeStyles.notificationText}>Chưa có hóa đơn</Text>
              ) : (
                <>
                  <Text style={homeStyles.notificationText}>
                    Thông báo hóa đơn tháng {billingMonth}
                  </Text>
                  <Text style={homeStyles.notificationDate}>
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(totalAmount)}
                  </Text>
                  <Text style={homeStyles.notificationDate}>1 ngày trước</Text>
                </>
              )}
            </View>
          </View>
        </View>

        {/* Management Requirement*/}
        <View style={homeStyles.section}>
          <View style={homeStyles.sectionHeader}>
            <Text style={homeStyles.sectionTitle}>Các yêu cầu</Text>
            <Pressable onPress={() => navigation.navigate("Requirement")}>
              <Text style={homeStyles.sectionLink}>Xem tất cả</Text>
            </Pressable>
          </View>
          <View style={homeStyles.requestContainer}>
            <View
              style={[homeStyles.requestItem, { backgroundColor: "#dff3f5" }]}
            >
              <Text style={homeStyles.requestTitle}>{feedbacks[0]?.title}</Text>
              <Text style={homeStyles.requestStatus}>{feedbacks[0]?.feedbackStatus}</Text>
              <Text style={homeStyles.requestIssue}>{feedbacks[0]?.description}</Text>
              <Text style={homeStyles.requestDate}>{feedbacks[0]?.createDate}</Text>
            </View>
            <View
              style={[homeStyles.requestItem, { backgroundColor: "#f5e9cf" }]}
            >
              <Text style={homeStyles.requestTitle}>{feedbacks[1]?.title}</Text>
              <Text style={homeStyles.requestStatus}>{feedbacks[1]?.feedbackStatus}</Text>
              <Text style={homeStyles.requestIssue}>{feedbacks[1]?.description}</Text>
              <Text style={homeStyles.requestDate}>{feedbacks[1]?.createDate}</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Footer Navigation */}
      <View style={homeStyles.footer}>
        <Pressable style={homeStyles.footerItem}>
          <Entypo name="home" size={24} color="#004d8d" />
          <Text style={homeStyles.footerText1}>Trang chủ</Text>
        </Pressable>
        <Pressable
          style={homeStyles.footerItem}
          onPress={() => navigation.navigate("Payment")}
        >
          <MaterialIcons name="payment" size={24} color="black" />
          <Text style={homeStyles.footerText}>Thanh toán</Text>
        </Pressable>
        <Pressable
          style={homeStyles.footerItem}
          onPress={() => navigation.navigate("AccountResident")}
        >
          <MaterialCommunityIcons name="account" size={24} color="black" />
          <Text style={homeStyles.footerText}>Tài khoản</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default HomeResident;
