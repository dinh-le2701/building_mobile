import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image, FlatList,} from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import backgroundImg from "@img/toanha.jpg";

const NotificationStaff= ({ navigation,route }) => {
  const notifications = [
    {
      id: '1',
      title: 'Đơn xin nghỉ phép của bạn đã được duyệt',
      icon: source={backgroundImg},
      description: 'Ngày gửi 11/11/2024',
      status: 'Đã duyệt',
    },
    {
      id: '2',
      title: 'Hóa đơn tiền lương của bạn đã có',
      icon: source={backgroundImg},
      description: 'Ngày gửi 03/11/2024',
    },
    {
      id: '3',
      title: 'Đơn xin nghỉ phép của bạn đã được duyệt',
      icon: source={backgroundImg},
      description: 'Ngày gửi 11/11/2024',
      status: 'Đã duyệt',
    },
    {
      id: '4',
      title: 'Hóa đơn tiền lương của bạn đã có',
      icon: source={backgroundImg},
      description: 'Ngày gửi 03/11/2024',
    },
    {
      id: '5',
      title: 'Đơn xin nghỉ phép của bạn đã được duyệt',
      icon: source={backgroundImg},
      description: 'Ngày gửi 11/11/2024',
      status: 'Đã duyệt',
    },
    {
      id: '6',
      title: 'Hóa đơn tiền lương của bạn đã có',
      icon: source={backgroundImg},
      description: 'Ngày gửi 03/11/2024',
    },
    {
      id: '7',
      title: 'Đơn xin nghỉ phép của bạn đã được duyệt',
      icon: source={backgroundImg},
      description: 'Ngày gửi 11/11/2024',
      status: 'Đã duyệt',
    },
    {
      id: '8',
      title: 'Hóa đơn tiền lương của bạn đã có',
      icon: source={backgroundImg},
      description: 'Ngày gửi 03/11/2024',
    },
  
  ];

  const NotificationItem = ({ item }) => (
    <View style={styles.notificationContainer}>
      <Image source={item.icon} style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.status}>{item.status}</Text>
        
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Thông báo</Text>
      </View>
      <View style={styles.content} >
        <Pressable onPress={()=>navigation.navigate('Invoice')}>
          <FlatList
          data={notifications}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <NotificationItem item={item} />}
          contentContainerStyle={styles.listContainer}
          />
        </Pressable>     
      </View>

       {/* Footer Navigation */}
       <View style={styles.footer}>
        <Pressable style={styles.footerItem} onPress={() => navigation.navigate('HomeStaff')}>
          <Entypo name="home" size={24} color="black" />
          <Text style={styles.footerText}>Trang chủ</Text>
        </Pressable>
        <Pressable style={styles.footerItem} onPress={() => navigation.navigate('WorkSchedule')}>
          <MaterialCommunityIcons name="calendar-edit" size={24} color="black" />
          <Text style={styles.footerText}>Lịch làm việc</Text>
        </Pressable>
        <Pressable style={styles.footerItem} onPress={() => navigation.navigate('NotificationStaff')}>
          <Ionicons name="notifications" size={24} color="#004d8d" />
          <Text style={styles.footerText1}>Thông báo</Text>
        </Pressable>
        <Pressable style={styles.footerItem} onPress={() => navigation.navigate('AccountStaff')}>
          <MaterialCommunityIcons name="account" size={24} color="black" />
          <Text style={styles.footerText}>Tài khoản</Text>
        </Pressable>
      </View>
    </View>
  );
}
export default NotificationStaff;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#a1d2f5',
    width: '100%',
    height: 80,
    top: 0,
    position: 'absolute',
  },
  text_header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 30,
    marginLeft: 30,
    
  },
  content:{
    marginTop: 100, 
    paddingHorizontal: 10,
    width: '100%',
    flex:1,
  },
  borderwidth:{
    width: '100%',
    height: 1,
    backgroundColor: 'black',
  },

  notificationContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
  },
  listContainer:{
    
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 15,
    borderRadius: 25,
    marginTop: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#888',
  },
  price: {
    fontSize: 14,
    color: '#888',
    fontStyle: 'italic',
  },

  status:{
    fontSize: 14,
    fontWeight: '400',
    color: 'green',
    fontStyle: 'italic',
    marginTop: 5
  },

  payment:{
    width: 90,
    height: 30,
    backgroundColor: 'blue',
    borderRadius: 5,
    shadowRadius:2,
    shadowColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 150,
    marginTop: -30,
  },

  payment_text:{
    color: 'white',
    fontWeight: '500'
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    height: 60,
    width: '100%', 
    position: 'absolute',
    bottom: 0, 
    justifyContent: 'space-around', 
    alignItems: 'center',
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    fontWeight: '700',
    marginTop: 2,
  },
  footerText1: {
    fontSize: 12,
    fontWeight: '700',
    marginTop: 2,
    color: '#004d8d'
  },

});
