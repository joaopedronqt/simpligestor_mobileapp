import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './ServicosStyle';
import SearchBar from '../../components/BarraDePesquisa/BarraDePesquisa';

export function Servicos() {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.container}>
        <View styles={styles.searchBar}>
          <SearchBar />
        </View>
      
    <View style={styles.itemsContainer}>
      <View style={styles.item}>
        <TouchableOpacity onPress={() => navigation.navigate('Calendario')}>
          <View style={styles.line} />
          <Text style={[styles.label, styles.info, styles.title]}> Massagem Relaxante </Text>
          <Text style={[styles.label, styles.info]}> Descrição </Text>
          <Text style={[styles.label, styles.info, styles.valor]}> R$300,00 </Text>
          <View style={styles.line} />
        </TouchableOpacity>
      </View>

      <View style={styles.item}>
        <TouchableOpacity onPress={() => navigation.navigate('Calendario')}>
        <Text style={[styles.label, styles.info, styles.title]}> Quiropraxia </Text>
        <Text style={[styles.label, styles.info]}> Descrição </Text>
        <Text style={[styles.label, styles.info, styles.valor]}> R$270,00 </Text>
        <View style={styles.line} />
        </TouchableOpacity>
      </View>

      <View style={styles.item}>
        <TouchableOpacity onPress={() => navigation.navigate('Calendario')}>
        <Text style={[styles.label, styles.info, styles.title]}> Day Spa 1 </Text>
        <Text style={[styles.label, styles.info]}> Descrição </Text>
        <Text style={[styles.label, styles.info, styles.valor]}> R$450,00 </Text>
        <View style={styles.line} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.item}>
        <TouchableOpacity onPress={() => navigation.navigate('Calendario')}>
        <Text style={[styles.label, styles.info, styles.title]}> Day Spa 1 </Text>
        <Text style={[styles.label, styles.info]}> Descrição </Text>
        <Text style={[styles.label, styles.info, styles.valor]}> R$450,00 </Text>
        <View style={styles.line} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.item}>
        <TouchableOpacity onPress={() => navigation.navigate('Calendario')}>
        <Text style={[styles.label, styles.info, styles.title]}> Day Spa 1 </Text>
        <Text style={[styles.label, styles.info]}> Descrição </Text>
        <Text style={[styles.label, styles.info, styles.valor]}> R$450,00 </Text>
        <View style={styles.line} />
        </TouchableOpacity>
      </View>

      <View style={styles.item}>
        <TouchableOpacity onPress={() => navigation.navigate('Calendario')}>
        <Text style={[styles.label, styles.info, styles.title]}> Day Spa 2 </Text>
        <Text style={[styles.label, styles.info]}> Descrição </Text>
        <Text style={[styles.label, styles.info, styles.valor]}> R$620,00 </Text>
        <View style={styles.line} />
        </TouchableOpacity>
      </View>
    </View>
    </View>
    </ScrollView>

  )};
  
