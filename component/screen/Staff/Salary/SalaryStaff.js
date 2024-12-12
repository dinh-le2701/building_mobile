import { styles } from '@component/styles/salaryStyles';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable} from 'react-native';

const SalaryStaff = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Text>Hello</Text>
        <Pressable onPress={()=>navigation.goBack()}>
          <Text style={styles.textButton}>Quay về</Text>
        </Pressable>
    </View>
  );
};

export default SalaryStaff;

