import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
 
import RecipeListScreen  from '../screens/RecipeListScreen';
import { FontAwesome } from '@expo/vector-icons';

const Header = ({ headerText, headerIcon }) => {
    return (
      <View style={{ flexDirection: "row" }}>
        <Text style={{ flex: 1 }}> {headerText} </Text>
        <FontAwesome icon={headerIcon} size={23} color="#f96163" />
      </View>
    );
}


export default Header;

const style = StyleSheet.create({});
