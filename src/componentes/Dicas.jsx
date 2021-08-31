import React from 'react';
import { View, Text } from 'react-native'
import {styles} from '../styles/styles'

export default function Dicas(){
    return(
        <View style={styles.information}>
            <Text style={{fontWeight: 'bold'}}>Dica Sobre Exercícios Físicos</Text>
            <Text>1- Comece devagar e vá aumentando a dificuldade aos poucos.</Text>
            <Text>2- Utilize os 10 ou 15 primeiros minutos do treino como aquecimento, exercitando-se em ritmo lento. Depois, acelere aos poucos de acordo com a reposta de seu corpo. Para melhores resultados, descubra sua frequência cardíaca ideal com dispositivos como o Apple Watch.</Text>
        </View>
    )
}