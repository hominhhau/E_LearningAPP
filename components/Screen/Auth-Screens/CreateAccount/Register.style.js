import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingHorizontal: 27,
    },
    scrollContainer: {
        paddingHorizontal: 20,
    },
    backButton: {
        marginTop: 34,
        width: 34,
        height: 26,
    },
    backIcon: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    header: {
        marginBottom: 50,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        lineHeight: 28.8,
        color: '#00BBD6',
    },
    subtitle: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 16.8,
        color: '#555555',
        marginTop: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EBFDFF',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#00BBD6',
        paddingHorizontal: 10,
        height: 50,
        marginBottom: 20,
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 14.4,
        color: '#A9A9A9',
    },
    createAccountButton: {
        backgroundColor: '#00BBD6',
        borderRadius: 10,
        marginVertical: 20,
        paddingVertical: 16,
        alignItems: 'center',
    },
    createAccountButtonText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 24,
    },
    orSection: {
        alignItems: 'center',
        marginVertical: 20,
    },
    orText: {
        fontSize: 14,
        fontWeight: '400',
        color: '#222222',
    },
    signUpWithText: {
        fontSize: 16,
        fontWeight: '400',
        color: '#555555',
        marginBottom: 20,
    },
    googleButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#E3E3E3',
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: 278,
        justifyContent: 'center',
    },
    googleIcon: {
        width: 28,
        height: 28,
        marginRight: 16,
    },
    googleButtonText: {
        fontSize: 16,
        fontWeight: '400',
        color: '#222222',
    },
    footerText: {
        fontSize: 16,
        fontWeight: '400',
        color: '#222222',
        textAlign: 'center',
        marginTop: 20,
    },
    loginText: {
        color: '#00BBD6',
        fontWeight: '400',
    },
});
