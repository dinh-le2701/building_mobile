import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image, FlatList,} from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import backgroundImg from "@img/toanha.jpg";
import { styles } from '@component/styles/notificationStyles';

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
        <Pressable>
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


