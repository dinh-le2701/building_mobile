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
      flexDirection: 'row',
    },
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
      marginLeft: 10,
    },
    arrowLeft: {
      color: 'black',
      marginTop: 5,
    },
    content:{
      // width: "95%",
      // backgroundColor: "#e9d8e8",
      // borderRadius: 8,
      // shadowColor: "#000",
      // shadowOpacity: 0.2,
      // shadowRadius: 5,
      // marginBottom: 10,
      // marginTop: 10,
      // alignSelf: "center",
    },
    item:{
      width: "95%",
      backgroundColor: "#e9d8e8",
      borderRadius: 8,
      shadowColor: "#000",
      shadowOpacity: 0.2,
      shadowRadius: 5,
      marginBottom: 10,
      marginTop: 10,
      alignSelf: "center",
    },

    itemContainer: {
     flexDirection:'row',
     justifyContent:'space-between'
    },
    text0: {
      fontSize: 18,
      fontWeight: '600',
      color: '#465c83',
      marginBottom: 5,
      alignSelf:'center',
      marginTop: 5
    },
    text: {
      fontSize: 18,
      color: '#465c83',
      marginBottom: 5,
      marginLeft: 10,
      marginTop: 5
    },
    text2: {
      fontSize: 18,
      color: '#465c83',
      fontWeight:'600',
      marginBottom: 5,
      marginLeft: 10,
      marginTop: 5
    },
    amountText:{
      fontSize: 18,
      color: '#465c83',
      marginBottom: 5,
      marginRight: 10,
      marginTop: 5
    },
    amountText2:{
      fontSize: 18,
      color: '#465c83',
      fontWeight:'600',
      marginBottom: 5,
      marginRight: 10,
      marginTop: 5
    }

  });
  export {styles};