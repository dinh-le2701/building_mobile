import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import HomeStaff from '@/app/Screens/HomeStaff';
import WorkSchedule from '@/app/Screens/WorkSchedule';
import NotificationStaff from '@/app/Screens/NotificationStaff';
import AccountStaff from '@/app/Screens/AccountStaff';
import bottomTabStyles from '@/styles/bottomTabStyles';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStaff"
      screenOptions={{
        tabBarStyle: bottomTabStyles.tabBarStyle,
        tabBarLabelStyle: bottomTabStyles.tabBarLabelStyle,
        tabBarActiveTintColor: '#004d8d',
        tabBarInactiveTintColor: 'black',
      }}
    >
      <Tab.Screen
        name="HomeStaff"
        component={HomeStaff}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} style={bottomTabStyles.tabBarIcon} />
          ),
          tabBarLabel: 'Trang chủ',
        }}
      />
      <Tab.Screen
        name="WorkSchedule"
        component={WorkSchedule}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar-edit" size={24} color={color} style={bottomTabStyles.tabBarIcon} />
          ),
          tabBarLabel: 'Lịch làm việc',
        }}
      />
      <Tab.Screen
        name="NotificationStaff"
        component={NotificationStaff}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications" size={24} color={color} style={bottomTabStyles.tabBarIcon} />
          ),
          tabBarLabel: 'Thông báo',
        }}
      />
      <Tab.Screen
        name="AccountStaff"
        component={AccountStaff}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" size={24} color={color} style={bottomTabStyles.tabBarIcon} />
          ),
          tabBarLabel: 'Tài khoản',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
