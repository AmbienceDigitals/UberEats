import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    iconContainer: {
        position: 'absolute',
        top: 40,
        left: 10,
    },
    image: {
        width: '100%',
        aspectRatio: 5 / 3,
    },
    title: {
        fontSize: 30,
        fontWeight: '600'
    },
    subtitle: {
        color: '#525252',
        fontSize: 15,
    },
    container: {
        margin: 10
    },
    menuTitle: {
        marginTop: 20,
        fontSize: 20,
        letterSpacing: .77
    }
})

export default styles