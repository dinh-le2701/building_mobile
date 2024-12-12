import { StyleSheet } from "react-native";

const homeStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    banner:{
      height: 150,
      width: "100%",

    },
    header: {
      backgroundColor: "rgba(119, 119, 119, 0.7)",
      height: 150,
      padding: 20,
      flexDirection: "row",
      alignItems: "center",
      marginTop: -150
    },
    logo: {
      width: 80,
      height: 80,
      borderRadius: 40,
      marginLeft: "auto",
      alignSelf: "center",
    },
    circle: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: "grey",
    },
    avatar: {
      height: 50,
      width: 50,
      borderRadius: 25,
    },
    headerText: {
      marginLeft: 20,
      marginTop: 15
    },
    btnTitle:{
      width: 100,
      height: 40,
      backgroundColor: "#a8867a",
      borderRadius: 5,
      marginTop: 5
    },
    headerTitle1: {
      fontSize: 23,
      fontWeight: "bold",
      color: "white",
      marginLeft: 10
    },
    headerTitle2: {
      fontSize: 25,
      fontWeight: "bold",
      color: "white",
      marginTop: 3,
      marginLeft: 15,

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
      flexDirection: "row",
      flexWrap: 'wrap',
      justifyContent: "space-between",
     
    },
    homeItemContainer: {
      alignItems: "center",
      marginHorizontal: 10, 
      marginTop: 15
    },
    iconCircle1: {
      backgroundColor: "green",
      width: 50,
      height: 50,
      borderRadius: 25,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 10,
    },
    iconCircle2: {
      backgroundColor: "blue",
      width: 50,
      height: 50,
      borderRadius: 25,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 10,
    },
    iconCircle3: {
      backgroundColor: "orange",
      width: 50,
      height: 50,
      borderRadius: 25,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 10,
    },
    iconCircle4: {
      backgroundColor: "#660099",
      width: 50,
      height: 50,
      borderRadius: 25,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 10,
    },
    iconCircle5: {
      backgroundColor: "red",
      width: 50,
      height: 50,
      borderRadius: 25,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 10,
    },
    iconCircle6: {
      backgroundColor: "pink",
      width: 50,
      height: 50,
      borderRadius: 25,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 10,
    },
    homeItemText: {
      fontSize: 14,
      fontWeight: "bold",
      textAlign: "center",
      color: '#220000'
    },
    section: {
      marginTop: 20,
    
    },
    sectionHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 10,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: "bold",
    },
    sectionLink: {
      color: "#007aff",
    },
    notificationContainer: {
      flexDirection: "row",
      backgroundColor: "#fff3e0",
      padding: 15,
      borderRadius: 10,
      alignItems: "center",
    },
    notificationIconContainer: {
      marginRight: 15,
    },
    notificationTextContainer: {
      flex: 1,
    },
    notificationText: {
      fontSize: 14,
      fontWeight: "bold",
    },
    notificationDate: {
      fontSize: 12,
      color: "grey",
      marginTop: 5,
    },
    requestContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    requestItem: {
      padding: 15,
      borderRadius: 10,
      flex: 1,
      marginHorizontal: 5,
    },
    requestTitle: {
      fontSize: 14,
      fontWeight: "bold",
    },
    requestStatus: {
      color: "#ff9800",
      marginVertical: 5,
    },
    requestIssue: {
      fontSize: 14,
    },
    requestDate: {
      fontSize: 12,
      color: "grey",
    },
    bannerItem:{
      marginTop: 10,
      resizeMode:'contain'
    },
  
    footer: {
      flexDirection: "row",
      backgroundColor: "#f8f8f8",
      height: 60,
      justifyContent: "space-around",
      alignItems: "center",
    },
    footerItem: {
      alignItems: "center",
    },
    footerText: {
      fontSize: 12,
      fontWeight: "700",
      marginTop: 2,
    },
    footerText1: {
      fontSize: 12,
      fontWeight: "700",
      marginTop: 2,
      color: "#004d8d",
    },
  });
export {homeStyles};