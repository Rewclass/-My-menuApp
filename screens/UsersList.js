import React, { useState, useEffect } from "react";
import { Button, ScrollView, StyleSheet } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

import { db } from '../credenciales'; // Importa la instancia de db desde el archivo credenciales.js

const UserScreen = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection("users").onSnapshot((querySnapshot) => {
      const usersData = [];
      querySnapshot.forEach((doc) => {
        const { name, email, phone } = doc.data();
        usersData.push({
          id: doc.id,
          name,
          email,
          phone,
        });
      });
      setUsers(usersData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Button
        onPress={() => props.navigation.navigate("CreateUserScreen")}
        title="Create User"
        color="#007AFF"
      />
      {users.map((user) => (
        <ListItem
          key={user.id}
          bottomDivider
          onPress={() => {
            props.navigation.navigate("UserDetailScreen", {
              userId: user.id,
            });
          }}
        >
          <Avatar
            source={{
              uri: "https://images.pexels.com/photos/15273074/pexels-photo-15273074/free-photo-of-naturaleza-animal-fauna-vida-salvaje.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
            rounded
            size="medium"
          />

          
          
          
          <ListItem.Content>
            <ListItem.Title style={styles.name}>{user.name}</ListItem.Title>
            <ListItem.Subtitle style={styles.email}>{user.email}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  email: {
    color: "#666",
  },
});

export default UserScreen;
