

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    group: {
        width: '100%',
        height: 56,
        backgroundColor: '#1C1C21',
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden'
    },
    icon: {
        height: 56,
        width: 56,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        borderRightWidth: 3,
        borderRightColor: '#12141A'
    },
    control: {
        flex: 1,
        paddingLeft: 16,
        fontSize: 16,
        color: '#fff',
    },
    error: {
        fontSize: 14,
        marginTop: 7,
        color: '#DC1637',
    },
})

export default styles;