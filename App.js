import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
//Vistas importante
// import firebase, {FirebaseContext} from './database';
import firebase from './credenciales';
////
import { View } from 'react-native';

import Login from './screens/Login';
import CreateUserScreen from './screens/CreateUserScreen';
import UsersList from "./screens/UsersList";
import UserDetailScreen from "./screens/UserDetailScreen";
import RecipeListScreen from './screens/RecipeListScreen';
import Header from './components/Header';
import SearchFilter from './components/SearchFilter';
import RecipeDetailScreen from './screens/RecipeDetailScreen'
// Los hooks se colocan dentro del componente funcional
export default function App() {
  const Stack = createStackNavigator();
 
  function MyStack() {
    return (

     
      <Stack.Navigator>

        <Stack.Screen
          name="RecipeListScreen"
          component={RecipeListScreen}
          options={{title: "RecipeListScreen" }}

          />
          <Stack.Screen
          name="RecipeDetailScreen"
          component={RecipeDetailScreen}
          options={{title: "RecipeDetailScreen" }}

          />

        <Stack.Screen
          name="Header"
          component={Header}
          options={{title: "Header" }}

        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "LOGIN",
            headerTintColor: "white",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#525FE1" }
          }}
        />
        
        

        <Stack.Screen
        name="UsersList"
        component={UsersList}
        options={{ title: "Users List" }}
      />
      <Stack.Screen
        name="CreateUserScreen"
        component={CreateUserScreen}
        options={{ title: "Create a New User" }}
      />
       
       <Stack.Screen
        name="UserDetailScreen"
        component={UserDetailScreen}
        options={{ title: "User Detail" }}
      />
        
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <MyStack />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  header: {
    alignItems: 'center',
    marginTop: 30, // Espacio superior para el encabezado
  },
  buttonContainer: {
    marginTop: 20, // Espacio superior para los botones
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});