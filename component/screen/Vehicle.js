import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Modal, TextInput, Button } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

const Vehicle = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [newVehicle, setNewVehicle] = useState({
    license_plate: '',
    vehicle_name: '',
    vehicle_type: '',
    id: '',
    color: '',   
  });
  const [vehicles, setVehicles] = useState([]);

  const handleAddVehicle = () => {
    setVehicles([...vehicles, newVehicle]);
    setModalVisible(false); 
    setNewVehicle({
      license_plate: '',
      vehicle_name: '',
      vehicle_type: '',
      id: '',
      color: '',
    });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate('Acount')}>
          <AntDesign name="arrowleft" size={24} color="white" style={styles.arrowLeft} />
        </Pressable>
        <Text style={styles.headerTitle}>Thông tin phương tiện</Text>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.info_section}>
          <View style={styles.info_row}>
            <Text style={styles.info_label}>Biển số xe:</Text>
            <Text style={styles.info_value}>67P3-3911</Text>
          </View> 
          <View style={styles.info_row}>
            <Text style={styles.info_label}>Thương hiệu:</Text>
            <Text style={styles.info_value}>Yamaha</Text>
          </View>
          <View style={styles.info_row}>
            <Text style={styles.info_label}>Loại xe:</Text>
            <Text style={styles.info_value}>Xe máy</Text>
          </View>         
          <View style={styles.info_row}>
            <Text style={styles.info_label}>Màu sắc:</Text>
            <Text style={styles.info_value}>Đen</Text>
          </View>

          <Text style={styles.info_text}>Thông tin phương tiện </Text>       
          {vehicles.map((vehicle, index) => (
            <View key={index} style={styles.info_row}>
              <Text style={styles.info_label}>Biển số xe:</Text>
              <Text style={styles.info_value}>{vehicle.license_plate}</Text>
            </View>
          ))}
          {vehicles.map((vehicle, index) => (
            <View key={index} style={styles.info_row}>
              <Text style={styles.info_label}>Thương hiệu:</Text>
              <Text style={styles.info_value}>{vehicle.vehicle_name}</Text>
            </View>
          ))}
          {vehicles.map((vehicle, index) => (
            <View key={index} style={styles.info_row}>
              <Text style={styles.info_label}>Loại xe:</Text>
              <Text style={styles.info_value}>{vehicle.vehicle_type}</Text>
            </View>
          ))}
          {vehicles.map((vehicle, index) => (
            <View key={index} style={styles.info_row}>
              <Text style={styles.info_label}>Màu sắc:</Text>
              <Text style={styles.info_value}>{vehicle.color}</Text>
            </View>
          ))}
       
        </View>
      </ScrollView>

      <View style={styles.add_box}>
        <Pressable style={styles.btn_add} onPress={() => setModalVisible(true)}>
          <AntDesign name="pluscircle" size={48} color="blue" style={styles.add} />
        </Pressable>
      </View>

      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Thêm phương tiện</Text>
          <TextInput
            style={styles.input}
            placeholder="Biển số xe"
            value={newVehicle.license_plate}
            onChangeText={(text) => setNewVehicle({ ...newVehicle, license_plate: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Thương hiệu"
            value={newVehicle.vehicle_name}
            onChangeText={(text) => setNewVehicle({ ...newVehicle, vehicle_name: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Loại xe"
            value={newVehicle.vehicle_type}
            onChangeText={(text) => setNewVehicle({ ...newVehicle, vehicle_type: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Màu sắc"
            value={newVehicle.color}
            onChangeText={(text) => setNewVehicle({ ...newVehicle, color: text })}
          />

          <Button title="Thêm" onPress={handleAddVehicle} />
          <Button title="Hủy" onPress={() => setModalVisible(false)} color="red" />
        </View>
      </Modal>
    </View>
  );
};

export default Vehicle;

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
    fontSize: 19,
    fontWeight: '600',
    marginTop: 15,
    marginBottom: 10,
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

  add_box: {
    marginBottom: 30,
  },
  btn_add: {},
  add: {
    textAlign: 'center',
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});
