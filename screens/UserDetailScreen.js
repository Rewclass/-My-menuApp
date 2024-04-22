import React, { useEffect, useState } from "react";
import { ScrollView, Button, View, Alert, ActivityIndicator, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";

import { db } from "../credenciales"; // Importa la instancia de db desde el archivo credenciales.js

const UserDetailScreen = (props) => {
  const initialState = {
    id: "",
    nombre: "",
    email: "",
    phone: "",
  };

  const [user, setUser] = useState(initialState);
  const [loading, setLoading] = useState(true);

  const handleTextChange = (value, prop) => {
    setUser({ ...user, [prop]: value });
  };

  const getUserById = async (id) => {
    const docRef = db.collection("users").doc(id);
    const doc = await docRef.get();
    const user = doc.data();
    setUser({ ...user, id: doc.id });
    setLoading(false);
  };

  const deleteUser = async () => {
    setLoading(true);
    await db.collection("users").doc(props.route.params.userId).delete();
    setLoading(false);
    props.navigation.navigate("UsersList");
  };

  const openConfirmationAlert = () => {
    Alert.alert(
      "Removing the User",
      "Are you sure?",
      [
        { text: "Yes", onPress: () => deleteUser() },
        { text: "No", onPress: () => console.log("canceled") },
      ],
      {
        cancelable: true,
      }
    );
  };

  const updateUser = async () => {
    await db.collection("users").doc(user.id).set({
      nombre: user.nombre,
      email: user.email,
      phone: user.phone,
    });
    setUser(initialState);
    props.navigation.navigate("UsersList");
  };

  useEffect(() => {
    getUserById(props.route.params.userId);
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#9E9E9E" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.label}>Nombre</Text>
        <TextInput
          placeholder="nombre"
          autoCompleteType="username"
          style={styles.inputGroup}
          value={user.nombre}
          onChangeText={(value) => handleTextChange(value, "nombre")}
        />
      </View>
      <View>
        <Text style={styles.label}>Email</Text>
        <TextInput
          autoCompleteType="email"
          placeholder="Email"
          style={styles.inputGroup}
          value={user.email}
          onChangeText={(value) => handleTextChange(value, "email")}
        />
      </View>
      <View>
        <Text style={styles.label}>Teléfono</Text>
        <TextInput
          placeholder="Phone"
          autoCompleteType="tel"
          style={styles.inputGroup}
          value={user.phone}
          onChangeText={(value) => handleTextChange(value, "phone")}
        />
      </View>
      <View style={styles.btn}>
        <Button
          title="Eliminar"
          onPress={() => openConfirmationAlert()}
          color="#2E64FE"
          borderRadius={10}
        />
      </View>
      <View>
        <Button
          title="Actualizar"
          onPress={() => updateUser()}
          color="#0B6121"
          borderRadius={10}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputGroup: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#cccccc",
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
    fontSize: 16,
  },
  btn: {
    marginBottom: 7,
    borderRadius: 10,
  },
});

export default UserDetailScreen;
