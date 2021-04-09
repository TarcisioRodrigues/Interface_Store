import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Shoes from '../../component/Shoes';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
export default function Home() {
  //Hooks
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/banner.png')}
          style={styles.image}
        />

        <View style={styles.textContainer}>
          <Text style={styles.text}>TENIS do SOnic</Text>
          <Text style={[styles.text, { color: '#CECECF' }]}>°</Text>
          <Text style={[styles.text, { color: '#CECECF' }]}>Masculino</Text>
          <TouchableOpacity
            style={{ position: 'absolute', right: 0, alignSelf: 'center' }}
          >
            <MaterialIcons name="filter-list" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.line} />
      <ScrollView>
        <Text style={styles.text}>Lançamentos</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes
            img={require('../../assets/1.png')}
            cost="R$140,00"
            onClick={() => navigation.navigate('Detail')}
          >
            Nike E3000
          </Shoes>
          <Shoes
            img={require('../../assets/2.png')}
            cost="R$240,00"
            onClick={() => navigation.navigate('Detail')}
          >
            Nike E343
          </Shoes>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes
            img={require('../../assets/3.png')}
            cost="R$440,00"
            onClick={() => navigation.navigate('Detail')}
          >
            Nike Epre000
          </Shoes>
          <Shoes
            img={require('../../assets/4.png')}
            cost="R$340,00"
            onClick={() => navigation.navigate('Detail')}
          >
            Nike Eer43
          </Shoes>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes
            img={require('../../assets/5.png')}
            cost="R$440,00"
            onClick={() => navigation.navigate('Detail')}
          >
            Nike Epre000
          </Shoes>
          <Shoes
            img={require('../../assets/6.png')}
            cost="R$340,00"
            onClick={() => navigation.navigate('Detail')}
          >
            Nike Eer43
          </Shoes>
        </View>
      </ScrollView>
    </View>
  );
}
