// importando componentes de dentro do react native
import { View, Text, StyleSheet } from "react-native"

// Export default é o metodo usado para dizer ao ExporRouter que esse componente é uma Rota.
export default function Index() {
    return (
        <View>

            <Text style={style.title} >Kelven O Chris</Text>
            <Text style={style.title2} >Informática</Text>
            <Text style={style.title3} >Texte</Text>
            <Text style={style.title4} >Eu sou sou o Melhor!! </Text>
            <Text>Eu sou o melhor!</Text>
            <Text>Kelven</Text>
            <Text>Eu sou o pior!</Text>
            <Text>tenho 20 anos, mas com aparência de 30</Text>
            <Text>moro em Boca do Acre</Text>
            <Text>cursando informática</Text>
        </View>
    );
}
const style = StyleSheet.create({
    title: {
        color: "red",
        fontSize: 22,
    },

    title2: {
        color: "blue",
        fontSize: 26,
    },

    title3: {
        color: "blue",
        fontSize: 26,
    },

    title4: {
        color: "blue",
        fontSize: 26,
    }
})