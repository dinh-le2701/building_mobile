import { StyleSheet } from "react-native";

// Các biến chung
// const colors = {
//   primary: "#834637",
//   background: "#a1d2f5",
//   backgroundContainerNotifi: "#fff3e0",
//   backgroundFooter: "#f8f8f8",
//   text: "black",
//   textNotifi: "grey",
//   itemFooter: "#004d8d",
//   itemCircle1: "orange",
//   itemCircle2: "blue",
//   itemCircle3: "red",
//   itemCircle4: "green",
  

// };

// const fontSizes = {
//   sz12: 12,
//   sz13: 13,
//   sz14: 14,
//   sz15: 15,
//   sz16: 16,
//   small: 17,
//   sz18: 18,
//   medium: 20,
//   large: 26,
// };

const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#a1d2f5',
    height: 150,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginLeft: 50,
    marginTop: -30,
    
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'grey',
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  headerText: {
    marginLeft: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
  },
  avatar2: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  shortcutContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  homeItemContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  iconCircle1: {
    backgroundColor: 'orange',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconCircle2: {
    backgroundColor: 'blue',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconCircle3: {
    backgroundColor: 'red',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconCircle4: {
    backgroundColor: 'green',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  homeItemText: {
    fontSize: 14,
    textAlign: 'center',
  },
  section: {
    marginTop: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionLink: {
    color: '#007aff',
  },
  notificationContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff3e0',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  notificationIconContainer: {
    marginRight: 15,
  },
  notificationTextContainer: {
    flex: 1,
  },
  notificationText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  notificationDate: {
    fontSize: 12,
    color: 'grey',
    marginTop: 5,
  },
  requestContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  requestItem: {
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
  },
  requestTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  requestStatus: {
    color: '#ff9800',
    marginVertical: 5,
  },
  requestIssue: {
    fontSize: 14,
  },
  requestDate: {
    fontSize: 12,
    color: 'grey',
  },

  footer: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    height: 60,
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

export { HomeStyles };
