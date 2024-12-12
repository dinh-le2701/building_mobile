import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import các màn hình
import SignIn from '@component/screen/SignIn/SignIn';
import Payment from '@component/screen/Resident/Payment/Payment';
import PaymentDetail from '@component/screen/Resident/Payment/PaymentDetail';
import Notification from '@component/screen/Resident/Notification/Notification';
import Invoice from '@component/screen/Resident/Invoice/Invoice';
import InvoiceDetail from '@component/screen/Resident/Invoice/InvoiceDetail';
import Rules from '@component/screen/Resident/Rule/Rules';
import SalaryStaff from '@component/screen/Staff/Salary/SalaryStaff';
import HomeStaff from '@component/screen/Staff/HomeStaff/HomeStaff';
import NotificationStaff from '@component/screen/Staff/NotificationStaff/NotificationStaff';
import RuleStaff from '@component/screen/Staff/RuleStaff/RuleStaff';
import AccountStaff from '@component/screen/Staff/AccountStaff/AccountStaff';
import HomeResident from '@component/screen/Resident/Home/HomeResident';
import AccountResident from '@component/screen/Resident/Account/AccountResident';
import InfoApartmentResident from '@component/screen/Resident/Infomation/InfoApartmentResident';
import InfoVehicle from '@component/screen/Resident/Infomation/InfoVehicle';
import InfoStaff from '@component/screen/Staff/Infomation/InfoStaff';
import CreateRequirement from '@component/screen/Requirement/CreateRequirement';
import Requirement from '@component/screen/Requirement/Requirement';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>       
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="HomeResident" component={HomeResident} />
          <Stack.Screen name="InfoApartmentResident" component={InfoApartmentResident} />
          <Stack.Screen name="InfoVehicle" component={InfoVehicle} />
          <Stack.Screen name="Payment" component={Payment} />
          <Stack.Screen name="PaymentDetail" component={PaymentDetail} />
          <Stack.Screen name="Notification" component={Notification} />
          <Stack.Screen name="Invoice" component={Invoice} />
          <Stack.Screen name="InvoiceDetail" component={InvoiceDetail} />
          <Stack.Screen name="Rules" component={Rules} />
          <Stack.Screen name="AccountResident" component={AccountResident} /> 

          <Stack.Screen name="HomeStaff" component={HomeStaff} />
          <Stack.Screen name="NotificationStaff" component={NotificationStaff} />
          <Stack.Screen name="RuleStaff" component={RuleStaff} />
          <Stack.Screen name="AccountStaff" component={AccountStaff} />
          <Stack.Screen name="SalaryStaff" component={SalaryStaff} />
          <Stack.Screen name="InfoStaff" component={InfoStaff} />

          <Stack.Screen name="Requirement" component={Requirement} />
          <Stack.Screen name="CreateRequirement" component={CreateRequirement} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
