import { Button, ImageBackground, StyleSheet, Text, TextInput, View } from "react-native";

import React from "react";

const image = { uri: "https://reactjs.org/logo-og.png" };

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={require('./assets/FONDO.jpg')} resizeMode="cover" style={styles.image}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Ingrese su Email</Text>
        <TextInput placeholder="ejemplo@gmail.com" style={styles.input}/>
        <Text style={styles.title}>Ingrese su Contraseña</Text>
        <TextInput placeholder="*******" style={styles.input}/>
        <Button title="Iniciar Sesión" color="#366182" />

        <Button title="Registrarse" color="#366182" />
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  formContainer:{
    // backgroundColor:"green",

    height: 350,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 300,
    
  },
  title:{
    fontSize: 30,
    textAlign: "center",
    fontWeight: 'bold',    
    color: "#366182"
  },
  input:{
    height: 40,
    width: 300,
    borderWidth: 2,
    borderColor: "gainsboro",
    textAlign: "center",
    color: "black",
    marginTop: 10,
    marginBottom: 10   
    // backgroundColor:"blue"
}

});

export default App;