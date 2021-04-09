import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
export default function Button() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnContainer}>
        <Text style={styles.title}>Comprar</Text>
      </TouchableOpacity>
    </View>
  );
}
