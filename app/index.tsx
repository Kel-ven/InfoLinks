// importando componentes de dentro do react native
import { View, Text, StyleSheet } from "react-native"

// Export default é o metodo usado para dizer ao ExporRouter que esse componente é uma Rota.
export default function Index() {
    return (
        <View>

            <Text style={style.title} >Kelven O Chris</Text>
            <Text style={style.title2} >Informática</Text>
            <Text style={style.title3} >Texte</Text>
            <Text style={style.title4} >Eu sou o Melhor!! </Text>
            <Text style={style.title5} >Eu sou o melhor!</Text>
            <Text style={style.title6} >Kelven</Text>
            <Text style={style.title7} >Eu sou o pior!</Text>
            <Text style={style.title8} >tenho 20 anos, mas com aparência de 30</Text>
            <Text style={style.title9} >moro em Boca do Acre</Text>
            <Text style={style.title10} >cursando informática</Text>
        </View>
    );
}

const style = StyleSheet.create({

    container: {
        flex: 1, //Considera toda a area util da tela para os componentes
        justifyContent: "Center", //justifica (ajusta) todos os elementos no centro ta tela
        alignItems: "Center", //alinha todos os elementos no centro da tela
        flexDirection: "row", //organiza todos os elementos dentro do flex box em linha
    },

    title: {
        color: "red",
        fontSize: 33,
    },

    title2: {
        color: "blue",
        fontSize: 26,
    },

    title3: {
        color: "black",
        fontSize: 20,
    },

    title4: {
        color: "red",
        fontSize: 10,
    },

    title5: {
        color: "blue",
        fontSize: 16,
    },

    title6: {
        color: "red",
        fontSize: 20,
    },

    title7: {
        color: "black",
        fontSize: 26,
    },

    title8: {
        color: "blue",
        fontSize: 30,
    },

    title9: {
        color: "black",
        fontSize: 50,
    },

    title10: {
        color: "red",
        fontSize: 66,
    }

})