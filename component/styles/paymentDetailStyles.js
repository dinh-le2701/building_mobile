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
  text_header: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10
  },
  arrowLeft: {
    color: 'black',
    marginTop: 15,
  },
  content: {
    paddingHorizontal: 20,
    marginTop: 10, 
    // flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  optionContainer: {
    marginBottom: 10,
    flexDirection: 'row',
  },
  radioContainer: {
    marginBottom: 5,
    flexDirection: 'column',
    marginLeft: 10,
  },
  radioCircle: {
    height: 15, 
    width: 15,  
    borderRadius: 8, 
    borderWidth: 2,
    borderColor: '#004d8d',
    marginRight: 10,
    marginTop: 40,
  },
  radioSelected: {
    backgroundColor: '#004d8d',
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    textAlign: 'left',
  },
  optionText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    marginLeft: 10, 
    marginTop: 5,
    textAlign: 'left',
  },
  transactionSummaryContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#f8f8f8', 
    borderTopWidth: 1,
    borderColor: '#ccc',
    position: 'absolute',
    bottom: 100, 
    left: 0,
    right: 0,
  },
  transactionSummary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  transactionText: {
    fontSize: 16,
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
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
    color: '#004d8d',
  },
  text_footer_notification: {
    fontSize: 12,
    fontWeight: '700',
    color: 'black',
  },
  text_footer_account: {
    fontSize: 12,
    fontWeight: '700',
    color: 'black',
  },
});
  export {styles};