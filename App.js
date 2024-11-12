import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import các màn hình
import SignIn from '@component/screen/SignIn/SignIn';
import Home from '@component/screen/Resident/Home/HomeResident';
import Infomation from '@component/screen/Resident/Infomation/InfoApartmentResident';
import Payment from '@component/screen/Resident/Payment/Payment';
import PaymentDetail from '@component/screen/Resident/Payment/PaymentDetail';
import Notification from '@component/screen/Resident/Notification/Notification';
import Invoice from '@component/screen/Resident/Invoice/Invoice';
import InvoiceDetail from '@component/screen/Resident/Invoice/InvoiceDetail';
import Contract from '@component/screen/Resident/Contract/LeaseContract';
import SaleContract from '@component/screen/Resident/Contract/SaleContract';
import Rules from '@component/screen/Resident/Rule/Rules';
import Vehicle from '@component/screen/Resident/Infomation/InfoVehicle';
import Acount from '@component/screen/Resident/Account/AcountResident';
import Report from '@component/screen/Report/Report';
import CreateReport from '@component/screen/Report/CreateReport';
import SalaryStaff from '@component/screen/Staff/Salary/SalaryStaff';
import HomeStaff from '@component/screen/Staff/HomeStaff/HomeStaff';
import NotificationStaff from '@component/screen/Staff/NotificationStaff/NotificationStaff';
import RuleStaff from '@component/screen/Staff/RuleStaff/RuleStaff';
import AccountStaff from '@component/screen/Staff/AccountStaff/AccountStaff';
import LaborContract from '@component/screen/Staff/ContractStaff/LaborContract';
import WorkSchedule from '@component/screen/Staff/WorkSchedule/WorkSchedule';
import WorkScheduleDetail from '@component/screen/Staff/WorkSchedule/WorkScheduleDetail';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>       
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Infomation" component={Infomation} />
          <Stack.Screen name="Vehicle" component={Vehicle} />
          <Stack.Screen name="Payment" component={Payment} />
          <Stack.Screen name="PaymentDetail" component={PaymentDetail} />
          <Stack.Screen name="Notification" component={Notification} />
          <Stack.Screen name="Invoice" component={Invoice} />
          <Stack.Screen name="InvoiceDetail" component={InvoiceDetail} />
          <Stack.Screen name="Contract" component={Contract} />
          <Stack.Screen name="SaleContract" component={SaleContract} />
          <Stack.Screen name="Rules" component={Rules} />
          <Stack.Screen name="Account" component={Acount} />

          <Stack.Screen name="HomeStaff" component={HomeStaff} />
          <Stack.Screen name="NotificationStaff" component={NotificationStaff} />
          <Stack.Screen name="LaborContract" component={LaborContract} />
          <Stack.Screen name="RuleStaff" component={RuleStaff} />
          <Stack.Screen name="AccountStaff" component={AccountStaff} />
          <Stack.Screen name="SalaryStaff" component={SalaryStaff} />
          <Stack.Screen name="WorkSchedule" component={WorkSchedule} />
          <Stack.Screen name="WorkScheduleDetail" component={WorkScheduleDetail} />

          <Stack.Screen name="Report" component={Report} />
          <Stack.Screen name="CreateReport" component={CreateReport} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
