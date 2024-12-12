import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image, FlatList,} from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import backgroundImg from "@img/toanha.jpg";
import { styles } from '@component/styles/notificationStyles';


const Notification= ({ navigation,route }) => {
  const notifications = [
    {
      id: '1',
      title: 'Bạn có hóa đơn tháng 10/2024',
      duration: 'Hạn đóng 5 ngày',
      icon: source={backgroundImg},
      price: '5.862.340VNĐ',
      status: 'Chưa thanh toán',
    },
    {
      id: '2',
      title: 'Bạn có hóa đơn tháng 9/2024',
      duration: 'Hạn đóng 5 ngày',
      icon: source={backgroundImg},
      price: '5.862.340VNĐ', 
      status: 'Đã thanh toán',
    },
    {
      id: '3',
      title: 'Bạn có hóa đơn tháng 9/2024',
      duration: 'Hạn đóng 5 ngày',
      icon: source={backgroundImg},
      price: '5.862.340VNĐ', 
      status: 'Đã thanh toán',
    },
    {
      id: '4',
      title: 'Bạn có hóa đơn tháng 9/2024',
      duration: 'Hạn đóng 5 ngày',
      icon: source={backgroundImg},
      price: '5.862.340VNĐ', 
      status: 'Chưa thanh toán',
    },
    {
      id: '5',
      title: 'Bạn có hóa đơn tháng 9/2024',
      duration: 'Hạn đóng 5 ngày',
      icon: source={backgroundImg},
      price: '5.862.340VNĐ', 
      status: 'Chưa thanh toán',
    },
    {
      id: '6',
      title: 'Bạn có hóa đơn tháng 9/2024',
      duration: 'Hạn đóng 5 ngày',
      icon: source={backgroundImg},
      price: '5.862.340VNĐ', 
      status: 'Chưa thanh toán',
    },
    {
      id: '7',
      title: 'Bạn có hóa đơn tháng 9/2024',
      duration: 'Hạn đóng 5 ngày',
      icon: source={backgroundImg},
      price: '5.862.340VNĐ', 
      status: 'Dã thanh toán',
    },
    {
      id: '8',
      title: 'Bạn có hóa đơn tháng 9/2024',
      duration: 'Hạn đóng 5 ngày',
      icon: source={backgroundImg},
      price: '5.862.340VNĐ', 
      status: 'Chưa thanh toán',
    },
    {
      id: '9',
      title: 'Bạn có hóa đơn tháng 9/2024',
      duration: 'Hạn đóng 5 ngày',
      icon: source={backgroundImg},
      price: '5.862.340VNĐ', 
      status: 'Chưa thanh toán',
    },
    {
      id: '10',
      title: 'Bạn có hóa đơn tháng 9/2024',
      duration: 'Hạn đóng 5 ngày',
      icon: source={backgroundImg},
      price: '5.862.340VNĐ', 
      status: 'Dã thanh toán',
    },
  
  ];

  const NotificationItem = ({ item }) => (
    <View style={styles.notificationContainer}>
      <Image source={item.icon} style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.duration}>{item.duration}</Text>
        <Text style={styles.price}>{item.price}</Text>
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

      <View style={styles.footer}>
        <Pressable style={styles.content_footer1}
          onPress={()=>navigation.navigate('HomeResident')}>
            <Entypo name="home" size={24} color="black" style={styles.expo_footer}/>
            <Text style={styles.text_footer_home}>Trang chủ</Text>
        </Pressable>

        <Pressable style={styles.content_footer2}
          onPress={()=>navigation.navigate('Payment')}>

          <MaterialIcons name="payment" size={24} color="black" />
          <Text style={styles.text_footer_pay}>Thanh toán</Text>
        </Pressable>

        <Pressable style={styles.content_footer3}
          onPress={()=>navigation.navigate('Notification')}>

          <Ionicons name="notifications" size={24} color="#004d8d" />
          <Text style={styles.text_footer_notification}>Thông báo</Text>
        </Pressable>
        <Pressable style={styles.content_footer4}
          onPress={()=>navigation.navigate('AccountResident')}
        >
          <MaterialCommunityIcons name="account" size={24} color="#black" />
          <Text style={styles.text_footer_account}>Tài khoản</Text>
        </Pressable>
      </View>
    </View>
  );
}
export default Notification;


