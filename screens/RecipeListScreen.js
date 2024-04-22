import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import SearchFilter from "../components/SearchFilter";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoriesFilter from "../components/CategoriesFilter";
import RecipeCard from "../components/RecipeCard";

const RecipeListScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Render header */}
      <Header headerText={"Bienvenigo Al Menu"} style={{fontWeight:"bold", fontSize:30}} />
      {/* Render search filter */} 
      <SearchFilter placeholder="Indica tu plato favorito" />
      {/* {Categories} */}
      <View style={{ marginTop: 22}}> 
      <Text style={{ fontSize: 22, fontWeight: "bold"}}>Categories</Text>
      {/* {Categorias List} */}
      <CategoriesFilter/>
      </View>
      {/*Recipe List Filter*/}
      <View style={{marginTop: 22, flex:1 }}> 
      <Text style={{ fontSize: 22, fontWeight: "bold"}}>Recipes</Text>
      {/* {Recipe List} */}

      <RecipeCard/>
      </View>


    </SafeAreaView>
    
  );
};

export default RecipeListScreen;

const styles = StyleSheet.create({});
