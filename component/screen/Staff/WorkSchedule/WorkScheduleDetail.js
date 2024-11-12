import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable, TouchableOpacity, Alert } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

const WorkScheduleDetail = ({ navigation, route }) => {
  const [selectedShifts, setSelectedShifts] = useState({});
  const [weekDates, setWeekDates] = useState([]);
  const maxDays = 6;

  const daysOfWeek = [
    { day: 'Thứ 2', value: 'monday' },
    { day: 'Thứ 3', value: 'tuesday' },
    { day: 'Thứ 4', value: 'wednesday' },
    { day: 'Thứ 5', value: 'thursday' },
    { day: 'Thứ 6', value: 'friday' },
    { day: 'Thứ 7', value: 'saturday' },
    { day: 'Chủ nhật', value: 'sunday' },
  ];

  const shifts = [
    { label: 'Ca sáng: 7:00 AM - 15:00 PM', value: 'morning' },
    { label: 'Ca chiều: 15:00 PM - 23:00 PM', value: 'afternoon' },
    { label: 'Ca đêm: 23:00 PM - 7:00 AM', value: 'night' },
  ];

  const handleShiftSelection = (day, shift) => {
    setSelectedShifts((prevSelectedShifts) => ({
      ...prevSelectedShifts,
      [day]: shift,
    }));
  };
  

  // Hàm tính toán ngày thứ hai của tuần tiếp theo
  const getNextMonday = () => {
    const today = new Date();
    const currentDay = today.getDay();
    const diffToNextMonday = (currentDay === 0 ? 6 : 7 - currentDay + 1);
    
    const nextMonday = new Date(today);
    nextMonday.setDate(today.getDate() + diffToNextMonday);
    
    return nextMonday;
  };

  // Tạo mảng các ngày trong tuần từ thứ Hai đến Chủ Nhật của tuần sau
  const calculateNextWeekDates = () => {
    const nextMonday = getNextMonday();
    const week = [];
    
    for (let i = 0; i < 7; i++) {
      const currentDay = new Date(nextMonday);
      currentDay.setDate(nextMonday.getDate() + i);

      // Định dạng ngày thành dd-mm-yyyy
      const formattedDate = currentDay.toLocaleDateString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      });
      week.push(formattedDate);
    }
    
    return week;
  };

  useEffect(() => {
    const week = calculateNextWeekDates();
    setWeekDates(week);
  }, []);

  // Lưu lịch làm việc khi người dùng nhấn đăng ký
  const handleSave = () => {
    if (Object.keys(selectedShifts).length === 0) {
      Alert.alert('Vui lòng chọn ít nhất 1 ngày làm việc.');
      return;
    }

    const isDuplicate = Object.values(selectedShifts).some(
      (shift, index, array) => array.indexOf(shift) !== index
    );
    if (isDuplicate) {
      Alert.alert('Các ca làm việc không được trùng lặp trong tuần.');
      return;
    }

    navigation.navigate('WorkSchedule', { selectedShifts });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="white" style={styles.arrowLeft} />
        </Pressable>
        <Text style={styles.headerText}>Đăng Ký Lịch Làm Việc</Text>
      </View>

      <ScrollView style={styles.content}>
        <View>
          <Text style={styles.selectedInfo}>Họ tên: Huỳnh Thị Ngọc Khá</Text>
          <Text style={styles.selectedInfo}>Chức vụ: Nhân viên kỹ thuật</Text>

          {/* Hiển thị khoảng thời gian tuần làm việc */}
          <Text style={styles.selectedDate}>
            Tuần làm việc: {weekDates[0]} đến {weekDates[6]}
          </Text>
        </View>

        {daysOfWeek.map(({ day, value }) => (
          <View key={value} style={styles.plannerContainer}>
            <Text style={styles.plannerText}>{day}</Text>
            {shifts.map((shift) => (
              <TouchableOpacity
                key={shift.value}
                style={styles.radioContainer}
                onPress={() => handleShiftSelection(value, shift.value)}>
                <View
                  style={[
                    styles.radioButton,
                    selectedShifts[value] === shift.value && styles.radioSelected,
                  ]}
                />
                <Text style={styles.radioLabel}>{shift.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <Pressable style={styles.btnAdd} onPress={handleSave}>
          <Text style={styles.textAdd}>Đăng ký</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default WorkScheduleDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: '#a1d2f5',
    width: '100%',
    height: 80,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 15,
  },
  arrowLeft: {
    color: 'black',
    marginLeft: 15,
  },
  content: {
    marginTop: 100,
    paddingHorizontal: 15,
  },
  plannerContainer: {
    marginBottom: 25,
  },
  plannerText: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  selectedInfo:{
    fontSize: 18,
    marginBottom: 10,
    fontWeight: '500',
  },
  selectedDate: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight:'500',
    color:'green'
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 20,
  },
  radioButton: {
    height: 13,
    width: 13,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: '#333',
    marginRight: 10,
  },
  radioSelected: {
    backgroundColor: '#333',
  },
  radioLabel: {
    fontSize: 16,
  },
  footer: {
    padding: 15,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  btnAdd: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 8,
  },
  textAdd: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
