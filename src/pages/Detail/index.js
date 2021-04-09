import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';
import Dot from '../../component/Dot';
import SizeBottomShoes from '../../component/SizeBottomShoes';
import Button from '../../component/Button';
import Footer from '../../component/Footer';
export default function Detail({ navigation }) {
  navigation.setOptions({
    headerTitle: 'Nike E3000',
  });
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/detail.png')}
        resizeMode="cover"
      />
      <View>
        <View>
          <Text style={[styles.title, { fontSize: 25 }]}>R$ 400,00</Text>
        </View>
        <View opacity={0.3}>
          <Text style={[styles.title, { fontSize: 30 }]}>Nike E3000</Text>
        </View>
        <View style={styles.dotContainer}>
          <Dot color="#2379f4" />
          <Dot color="#fb6e53" />
          <Dot color="#ddd" />
          <Dot color="#000" />
        </View>
        <View style={{ flexDirection: 'row', width: '100%' }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <SizeBottomShoes bgColor="#17181A" color="#FFF">
              38
            </SizeBottomShoes>
            <SizeBottomShoes>39</SizeBottomShoes>
            <SizeBottomShoes>40</SizeBottomShoes>
            <SizeBottomShoes>41</SizeBottomShoes>
          </ScrollView>

          <View style={styles.textContent}>
            <Text style={styles.textTitle}>NiKe E3000</Text>
            <Text>
              jfoajajsdaskdjkajsdkasjdlmcxmnjdBSFISDBBSDGBSDKASDIJIWAJEADBAGAKSGAJAG
            </Text>
            <Text style={styles.textList}>Categoria:Desaca</Text>
            <Text style={styles.textList}>Material:Estomago de dondongo</Text>
          </View>
        </View>
        <Button />
        <View style={styles.line} />

        <Footer />
      </View>
    </ScrollView>
  );
}
