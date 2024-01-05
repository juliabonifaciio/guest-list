import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: '#000000',
    },
  
    eventName: {
      marginTop: 48,
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
  
    eventDate: {
      marginTop: 10,
      fontSize: 20,
      fontWeight: 'bold',
      color:'#363636',
    },

    input: {
      height: 56,
      flex: 1,
      padding: 16,
      marginTop: 10,
      marginRight: 10,
      borderRadius: 5,
      fontSize: 20, 
      backgroundColor: '#1C1C1C',
      color: '#363636',
    },

    button: {
      width: 56,
      height: 56,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
      borderWidth: 1,
      borderRadius: 5,
      backgroundColor: '#2E8B57',
    },

    buttonText: {
      fontSize: 30,
      color: '#DCDCDC',
    },

    form: {
      width: '100%',
      flexDirection: 'row', 
      marginTop: 36,
      marginBottom: 42,
    },

    listEmptyText: {
      textAlign: 'center',
      fontSize: 14,
      color: "white",
    },
  });
