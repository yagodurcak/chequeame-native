import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import React from 'react';

const Cuit = () => {
    return (      

<View style={styles.container}>
      <ImageBackground source={require('../assets/splash.png')} resizeMode="cover" style={styles.image} >
        <View style={styles.formContainer}>
          <Text style={styles.title}>Ingrese el Cuit</Text>
          <TextInput placeholder="Sin puntos ni comas" style={styles.input} keyboardType='numeric' />
                    <TouchableOpacity
            style={styles.boton}
          >
            <Text style={styles.textoboton}>VER INFORMEs</Text>
          </TouchableOpacity>

        </View>
      </ImageBackground>
    </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center"
    },
    formContainer: {
      // backgroundColor:"green",
  
      height: 350,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 200,
  
    },
    title: {
      fontSize: 30,
      textAlign: "center",
      fontWeight: 'bold',
      color: "#366182"
    },
    input: {
      height: 40,
      width: 300,
      borderWidth: 2,
      borderColor: "gainsboro",
      textAlign: "center",
      color: "black",
      marginTop: 10,
      marginBottom: 10
      // backgroundColor:"blue"
    },
    boton1: {
      backgroundColor: "#29a7e2",
      padding: 10,
      marginTop: 10
    },
    boton: {
      backgroundColor: "#366182",
      padding: 10,
      marginTop: 10
    },
    textoboton: {
      color: `white`,
      fontWeight: "bold"
    }
  
  });

export default Cuit
