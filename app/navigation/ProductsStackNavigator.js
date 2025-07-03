import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { SCREEN_NAMES } from '../types';

// Product Screens
import ProductsScreen from '../screens/ProductDetailsScreen';
import ProductListScreen from '../screens/ProductListScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
// import EditProductScreen from '../screens/EditProductScreen';
// import ProductDetailsScreen from '../screens/ProductDetailsScreen';

const Stack = createStackNavigator();

const ProductsStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="ProductsListScreen"
        component={ProductListScreen}
        options={{
          headerShown: false,
        }}
      />
{/*       
      <Stack.Screen
        name="AddProduct"
        component={AddProductScreen}
        options={{
          headerShown: false,
        }}
      /> */}
      
      {/* <Stack.Screen
        name="EditProduct"
        component={EditProductScreen}
        options={{
          headerShown: false,
        }}
      /> */}
      
      <Stack.Screen
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default ProductsStackNavigator; 