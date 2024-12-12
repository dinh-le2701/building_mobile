import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  Pressable,
  ScrollView,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import { request } from "@component/api/requirement";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CreateRequirement = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [apartmentInfo, setApartmentInfo] = useState({});


  const loadUserData = async () => {
    try {
      const storedUserData = await AsyncStorage.getItem("user");
      if (storedUserData) {
        const user = JSON.parse(storedUserData);
        setApartmentInfo(user.apartment);
      }
    } catch (error) {
      console.log("Error loading user data: ", error);
    }
  };

  useEffect(() => {
    loadUserData();
  }, []);

  const handleRequest = async () => {
    console.log("apartmentInfo: ", apartmentInfo);
    if (title.trim() === "" || content.trim() === "") {
      Alert.alert("Thông báo", "Vui lòng nhập đ�� thông tin");
      return;
    }

    try {
      const res = await request(title, content, apartmentInfo.apartment_id);
      console.log("res: " + res);
      alert("Thành công", res.feedback_status);
      navigation.navigate("Requirement");
      console.log("res: ", JSON.stringify(res, null, 2));
    } catch (error) {
      console.log("er file create reqest: ", error);
    }
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
        <Text style={styles.headerTitle}>Tạo Yêu Cầu</Text>
      </View>
      <ScrollView
        style={styles.form}
        contentContainerStyle={{ paddingBottom: 16 }}
      >
        <Text style={styles.label}>Tiêu đề *</Text>
        <TextInput
          style={styles.input}
          multiline={true}
          placeholder="Nhập tiêu đề"
          value={title}
          onChangeText={setTitle}
        />

        <Text style={styles.label}>Nội dung *</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Nhập nội dung"
          multiline={true}
          numberOfLines={4}
          value={content}
          onChangeText={setContent}
        />
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => handleRequest()}
          style={styles.submitButton}
        >
          <Text style={styles.submitButtonText}>GỬI YÊU CẦU</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 16,
  },
  header: {
    padding: 16,
    backgroundColor: "#a1d2f5",
    alignItems: "center",
    flexDirection: "row",
  },
  headerTitle: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  arrowLeft: {
    color: "black",
    marginTop: 5,
  },
  form: {
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    marginBottom: 12,
    fontSize: 15,
  },
  textArea: {
    height: 200,
    textAlignVertical: "top",
  },
  imageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 8,
  },
  addImage: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    width: 80,
    height: 80,
    marginTop: 8,
  },
  imageIcon: {
    width: 80,
    height: 80,
    marginRight: 8,
    marginBottom: 8,
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 16,
  },
  submitButton: {
    backgroundColor: "blue",
    paddingVertical: 12,
    alignItems: "center",
    marginHorizontal: 16,
    borderRadius: 4,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CreateRequirement;
