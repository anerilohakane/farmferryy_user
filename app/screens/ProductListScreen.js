import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const products = [
  {
    id: '1',
    name: 'Organic Tomatoes',
    price: '₹45/kg',
    originalPrice: '₹60/kg',
    image: require('../../assets/images/tomato.png'),
  },
  {
    id: '2',
    name: 'Fresh Apples',
    price: '₹120/kg',
    originalPrice: '₹150/kg',
    image: require('../../assets/images/apple.png'),
  },
  {
    id: '3',
    name: 'Brown Rice',
    price: '₹90/kg',
    originalPrice: '₹110/kg',
    image: require('../../assets/images/grains.jpg'),
  },
];

export default function ProductListScreen() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-gray-50 px-4 pt-6">
      <Text className="text-2xl font-bold text-gray-800 mb-4">All Products</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="bg-white rounded-2xl mb-4 p-3 w-[48%]"
            onPress={() => navigation.navigate('ProductDetails', { product: item })}
          >
            <Image source={item.image} className="w-full h-28 mb-2" resizeMode="contain" />
            <Text className="text-gray-800 font-semibold">{item.name}</Text>
            <View className="flex-row items-center mt-1">
              <Text className="text-green-600 font-bold">{item.price}</Text>
              <Text className="text-xs text-gray-400 ml-2 line-through">{item.originalPrice}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
