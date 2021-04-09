import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../Shoes/styles';
export default function Shoes(props) {
  //Funcção para filtrar o numero de palavras
  function filterDesc(desc) {
    if (desc.length < 27) {
      return desc;
    }
    return `${desc.substring(0, 23)}...`;
  }
  return (
    <TouchableOpacity style={styles.container} onPress={props.onClick}>
      <Image source={props.img} styles={styles.shoeImg} />
      <Text style={styles.shoesText}>{filterDesc(props.children)}</Text>
      <View opacity={0.4}>
        <Text style={styles.shoesText}>{props.cost}</Text>
      </View>
    </TouchableOpacity>
  );
}
