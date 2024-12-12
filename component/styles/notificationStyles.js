import { StyleSheet } from "react-native";
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
  duration: {
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
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  content_footer1: {
    alignItems: 'center',
    
  },
  content_footer2: {
    alignItems: 'center',
    marginTop: 2, 
  },
  content_footer3: {
    alignItems: 'center',
  },
  content_footer4: {
    alignItems: 'center',
  },
  
  text_footer_home: {
    fontSize: 12,
    fontWeight: '700',
    color: 'black',
  },
  text_footer_pay: {
    fontSize: 12,
    fontWeight: '700',
    color: 'black'
  },
  text_footer_notification: {
    fontSize: 12,
    fontWeight: '700',
    color: '#004d8d',
  },
  text_footer_account: {
    fontSize: 12,
    fontWeight: '700',
    color: 'black',
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