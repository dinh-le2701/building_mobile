import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, MaterialIcons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Home from '@/app/Screens/Home';
import Payment from '@/app/Screens/Payment';
import Notification from '@/app/Screens/Notification';
import Account from '@/app/Screens/Account';
import bottomTabStyles from '@/styles/bottomTabStyles';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: bottomTabStyles.tabBarStyle,
        tabBarLabelStyle: bottomTabStyles.tabBarLabelStyle,
        tabBarActiveTintColor: bottomTabStyles.activeLabelStyle.color,
        tabBarInactiveTintColor: bottomTabStyles.inactiveLabelStyle.color,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} style={bottomTabStyles.tabBarIcon} />
          ),
          tabBarLabel: 'Trang chủ',
        }}
      />
      <Tab.Screen
        name="Payment"
        component={Payment}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="payment" size={24} color={color} style={bottomTabStyles.tabBarIcon} />
          ),
          tabBarLabel: 'Thanh toán',
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications" size={24} color={color} style={bottomTabStyles.tabBarIcon} />
          ),
          tabBarLabel: 'Thông báo',
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
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
