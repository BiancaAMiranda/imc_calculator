import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    corpo:{
        backgroundColor: '#C6F9EC',
    },
    header:{
        backgroundColor: '#30786C',
        height: 100,
        paddingTop: 40,
        alignItems: 'center'    
    },
    textHeader:{
        color: '#AEF9EC',
        fontSize: 30,
        fontFamily: 'serif',
        fontWeight: 'bold'
    },
    content:{
        width: '100%',
        backgroundColor: '#C6F9EC',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    information:{
        width: '80%',
        borderWidth: 3,
        borderColor: '#30786C',
        padding: 20,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
    },
    input:{
        width: 370,
        borderWidth: 1,
        borderColor: '#30786C',
        textAlign: 'center',
        marginVertical: 5,
    },
    line:{
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    dados:{
        flex:1,
    },
    text:{
        marginVertical: 10,
    },
    vermelho:{
        color: 'green',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    textFooter:{
        color: '#AEF9EC',
        fontSize: 20,
        fontFamily: 'serif',
        fontWeight: 'bold'
    }
})