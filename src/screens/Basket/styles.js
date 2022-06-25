import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: "100%",
        padding: 10
    },
    name: {
        fontSize: 24,
        fontWeight: '600',
        marginVertical: 10
    },
    description: {
        color:'grey'
    },
    separator: {
        height: 1,
        backgroundColor: "lightgrey",
        marginVertical: 20
    },
    row: {
        flexDirection: 'row',
        alignItems: "center",
        marginVertical: 15,
        marginHorizontal: 15
    },
    quantity: {
        fontSize: 25,
        marginHorizontal: 20
    },
    button: {
        backgroundColor: 'black',
        marginTop: 'auto',
        padding: 20,
        alignItems: 'center'

    },
    buttonText: {
        color: "white",
        fontWeight: "600",
        fontSize: 20
    },
    price: {
        marginLeft: 'auto'
    },
    quantityContainer: {
        backgroundColor: 'lightgrey',
        paddingHorizontal: 5,
        paddingVertical: 2,
        marginRight: 10,
        borderRadius: 3
    }
})

export default styles