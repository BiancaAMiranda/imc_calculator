import React from 'react';
import { View, Text } from 'react-native'
import {styles} from '../styles/styles'
import IMC from './IMC';
import Informacao from './Informacao'
import Dicas from './Dicas'

export default function Content(){
    return(
        <View style={styles.content}>
            <Informacao titulo='BEM VINDOS' conteudo='O app SoulHealth tem o objetivo de te ajudar a manter a saúde corporal. Faça o cálculo do seu IMC e descubra mais sobre você e sua saúde!' autor='Bianca Miranda Aguiar' />
            <Informacao titulo='A Importância Da Alimentação' conteudo='Não é novidade que a alimentação inadequada está relacionada com uma série de doenças, não é mesmo? Entre os principais problemas de saúde relacionados com uma má alimentação estão a obesidade, o diabetes, hipertensão e até mesmo alguns tipos de cânceres.
            Não podemos nos esquecer ainda que uma alimentação deficiente é causa de desnutrição. Todos esses problemas são graves e podem levar um indivíduo à morte, portanto, uma alimentação saudável é sinônimo de saúde.' autor='Vanessa Sardinha dos Santos' />
            <Informacao titulo='O que é IMC?' conteudo='IMC é a sigla para Índice de Massa Corporal,que é um cálculo que serve para avaliar se a pessoa está dentro do seu peso ideal em relação à altura. Assim, de acordo com o valor do resultado de IMC, a pessoa pode saber se está dentro do peso ideal, acima ou abaixo do peso desejado.' autor='Tatiana Zanin' />
            <IMC/>
            <Dicas/>
        </View>
    )
}