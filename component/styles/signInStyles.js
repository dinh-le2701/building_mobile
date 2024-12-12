import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img_background: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    marginTop: -146
  },
  content_signin: {
    width: '80%',
    padding: 20,
    backgroundColor: '#EEF4F5',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    marginTop: -440,
    // marginBottom: "auto"
  },
  user: {
    marginBottom: 10
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  textiput: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
    height: 40
  },
  btn_signin: {
    width: 270,
    backgroundColor: '#a1d2f5',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  text_btn_signin: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
});
export {styles};