import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, ScrollView, Image } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { getStaffIdFromAccountId } from '@component/api/user';
import { styles } from '@component/styles/infoStaffStyles';

const InfoStaff = ({ navigation }) => {
  const [staffInfo, setStaffInfo] = useState(null);

  useEffect(() => {
    // Gọi hàm lấy thông tin nhân viên
    const fetchStaffInfo = async () => {
      const staffData = await getStaffIdFromAccountId();
      setStaffInfo(staffData);
    };

    fetchStaffInfo();
  }, []);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="white" style={styles.arrowLeft} />
        </Pressable>
        <Text style={styles.headerTitle}>Thông tin nhân viên</Text>
      </View>

      {/* Content */}
      <ScrollView style={styles.content}>
        {staffInfo ? (
          <>
            <View style={styles.info_avatar}>
              <Image style={styles.avatar} source={{ uri: staffInfo.staff_img || 'default-image-url' }} />
            </View>

            {/* Thông tin nhân viên */}
            <View style={styles.info_section}>
              <View style={styles.info_row}>
                <Text style={styles.info_label}>Tên nhân viên:</Text>
                <Text style={styles.info_value}>{staffInfo.staff_name || 'Chưa có thông tin'}</Text>
              </View>
              <View style={styles.info_row}>
                <Text style={styles.info_label}>Mã nhân viên:</Text>
                <Text style={styles.info_value}>{staffInfo.staff_code || 'Chưa có thông tin'}</Text>
              </View>
              <View style={styles.info_row}>
                <Text style={styles.info_label}>Chức vụ:</Text>
                <Text style={styles.info_value}>{staffInfo.staff_position || 'Chưa có thông tin'}</Text>
              </View>
              <View style={styles.info_row}>
                <Text style={styles.info_label}>Ngày sinh:</Text>
                <Text style={styles.info_value}>{staffInfo.birthday || 'Chưa có thông tin'}</Text>
              </View>
              <View style={styles.info_row}>
                <Text style={styles.info_label}>Email:</Text>
                <Text style={styles.info_value}>{staffInfo.email || 'Chưa có thông tin'}</Text>
              </View>
              <View style={styles.info_row}>
                <Text style={styles.info_label}>Số điện thoại:</Text>
                <Text style={styles.info_value}>{staffInfo.phone || 'Chưa có thông tin'}</Text>
              </View>
            </View>
          </>
        ) : (
          <Text>Đang tải thông tin nhân viên...</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default InfoStaff;
