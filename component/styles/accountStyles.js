import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
    },
    header: {
      padding: 20,
      alignItems: 'center',
      backgroundColor: '#a1d2f5',
      width: '100%',
      height: 80,
      flexDirection: 'row'
    },
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
      marginLeft: 10,
    },
    content: {
      padding: 20,
    },
    profileSection: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    profileImage: {
      width: 60,
      height: 60,
      borderRadius: 30,
    },
    profileInfo: {
      marginLeft: 15,
    },
    profileName: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    profilePhone: {
      fontSize: 16,
      color: 'gray',
    },
    accountInfo: {
      backgroundColor: '#ffffff',
      padding: 15,
      borderRadius: 10,
      marginBottom: 20,
    },
    accountDetail: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    accountAddress: {
      fontSize: 14,
      color: 'gray',
    },
    settingsList: {
      backgroundColor: '#ffffff',
      padding: 15,
      borderRadius: 10,
    },
    settingItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#e0e0e0',
    },
    settingText: {
      fontSize: 16,
      flex: 1,
      marginLeft: 10,
    },
    settingDetail: {
      fontSize: 16,
      color: 'gray',
    },
    settingSwitch: {
      marginLeft: 'auto',
    },
    btn_logout:{
      width: '100%',
      height: 40,
      borderRadius: 5,
      flexDirection:'row',
      backgroundColor: '#436EEE',
      marginTop:10,
      marginBottom: 50
    },
    
    logout_text:{
      fontSize: 16, 
      fontWeight:'600', 
      color: 'white',
      marginLeft: 10,
      marginTop: 7
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
export {styles};