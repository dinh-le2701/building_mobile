import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#a1d2f5',
    width: '100%',
    height: 80,
    flexDirection: 'row',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  },
  arrowLeft: {
    color: 'black',
    marginTop: 5,
  },
  content: {
    flex: 1,
    padding: 15,
    width: '100%',
    marginBottom: 20,
  },
  info_section: {
    marginTop: 0,
  },
  info_title:{
    flexDirection:'row',
    marginTop: 0, 
    marginBottom: 10,
    justifyContent:'center',

  },
  info_text_title:{
    fontSize: 19, 
    fontWeight: '600', 
    marginTop: 10,
    marginRight: 30,
    color: '#02457a'
  },
  info_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
    padding: 5,
    height: 40,
  },
  info_text: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 10,
  },
  info_label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#018abe',
  },
  info_value: {
    fontSize: 16,
    fontWeight: '500',
    color: '#018abe',
  },

});
  export {styles};