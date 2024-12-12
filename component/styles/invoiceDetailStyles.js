import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    backgroundColor: '#a1d2f5',
    alignItems: 'center',
    flexDirection: 'row',
  },
  arrowLeft: {
    color: 'black',
    marginTop: 15,
  },
  headerText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  scrollContent: {
    paddingHorizontal: 20, 
    paddingVertical: 10, 
  },
  
  content: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemContainer: {
    marginVertical: 8,
  },
  itemContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  text0: {
    fontSize: 24,
    fontWeight: '800',
    color: '#465c83',
    marginBottom: 5,
    alignSelf:'center',
    marginTop: 5
  },
  text: {
    fontSize: 20,
    color: '#465c83',
    fontWeight:'500',
    marginBottom: 5,
    marginTop: 5,
    marginLeft: 20
  },
  text1: {
    fontSize: 21,
    color: '#465c83',
    fontWeight:'800',
    marginBottom: 5,
    marginTop: 5,
    
  },
  text2: {
    fontSize: 22,
    color: 'red',
    fontWeight:'700',
    marginBottom: 5,
    marginTop: 5
  },
  amountText:{
    fontSize: 18,
    color: '#465c83',
    marginBottom: 5,
    marginTop: 5
  },
  amountText1:{
    fontSize: 19,
    fontWeight:'700',
    color: '#465c83',
    marginBottom: 5,
    marginTop: 5,
    marginLeft: 20

  },
  amountText2:{
    fontSize: 22,
    color: 'red',
    fontWeight:'700',
    marginBottom: 5,
    marginTop: 5,
    marginRight: 0
  },

  invoiceInfo: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  detailsContainer: {
    padding: 16,
  },
  detailItem: {
    marginBottom: 16,
  },
  detailTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#009688',
  },
  detailAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#009688',
    marginBottom: 8,
  },
  paymentButton: {
    backgroundColor: 'blue',
    padding: 15,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40
  },
  
  paymentButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },

});

export { styles };
