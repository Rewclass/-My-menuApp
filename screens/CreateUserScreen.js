import React, { useState } from 'react';
import { View, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import { db } from '../credenciales'; // Importa la instancia de db desde el archivo credenciales.js

const AddUserScreen = (props) => {
  const initialState = {
    nombre: '',
    email: '',
    phone: '',
  };

  const [state, setState] = useState(initialState);

  const handleChangeText = (value, nombre) => {
    setState({ ...state, [nombre]: value });
  };

  const saveNewUser = async () => {
    if (state.nombre === '') {
      alert('Please provide a nombre');
    } else {
      try {
        await db.collection('users').add({
          nombre: state.nombre,
          email: state.email,
          phone: state.phone,
        });
        props.navigation.navigate('UsersList');
      } catch (error) {
        console.error('Error adding user: ', error);
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="nombre"
          onChangeText={(value) => handleChangeText(value, 'nombre')}
          value={state.nombre}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Email"
          onChangeText={(value) => handleChangeText(value, 'email')}
          value={state.email}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Phone"
          onChangeText={(value) => handleChangeText(value, 'phone')}
          value={state.phone}
        />
      </View>
      <View style={styles.button}>
        <Button title="Save User" onPress={saveNewUser} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  button: {
    marginTop: 15,
  },
});

export default AddUserScreen;
