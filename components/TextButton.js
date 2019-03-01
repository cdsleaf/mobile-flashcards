import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { purple } from '../utils/colors';

export default function TextButton({ name, onPress, buttonStyle = {}, textStyle = {} }) {
  return(
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, buttonStyle]}>
      <Text
        style={[styles.name, textStyle]}>
        {name}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
  },
  name: {
    textAlign: 'center',
    color: purple,
  }
})
