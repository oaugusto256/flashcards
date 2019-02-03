import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default QuestionCard = (props) => {
  return (
    <View style={styles.questionCardContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Question: {props.question.question}</Text>
        <Text style={styles.text}>Answer: {props.question.answer}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  questionCardContainer: {
    flex: 1,
    flexDirection : 'row',
    alignItems: 'center',
    height: 60,
    borderBottomColor: '#173f5f',
    borderBottomWidth: 3,
    shadowRadius: 1,
    borderRadius: 5,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    justifyContent: 'space-between',
    backgroundColor: '#eeeeee',
    shadowOffset: { width: 0, height: 1 },
  },
  text: {
    fontSize: 12,
    fontWeight: '200'
  },
  textContainer: {
    padding: 5,
    paddingLeft: 10,
  },
})