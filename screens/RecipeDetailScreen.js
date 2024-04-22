import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, SafeAreaView, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const RecipeDetailScreen = ({ navigation, route }) => {

  const { item } = route.params;

  console.log(item);
  return (
    <View style={{ backgroundColor: item.color, flex: 1 }}>
      <SafeAreaView style={{ flexDirection: "row", marginHorizontal: 16, marginTop: 20 }}>
        <Pressable style={{ flex: 1 }} onPress={() => navigation.goBack()}>
          <FontAwesome name='arrow-circle-left' size={28} color="white" />
        </Pressable>
        <FontAwesome name='heart-o' size={28} color="white" />
      </SafeAreaView>
      
      <View style={{flex: 1}}>

      
      <ScrollView>
        <View style={{
          backgroundColor: "#fff",
          flex: 1,
          marginTop: 240,
          borderTopLeftRadius: 56,
          borderTopRightRadius: 56,
          alignItems: "center",
          paddingHorizontal: 16,
        }}>
          <View style={{ height: 300, width: 300, position: "absolute", top: -150 }}>
            <Image source={item.image}
              style={{ width: "100%", height: "100%", resizeMode: "contain" }} />
          </View>

          {/* Recipe Name */}
          <Text style={{ marginTop: 160, fontSize: 28, fontWeight: "bold" }}>{item.name}</Text>
          {/* recipeDescription */}
          <Text style={{ fontSize: 20, marginVertical: 15, }}>{item.description} </Text>

          {/* RecipeList */}

          <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%",
        backgroundColor: ""}}>
            <View style={{ backgroundColor: "rgba(255,0,0,0.38)", paddingHorizontal: 16,
             borderRadius: 8,paddingVertical: 26, alignItems: "center"}}>
              <Text style={{ fontSize: 40 }}>⏲️</Text>
              <Text style={{fontSize:  20, fontWeight: 400}}>{item.time}</Text>

            </View>
            
            <View style={{ backgroundColor: "rgba(135, 206, 235, 0.8)", paddingHorizontal: 16,
             borderRadius: 8,paddingVertical: 26, alignItems: "center"}}>
              <Text style={{ fontSize: 40 }}>🍽</Text>
              <Text style={{fontSize:  20, fontWeight: 400}}>{item.difficulty}</Text>

            </View>
           
            <View style={{ backgroundColor: "rgba(255, 165, 0, 0.48)", paddingHorizontal: 16,
             borderRadius: 8,paddingVertical: 26, alignItems: "center"}}>
              <Text style={{ fontSize: 40 }}>🔥</Text>
              <Text style={{fontSize:  20, fontWeight: 400}}>{item.calories}</Text>

            </View>

        
          
          </View>

          {/* Recipe ingredients */}

          <View style= {{alingSelf: "flex-start", marginVertical:2, }}>
            <Text style={{fontSize: 22, fontWeight: "600", marginBottom:2}}>
            ingredients:
            </Text>
            {item.ingredients.map((ingredients)=>{
              return(
              <View style={{flexDirection: "row", alignItems: "center", marginVertical: 4}}>
                <View style ={{backgroundColor:"red", height:10, width:10, borderRadius: 5}}>

                </View>
                <Text style={{fontSize: 20, marginLeft: 9}}>{ingredients}</Text>
              </View>
              )
            })}
              
           
          </View>
         

            {/* -------Recipe Steps */}
        
            <View style= {{alingSelf: "flex-start", marginVertical: 22,  }}>
            <Text style={{fontSize: 22, fontWeight: "600", marginBottom:6}}>
            Steps:
            </Text>
            {item.steps.map((steps)=>{
              return(
              <View style={{flexDirection: "row", alignItems: "center", marginVertical: 4}}>
                <View style ={{backgroundColor:"red", height:10, width:10, borderRadius: 1}}>

                </View>
                <Text style={{fontSize: 20, marginLeft: 4}}>{steps}</Text>
              </View>
              )
            })}
              
          
          </View>

              
        </View>
      </ScrollView>
      </View>
    </View>
  );
};

export default RecipeDetailScreen;

const styles = StyleSheet.create({});
