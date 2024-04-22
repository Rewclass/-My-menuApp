import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { auth } from '../credenciales'; // Importa auth desde el archivo credenciales.js

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Estado para controlar si la contraseña se muestra o no

  const toggleShowPassword = () => {
    setShowPassword(!showPassword); // Alterna el estado de mostrar contraseña
  };

  const logueo = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password); // Usa auth directamente desde credenciales.js
      Alert.alert('Iniciando sesión', 'Accediendo');
      props.navigation.navigate('RecipeListScreen');
    } catch (error) {
      console.log(error);
      Alert.alert('Error de inicio de sesión', 'Ha ocurrido un error. Por favor revise la contraseña e inténtelo de nuevo.');
    }
  }

  return (
    <View style={styles.padre}>
      <View>
        <Image source={require('../assets/photo-.jpg')} style={styles.profile} />
      </View>

      <View style={styles.tarjeta}>
        <View style={styles.cajaTexto}>
          <TextInput
            placeholder='correo@gmail.com'
            style={{ paddingHorizontal: 15 }}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View style={styles.cajaTexto}>
          <TextInput
            placeholder='Password'
            style={{ paddingHorizontal: 15 }}
            secureTextEntry={!showPassword} // Usa secureTextEntry basado en el estado showPassword
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity onPress={toggleShowPassword} style={styles.showPasswordButton}>
            <Text>{showPassword ? 'Hide' : 'Show'}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.padreBoton}>
          <TouchableOpacity style={styles.cajaBoton} onPress={logueo}>
            <Text style={styles.textBoton}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Botón para redireccionar a la sección UserList */}
      <TouchableOpacity style={styles.bottomButton} onPress={() => props.navigation.navigate('UsersList')}>
        <Text style={styles.bottomButtonText}>Ir a la sección de usuarios</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  padre: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: 'white'
  },
  tarjeta: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '90%',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  cajaTexto: {
    marginBottom: 20,
    backgroundColor: '#cccccc40',
    borderRadius: 38,
    marginVertical: 10,
    position: 'relative'
  },
  padreBoton: {
    alignItems: 'center'
  },
  cajaBoton: {
    backgroundColor: '#525FE1',
    borderRadius: 30,
    paddingVertical: 20,
    width: 150,
    marginTop: 20
  },
  textBoton: {
    textAlign: 'center',
    color: 'white'
  },
  showPasswordButton: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -10 }],
  },
  bottomButton: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#FF5733',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  bottomButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
