import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        padding: 16,
      },
      label: {
        fontFamily: 'Lato',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 16.8,
        color: '#222222',
        marginBottom: 8,
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 48,
        backgroundColor: '#ebfdff',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#00bdd6',
        paddingHorizontal: 10,
      },
      icon: {
        width: 20,
        height: 20,
      },
      input: {
        flex: 1,
        marginLeft: 8,
        fontFamily: 'Lato',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 14.4,
        color: '#a9a9a9',
      },
});
