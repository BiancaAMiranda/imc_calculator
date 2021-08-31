import React from 'react';
import { View, Text } from 'react-native'
import {styles} from '../styles/styles'

export default function Informacao(props){
    return(
        <View style={styles.information}>
            <Text style={{fontWeight: 'bold'}}>{props.titulo}</Text>
            <Text>{props.conteudo}</Text>
            <Text>{props.autor}</Text>
        </View>
    )
}