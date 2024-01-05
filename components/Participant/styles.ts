import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 5,
      marginRight: 10,
      borderRadius: 5,
      backgroundColor: '#1F1E25',
    },
    name : {
      flex: 1,
      marginLeft: 16,
      fontSize: 16,
      color: 'white',
    },
    button: {
      width: 56,
      height: 56,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 5,
      backgroundColor: '#CD5C5C',
    },
    buttonText: {
      fontSize: 30,
      color: '#DCDCDC',
    },
});
