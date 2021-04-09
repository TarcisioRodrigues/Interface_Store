import React from 'react';
import Apploading from 'expo-app-loading';
import { View, Text } from 'react-native';
import styles from './styles';

export default function SizeBottomShoes(props) {
  return (
    <View
      style={[styles.container, { backgroundColor: props.bgColor || '#FFF' }]}
    >
      <Text style={[styles.text, { color: props.color || '#C9C' }]}>
        {props.children}
      </Text>
    </View>
  );
}
