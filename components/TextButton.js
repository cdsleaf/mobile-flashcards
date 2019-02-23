import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { purple } from '../utils/colors';

export default function TextButton({ name, onPress, style = {} }) {
  return(
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.button, style]}>{name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    textAlign: 'center',
    color: purple,
  }
})