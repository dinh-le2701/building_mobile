import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, ScrollView, TextInput, Modal, Button } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

const Infomation = ({ navigation }) => {
  const [newResident, setNewResident] = useState({
    resident_name: "",
    phone_number: "",
    email: "",
    birthday: "",
    move_in_date: "",
});

  const [modalVisible, setModalVisible] = useState(false);
  const [newMember, setNewMember] = useState({
    name: '',
    gender: '',
    dob: '',
    id: '',
    phone: '',
    email: '',
  });
  const [members, setMembers] = useState([]);

  const handleAddMember = () => {
    setMembers([...members, newMember]);
    setModalVisible(false); 
    setNewMember({
      name: '',
      gender: '',
      dob: '',
      id: '',
      phone: '',
      email: '',
    });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate('Acount')}>
          <AntDesign name="arrowleft" size={24} color="white" style={styles.arrowLeft} />
        </Pressable>
        <Text style={styles.headerTitle}>Thông tin cư dân</Text>
      </View>

      {/* Content */}
      <ScrollView style={styles.content}>
        <View style={styles.info_section}>
          <Text style={styles.info_text}>Thông tin căn hộ</Text>
          <View style={styles.info_row}>
            <Text style={styles.info_label}>Tên căn hộ:</Text>
            <Text style={styles.info_value}>CH001</Text>
          </View>
          <View style={styles.info_row}>
            <Text style={styles.info_label}>Diện tích:</Text>
            <Text style={styles.info_value}>70m2</Text>
          </View>
          <View style={styles.info_row}>
            <Text style={styles.info_label}>Số phòng:</Text>
            <Text style={styles.info_value}>4</Text>
          </View>
          <View style={styles.info_row}>
            <Text style={styles.info_label}>Tầng:</Text>
            <Text style={styles.info_value}>2</Text>
          </View>
          <View style={styles.info_row}>
            <Text style={styles.info_label}>Tòa:</Text>
            <Text style={styles.info_value}>A</Text>
          </View>
          <View style={styles.info_row}>
            <Text style={styles.info_label}>Ngày vào ở:</Text>
            <Text style={styles.info_value}>01/09/2024</Text>
          </View>

          <Text style={styles.info_text}>Thông tin chủ hộ</Text>
          <View style={styles.info_row}>
            <Text style={styles.info_label}>Tên chủ hộ:</Text>
            <Text style={styles.info_value}>Nguyễn Văn A</Text>
          </View>
          <View style={styles.info_row}>
            <Text style={styles.info_label}>Ngày sinh:</Text>
            <Text style={styles.info_value}>15/01/1998</Text>
          </View>
          <View style={styles.info_row}>
            <Text style={styles.info_label}>Số CCCD:</Text>
            <Text style={styles.info_value}>833314567281</Text>
          </View>
          <View style={styles.info_row}>
            <Text style={styles.info_label}>Số điện thoại:</Text>
            <Text style={styles.info_value}>0341272417</Text>
          </View>
          <View style={styles.info_row}>
            <Text style={styles.info_label}>Email:</Text>
            <Text style={styles.info_value}>nguyenvana@gmail.com</Text>
          </View>

          <Text style={styles.info_text}>Thông tin thành viên</Text>
          {members.map((member, index) => (
            <View key={index} style={styles.info_row}>
              <Text style={styles.info_label}>Họ tên:</Text>
              <Text style={styles.info_value}>{member.name}</Text>
            </View>
          ))}
          {members.map((member, index) => (
            <View key={index} style={styles.info_row}>
              <Text style={styles.info_label}>Giới tính:</Text>
              <Text style={styles.info_value}>{member.gender}</Text>
            </View>
          ))}
          {members.map((member, index) => (
            <View key={index} style={styles.info_row}>
              <Text style={styles.info_label}>Ngày sinh:</Text>
              <Text style={styles.info_value}>{member.dob}</Text>
            </View>
          ))}
          {members.map((member, index) => (
            <View key={index} style={styles.info_row}>
              <Text style={styles.info_label}>Số CCCD:</Text>
              <Text style={styles.info_value}>{member.id}</Text>
            </View>
          ))}
          {members.map((member, index) => (
            <View key={index} style={styles.info_row}>
              <Text style={styles.info_label}>Số điện thoại:</Text>
              <Text style={styles.info_value}>{member.phone}</Text>
            </View>
          ))}
          {members.map((member, index) => (
            <View key={index} style={styles.info_row}>
              <Text style={styles.info_label}>Email:</Text>
              <Text style={styles.info_value}>{member.email}</Text>
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
          <Text style={styles.modalTitle}>Thêm thành viên</Text>
          <TextInput
            style={styles.input}
            placeholder="Họ tên"
            value={newMember.name}
            onChangeText={(text) => setNewMember({ ...newMember, name: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Giới tính"
            value={newMember.gender}
            onChangeText={(text) => setNewMember({ ...newMember, gender: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Ngày sinh"
            value={newMember.dob}
            onChangeText={(text) => setNewMember({ ...newMember, dob: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Số CCCD"
            value={newMember.id}
            onChangeText={(text) => setNewMember({ ...newMember, id: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Số điện thoại"
            value={newMember.phone}
            onChangeText={(text) => setNewMember({ ...newMember, phone: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={newMember.email}
            onChangeText={(text) => setNewMember({ ...newMember, email: text })}
          />

          <Button title="Thêm" onPress={handleAddMember} />
          <Button title="Hủy" onPress={() => setModalVisible(false)} color="red" />
        </View>
      </Modal>

    </View>
  );
};

export default Infomation;

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
