import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getRequiments } from "@component/api/requirement";
import { useFocusEffect } from "@react-navigation/native";
import { styles } from "@component/styles/requirementStyles";

const Requirement = ({ navigation }) => {
  const [feedbacks, setFeedbacks] = useState([]);

  const loadUserData = async () => {
    try {
      const storedUserData = await AsyncStorage.getItem("user");
      if (storedUserData) {
        const user = JSON.parse(storedUserData);
        if (user.apartment) {
          getAllRequiments(user.apartment.apartment_id);
        }
      }
    } catch (error) {
      console.log("Error loading user data: ", error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      loadUserData();
    }, [])
  );

  const getAllRequiments = async (apartment_id) => {
    try {
      const res = await getRequiments(apartment_id);
      if (res && res.feedbacks) {
        setFeedbacks(res.feedbacks); 
      }
      console.log("res: ", res);
    } catch (error) {
      console.log("Error fetching requirements: ", error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign
            name="arrowleft"
            size={24}
            color="white"
            style={styles.arrowleft}
          />
        </Pressable>
        <Text style={styles.headerText}>Yêu cầu và khiếu nại</Text>
      </View>

      {/* Content */}
      <ScrollView style={styles.content}>
          {Array.isArray(feedbacks) && feedbacks.length > 0 ? (
            feedbacks.map((feedback, index) => (
              <View key={feedback.id || index} style={styles.viewContent}>
                <View style={styles.viewRow}>
                  <Text style={styles.textTitle}>Tiêu đề:</Text>
                  <Text style={styles.textContent1}>{feedback.title}</Text>
                </View>

                <View style={styles.viewRow}>
                  <View>
                    <Text style={styles.textTitle}>Nội dung:</Text>
                    <Text style={styles.textContent3}>{feedback.description}</Text>
                  </View>
                  
                </View>

                <View style={styles.viewRow}>
                  <Text style={styles.textTitle}>Trạng thái:</Text>
                  <Text style={styles.textContent}>{feedback.feedbackStatus}</Text>
                </View>

                <View style={styles.viewRow}>
                  <Text style={styles.textTitle}>Ngày tạo:</Text>
                  <Text style={styles.textContent}>{feedback.create_date || "Không có ngày tạo"} </Text>
                </View>
              </View>
            ))
          ) : (
            <Text style={styles.textContent2}>Không có phản hồi nào</Text>
          )}
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Pressable
          style={styles.btn_create_request}
          onPress={() => navigation.navigate("CreateRequirement")}
        >
          <Text style={styles.text_create_request}>TẠO YÊU CẦU</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Requirement;
