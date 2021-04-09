import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Shoes from '../Shoes';
import styles from './styles';
export default function Footer() {
  return (
    <View>
      <Text style={styles.title}>VOCÊ TAMBEM PODE GOSTAR: </Text>
      <View style={{ flexDirection: 'row' }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ marginHorizontal: 10 }}>
            <Shoes img={require('../../assets/6.png')} cost="R$340,00">
              adsadasdas
            </Shoes>
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Shoes img={require('../../assets/5.png')} cost="R$300,00">
              24324ER
            </Shoes>
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Shoes img={require('../../assets/3.png')} cost="R$130,00">
              E34344
            </Shoes>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
