import { StyleSheet } from 'react-native';

//các biến chung
const colors ={
    primary: '#004d8d',
    secondary: '#ff9800',
    white: '#ffffff',
    black: '#000000',
    gray: '#9e9e9e',
    lightGray: '#f5f5f5',
    red: '#ff5722',
    blue: '#2196f3',
    green: '#4caf50',
    yellow: '#ffeb3b',
    purple: '#9c27b0',
    pink: '#e91e63',
    orange: '#ff9800', 
};

const fontSizes ={
    sz14: 14,
    sz15: 15,
    sz16: 16,
    small: 17,
    sz18: 18,
    medium: 20,
    large: 26,
};


const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    height: 60,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    fontWeight: '700',
    marginTop: 2,
  },
  footerText1: {
    fontSize: 12,
    fontWeight: '700',
    marginTop: 2,
    color: '#004d8d',
  },
});

export { styles, colors, fontSizes };
