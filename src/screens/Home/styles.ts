import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
    // Corpo do APP
    container: {
      flex: 1,
      
      padding: 24,

      backgroundColor: '#000000',
    },
  
    // Título
    eventName: {
      marginTop: 48,

      fontSize: 24,
      fontWeight: 'bold',

      color: 'white',
    },
  
    // Descrição
    eventDate: {
      marginTop: 10,

      fontSize: 20,
      fontWeight: 'bold',
      
      color:'#363636',
    },

    // Caixa de texto
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

    // Botão, forma e cor
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

    // Botão, fonte e texto
    buttonText: {
      fontSize: 30,

      color: '#DCDCDC',
    },

    // Transformar os elementos em Block
    form: {
      width: '100%',

      flexDirection: 'row', 

      marginTop: 36,
      marginBottom: 42,
    },

    // Lista de participantes
    listEmptyText: {
      textAlign: 'center',
      
      fontSize: 14,

      color: "white",
    },
  });