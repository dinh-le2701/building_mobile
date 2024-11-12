// bottomTabStyles.js
import { StyleSheet } from 'react-native';

const bottomStyles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#f8f8f8',
    height: 60,
    paddingBottom: 5,
    borderTopWidth: 0.5,
    borderTopColor: '#ccc',
  },
  tabBarLabelStyle: {
    fontSize: 12,
    fontWeight: '700',
  },
  tabBarIcon: {
    marginBottom: -5,
  },
  activeLabelStyle: {
    color: '#004d8d',
  },
  inactiveLabelStyle: {
    color: 'black',
  },
});

export default bottomStyles;
