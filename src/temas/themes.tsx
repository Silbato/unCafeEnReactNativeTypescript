import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    textoAzul: {
        fontSize: 30,
        color: '#1a5276',
        fontWeight: 'bold',
        marginBottom: 15,
        marginTop: 10

    },
    textoGris: {
        fontSize: 16,
        marginTop: 5,
        color: '#424949',
        fontWeight: 'bold'
    },
    cardLoginContainer: {
        margin: 20,
        flex: 1,
        justifyContent: 'center',
        height: 700,
        marginBottom: 50
    },
    botonContainer: {

        marginTop: 10,
        alignContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: "space-between"
    },
    botonCeleste: {
        borderWidth: 2,
        backgroundColor: '#3498db',
        borderRadius: 50,
        paddingHorizontal: 20,
        paddingVertical: 5,
        alignContent: 'center'
    },
    textoBotonCeleste: {
        fontSize: 18,
        color: 'white'
    }
});