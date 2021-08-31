import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, SafeAreaView, View } from 'react-native';
import Header from './src/componentes/Header';
import Content from './src/componentes/Content';
import {styles} from './src/styles/styles'
import Footer from './src/componentes/Footer'

export default function App() {
  return (
    <ScrollView>
      <View style={styles.corpo}>
        <Header/>
        <Content/>
        <Footer/>
      </View>
    </ScrollView>
  );
}