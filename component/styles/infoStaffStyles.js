import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      paddingHorizontal: 20,
      alignItems: 'center',
      backgroundColor: '#a1d2f5',
      width: '100%',
      height: 80,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#000',
      marginRight: 110
    },
    arrowLeft: {
      color: '#000',
    },
    content: {
      flex: 1,
      paddingHorizontal: 20,
      marginTop: 10,
    },
    info_avatar: {
      alignItems: 'center', 
      marginTop: 15,
      marginBottom: 10,
    },
    avatar: {
      width: 120,
      height: 120,
      borderRadius: 60,
      borderWidth: 1,
      borderColor: '#ccc',
    },
    changeImageButton: {
      flexDirection: 'row',
      marginTop: 10,
      paddingVertical: 8,
      paddingHorizontal: 15,
      backgroundColor: '#007bff',
      borderRadius: 5,
    },
    changeImageText: {
      color: '#fff',
      fontSize: 14,
      fontWeight: 'bold',
    },
    info_section: {
      marginTop: 10,
    },
    info_row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 15,
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#e0e0e0',
    },
    info_label: {
      fontSize: 16,
      fontWeight: '500',
      color: '#333',
    },
    info_value: {
      fontSize: 16,
      fontWeight: '500',
      color: '#000',
    },
    info_title: {
      fontSize: 18,
      fontWeight: '600',
      marginBottom: 10,
      textAlign: 'center',
      color: '#555',
    },
    btn_add: {
      backgroundColor: '#007bff',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      alignSelf: 'center',
      marginTop: 20,
    },
    add: {
      textAlign: 'center',
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
    modalContent: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#fff',
      textAlign: 'center',
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 15,
      paddingHorizontal: 10,
      borderRadius: 5,
      backgroundColor: '#fff',
    },
  });
  export {styles};