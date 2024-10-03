import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    mainImage: {
        width: 332,
        height: 440,
        marginTop: -100,
    },
    textContainer: {
        alignItems: 'center',
        marginTop: 30,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 35,
        fontWeight: '600',
        color: '#00bdd6',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'center',
        lineHeight: 21,
        color: '#000000',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        gap: 20,
    },
    loginButton: {
        backgroundColor: '#00bdd6',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginHorizontal: 15,
    },
    loginButtonText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#ffffff',
        textAlign: 'center',
    },
    registerButton: {
        backgroundColor: '#ffffff',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginHorizontal: 15,
    },
    registerButtonText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#0a0a0a',
        textAlign: 'center',
    },
});
