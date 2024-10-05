import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        padding: 16,
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
