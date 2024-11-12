import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';

const WorkSchedule = ({ navigation, route }) => {
  // Initialize the state to store the schedules.
  const [registeredShifts, setRegisteredShifts] = useState({});


  useEffect(() => {
    if (route.params?.selectedShifts) {
      setRegisteredShifts(route.params.selectedShifts);
    }
  }, [route.params?.selectedShifts]);

  return (
    <View style={styles.container}>
      <View>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Lịch làm việc</Text>
        </View>
        <ScrollView style={styles.content}>
          {Object.keys(registeredShifts).length > 0 ? (
            Object.entries(registeredShifts).map(([day, shift]) => (
              <View key={day} style={styles.scheduleItem}>
                <Text style={styles.dayText}>{day}</Text>
                <Text style={styles.shiftText}>
                  {shift === 'morning'
                    ? 'Ca sáng: 6:30 AM - 14:30 PM'
                    : shift === 'afternoon'
                    ? 'Ca chiều: 14:30 PM - 22:30 PM'
                    : 'Ca đêm: 22:30 PM - 6:30 AM'}
                </Text>
              </View>
            ))
          ) : (
            <Text style={styles.noScheduleText}>Chưa có ca làm việc nào được đăng ký.</Text>
          )}

          {/* Add Schedule Button */}
          
        </ScrollView>
        <View style={styles.addBox}>
          <Pressable style={styles.btnAdd} onPress={() => navigation.navigate("WorkScheduleDetail")}>
            <AntDesign name="pluscircle" size={48} color="blue" style={styles.add} />
          </Pressable>
        </View>
      </View>

      {/* Footer Navigation */}
      <View style={styles.footer}>
        <Pressable style={styles.footerItem} onPress={() => navigation.navigate('HomeStaff')}>
          <Entypo name="home" size={24} color="black" />
          <Text style={styles.footerText}>Trang chủ</Text>
        </Pressable>
        <Pressable style={styles.footerItem} onPress={() => navigation.navigate('WorkSchedule')}>
          <MaterialCommunityIcons name="calendar-edit" size={24} color="#004d8d" />
          <Text style={styles.footerTextSelected}>Lịch làm việc</Text>
        </Pressable>
        <Pressable style={styles.footerItem} onPress={() => navigation.navigate('NotificationStaff')}>
          <Ionicons name="notifications" size={24} color="black" />
          <Text style={styles.footerText}>Thông báo</Text>
        </Pressable>
        <Pressable style={styles.footerItem} onPress={() => navigation.navigate('AccountStaff')}>
          <MaterialCommunityIcons name="account" size={24} color="black" />
          <Text style={styles.footerText}>Tài khoản</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default WorkSchedule;

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
    marginBottom: 'auto',
    position: 'absolute',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 15,
    marginTop: 20,
  },
  content: {
    marginTop: 100,
    paddingHorizontal: 15,
  },
  addBox: {
    alignItems: 'center',
    marginVertical: 20,
  },
  btnAdd: {},
  add: {
    textAlign: 'center',
  },
  scheduleContainer: {
    padding: 15,
    backgroundColor: '#e0f7fa',
    marginBottom: 15,
    borderRadius: 8,
  },
  weekText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#004d8d',
  },
  dayContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  dayText: {
    fontSize: 16,
    fontWeight: '600',
  },
  shiftText: {
    fontSize: 16,
    color: '#555',
  },
  noScheduleText: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginTop: 20,
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    height: 60,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 'auto',
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    fontWeight: '700',
    marginTop: 2,
  },
  footerTextSelected: {
    fontSize: 12,
    fontWeight: '700',
    marginTop: 2,
    color: '#004d8d',
  },
});
