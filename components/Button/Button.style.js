import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    button: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,
    },
    text: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        lineHeight: 30,
        fontFamily: 'Lato-Regular',
    },
});
