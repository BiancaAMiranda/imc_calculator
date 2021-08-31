import React from 'react';
import { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native'
import {styles} from '../styles/styles'

export default function IMC(){
    const [dados, setDados] = useState({
        peso: '',
        altura: ''
    });
    const [resultado, setResultado] = useState({
        resul: ''
    })
    const handleInputChange = (parametro, value) => {
        setDados({
            ...dados, [parametro]: value
        })
    } 
    const mensagem = () => {
        let imc= ( dados.peso / (dados.altura*dados.altura) ).toFixed(1)
            if  (imc<18.5){
                setResultado({
                    ...resultado, resul: `${imc} - Você está ABAIXO DO PESO, possiveis sintomas de fadiga, stress, ansiedade.`
                })
            }
            else if (imc >=18.5 && imc <= 24.9 ){
                setResultado({
                    ...resultado, resul:`${imc} - Você está no PESO NORMAL, tem menores chances de ter problemas cardiacos e vasculares.`
                })
            }  
            else if (imc >= 25 && imc <= 29.9){
                setResultado({
                    ...resultado, resul:`${imc} - Você está no SOBREPESO, maior probalidade de fadiga, má circulação e varizes.`
                })
            }
            else if (imc >= 30 && imc <= 34.9){
                setResultado({
                    ...resultado, resul:`${imc} - Você está na OBESIDADE I, maior probalidade de doenças cardiovasculares.`
                })
            }
            else if (imc >= 35 && imc <= 39.9){
                setResultado({
                    ...resultado, resul:`${imc} - Você está na OBESIDADE II, maior probalidade de doenças cardiovasculares.`
                })
            }
            else if (imc >= 40){
                setResultado({
                    ...resultado, resul:`${imc} - Você está na OBESIDADE III ou OBESIDADE MÓRBIDA, maior probalidade de doenças cardiovasculares.`
                })
            }
        }
    return(
        <View>
            <TextInput 
            style={styles.input}
            keyboardType='numeric'
            placeholder='Digite um peso em kg' 
            onChangeText={(entrada) => handleInputChange("peso",entrada)
            } />
            <TextInput 
            style={styles.input}
            keyboardType='numeric'
            placeholder='Digite uma altura em metros' 
            onChangeText={(entrada) => handleInputChange("altura",entrada)
            } />
            <Button 
            color='#30786C' 
            title='Calcular'
            onPress={mensagem} />
            <View style={styles.line}>
                <Text style={styles.text}>{`Peso: ${dados.peso}`}</Text>
                <Text style={styles.text}>{`Altura: ${dados.altura}`}</Text>
            </View>
            <Text style={styles.vermelho}>{`IMC: ${resultado.resul}`}</Text>
        </View>
    )
}