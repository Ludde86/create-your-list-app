import { StyleSheet } from 'react-native'
import colors from '../../colors/Colors'

// flex will define how your items are going to “fill” over the available space along your main axis. Space will be divided according to each element's flex property.
export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {},
    logo: {
        flex: 1,
        height: 120,
        width: 120,
        alignSelf: 'center',
        margin: 30
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginVertical: 10,
        marginHorizontal: 30,
        paddingLeft: 16
    },
    button: {
        backgroundColor: colors.darkGreen,
        marginHorizontal: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonTitle: {
        color: colors.whiteA,
        fontSize: 16,
        fontWeight: 'bold'
    },
    footerView: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20
    },
    footerLink: {
        color: colors.darkGreen,
        fontWeight: 'bold',
        fontSize: 16
    }
})