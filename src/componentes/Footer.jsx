import React from 'react';
import { View, Text } from 'react-native'
import {styles} from '../styles/styles'

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.textFooter}>Developed By Bianca Miranda</Text>
        </View>
    )
}