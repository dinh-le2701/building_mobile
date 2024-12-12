import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { styles } from '@component/styles/infoApartStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const InfoApartmentResident = ({ navigation }) => {
  const [apartmentInfo, setApartmentInfo] = useState({});
  const [totalResidents, setTotalResidents] = useState(0);

  const loadUserData = async () => {
    try {
      const storedUserData = await AsyncStorage.getItem('user');
      if (storedUserData) {
        const user = JSON.parse(storedUserData);
        setApartmentInfo(user.apartment);

        // Tính tổng số cư dân
        const residentsCount = user.apartment.residents ? user.apartment.residents.length : 0;
        setTotalResidents(residentsCount);
      }
    } catch (error) {
      console.log('Error loading user data: ', error);
    }
  };

  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="white" style={styles.arrowLeft} />
        </Pressable>
        <Text style={styles.headerTitle}>Thông tin căn hộ và cư dân</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.info_section}>
          {/* Thông tin căn hộ */}          
          <Text style={styles.info_text}>THÔNG TIN CĂN HỘ</Text>
          <View style={{ backgroundColor: "#d6e8ee", borderRadius: 8, shadowColor: "#000", shadowOpacity: 0.2, shadowRadius: 5, marginBottom: 10}}>
            <View style={styles.info_row}>
              <Text style={styles.info_label}>Tên căn hộ:</Text>
              <Text style={styles.info_value}>{apartmentInfo.apartment_name || 'Chưa có thông tin'}</Text>
            </View>
            <View style={styles.info_row}>
              <Text style={styles.info_label}>Diện tích:</Text>
              <Text style={styles.info_value}>{apartmentInfo.area || 'Chưa có thông tin'}</Text>
            </View>
            <View style={styles.info_row}>
              <Text style={styles.info_label}>Số phòng:</Text>
              <Text style={styles.info_value}>{apartmentInfo.number_of_room || 'Chưa có thông tin'}</Text>
            </View>
            <View style={styles.info_row}>
              <Text style={styles.info_label}>Tổng số cư dân:</Text>
              <Text style={styles.info_value}>{totalResidents}</Text>
            </View>
          </View>

          {/* Thông tin cư dân */}
          <Text style={styles.info_text}>DANH SÁCH CƯ DÂN</Text>
          {apartmentInfo.residents && apartmentInfo.residents.length > 0 ? (
            apartmentInfo.residents.map((resident, index) => (
              <View key={resident.resident_id} style={styles.resident_section}>
                <View style={{ backgroundColor: "#d6e8ee", borderRadius: 8, shadowColor: "#000", shadowOpacity: 0.2, shadowRadius: 5, marginBottom: 20, marginTop: 10}}>
                    <View style={styles.info_title}>
                    <MaterialCommunityIcons name="account" size={26} color="black" style={styles.icon} />
                    <Text style={styles.info_text_title}>Thành viên thứ {index + 1}</Text>
                  </View>

                  <View style={styles.info_row}>
                    <Text style={styles.info_label}>Tên cư dân:</Text>
                    <Text style={styles.info_value}>{resident.resident_name || 'Chưa có thông tin'}</Text>
                  </View>

                  <View style={styles.info_row}>
                    <Text style={styles.info_label}>Số điện thoại:</Text>
                    <Text style={styles.info_value}>{resident.phone_number || 'Chưa có thông tin'}</Text>
                  </View>

                  <View style={styles.info_row}>
                    <Text style={styles.info_label}>Email:</Text>
                    <Text style={styles.info_value}>{resident.email || 'Chưa có thông tin'}</Text>
                  </View>

                  <View style={styles.info_row}>
                    <Text style={styles.info_label}>Số CCCD:</Text>
                    <Text style={styles.info_value}>{resident.cccd || 'Chưa có thông tin'}</Text>
                  </View>

                  <View style={styles.info_row}>
                    <Text style={styles.info_label}>Ngày sinh:</Text>
                    <Text style={styles.info_value}>{resident.birthday || 'Chưa có thông tin'}</Text>
                  </View>

                  <View style={styles.info_row}>
                    <Text style={styles.info_label}>Ngày vào ở:</Text>
                    <Text style={styles.info_value}>{resident.move_in_date || 'Chưa có thông tin'}</Text>
                  </View>
                </View>
                
              </View>
            ))
          ) : (
            <Text style={styles.info_value}>Chưa có thông tin cư dân</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default InfoApartmentResident;
