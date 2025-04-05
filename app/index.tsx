// importando componentes de dentro do react native
import { Text } from "react-native"

// Export default é o metodo usado para dizer ao ExporRouter que esse componente é uma Rota.
export default function Index() {
    return (
    
        // Componente que não tem vizualização nenhuma, e por isso não recebe estilzação
        <>
            <Text>Eu sou o melhor!</Text>
            <Text>Kelven</Text>
            <Text>Eu sou o pior!</Text>
        </>
    )
}