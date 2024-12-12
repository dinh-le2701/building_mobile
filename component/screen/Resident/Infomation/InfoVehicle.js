import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { styles } from "@component/styles/infoVehicleStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const InfoVehicle = ({ navigation }) => {
  const [apartmentInfo, setApartmentInfo] = useState({});
  const [totalVehicles, setTotalVehicles] = useState(0);

  const loadUserData = async () => {
    try {
      const storedUserData = await AsyncStorage.getItem("user");
      if (storedUserData) {
        const user = JSON.parse(storedUserData);
        setApartmentInfo(user.apartment);

        // Tính tổng số phương tiện
        const vehiclesCount = user.apartment.residents.reduce((count, resident) => {
          return count + (resident.vehicles?.length || 0);
        }, 0);
        setTotalVehicles(vehiclesCount);
      }
    } catch (error) {
      console.log("Error loading user data: ", error);
    }
  };

  useEffect(() => {
    loadUserData();
  }, []);

  let vehicleIndex = 0; // đếm thứ tự phương tiện

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign
            name="arrowleft"
            size={24}
            color="white"
            style={styles.arrowLeft}
          />
        </Pressable>
        <Text style={styles.headerTitle}>Thông tin phương tiện</Text>
      </View>

      {/* Nội dung */}
      <ScrollView style={styles.content}>
        <View style={styles.info_section}>
          {/* Hiển thị tổng số phương tiện */}
          <Text style={[styles.info_label, { fontWeight: "700", fontSize: 20, marginBottom: 10, color:'#02457a' }]}>
            Tổng số phương tiện: {totalVehicles}
          </Text>

          {apartmentInfo.residents && apartmentInfo.residents.length > 0 ? (
            apartmentInfo.residents.map((resident) => (
              <View key={resident.resident_id} style={styles.resident_section}>
                {resident.vehicles && resident.vehicles.length > 0 ? (
                  resident.vehicles.map((vehicle) => {
                    vehicleIndex++;
                    return (
                      <View
                        key={vehicle.vehicle_id}
                        style={[
                          styles.vehicle_card,
                          { marginBottom: 20, padding: 10, backgroundColor: "#d6e8ee", borderRadius: 8, shadowColor: "#000", shadowOpacity: 0.2, shadowRadius: 5 },
                        ]}
                      >
                        <View style={styles.info_title}>
                          <MaterialCommunityIcons name="car" size={26} color="#02457a" style={{ marginRight: 5, marginTop: 8 }} />                         
                          <Text style={[styles.info_text_title, { fontWeight: "700" }]}>
                            Phương tiện thứ {vehicleIndex}
                          </Text>
                        </View>

                        <View style={styles.info_row}>
                          <Text style={styles.info_label}>👤  Chủ sở hữu:</Text>
                          <Text style={styles.info_value}>
                            {resident.resident_name}
                          </Text>
                        </View>

                        <View style={styles.info_row}>
                          <Text style={styles.info_label}>Biển số xe:</Text>
                          <Text style={styles.info_value}>
                            {vehicle.license_plate}
                          </Text>
                        </View>
                        <View style={styles.info_row}>
                          <Text style={styles.info_label}>Thương hiệu:</Text>
                          <Text style={styles.info_value}>
                            {vehicle.vehicle_name}
                          </Text>
                        </View>
                        <View style={styles.info_row}>
                          <Text style={styles.info_label}>Loại xe:</Text>
                          <Text style={styles.info_value}>
                            {vehicle.vehicle_type}
                          </Text>
                        </View>
                        <View style={styles.info_row}>
                          <Text style={styles.info_label}>Màu sắc:</Text>
                          <Text style={styles.info_value}>{vehicle.color}</Text>
                        </View>
                      </View>
                    );
                  })
                ) : (
                  <Text style={styles.info_value}>Không có phương tiện</Text>
                )}
              </View>
            ))
          ) : (
            <Text style={styles.info_value}>Không có thông tin cư dân</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default InfoVehicle;
