import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable} from 'react-native';


const SalaryStaff = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Text>Hello</Text>
        <Pressable onPress={()=>navigation.navigate('HomeStaff')}>
          <Text style={styles.textButton}>Quay về</Text>
        </Pressable>
    </View>
  );
};

export default SalaryStaff;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
 
});
