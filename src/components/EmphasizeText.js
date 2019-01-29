import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default EmphasizeText = ({ text }) => {
  return (
    <Text style={styles.emphasizeText}>{text}</Text>
  );
};

const styles = StyleSheet.create({
  emphasizeText: {
    fontWeight: 'bold'
  },
})