import { StyleSheet } from 'react-native'
import colors from '../../colors/Colors'

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
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    button: {
        backgroundColor: colors.purple,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: colors.blackB
    },
    footerLink: {
        color: colors.blue,
        fontWeight: "bold",
        fontSize: 16
    }
})