import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ebfdff',
        borderColor: '#00bdd6',
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        width: '100%',
        maxWidth: 315,
    },
    icon: {
        width: 20,
        height: 24,
        marginRight: 8,
    },
    input: {
        flex: 1,
        fontSize: 12,
        fontFamily: 'Lato',
        lineHeight: 14.4,
        color: '#a9a9a9',
    },
});