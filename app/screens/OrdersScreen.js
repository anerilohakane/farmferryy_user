import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//import OrdersScreen from '../screens/OrdersScreen';
import { Ionicons } from '@expo/vector-icons';

const orders = [
  { id: '1234', date: '2025-07-01', status: 'Delivered', total: '₹325' },
  { id: '1235', date: '2025-06-28', status: 'Processing', total: '₹210' },
];

export default function OrdersScreen() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-gray-50 pt-6 px-4">
      <Text className="text-2xl font-bold text-gray-800 mb-4">My Orders</Text>

      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('OrderDetails')}
            className="bg-white p-4 rounded-2xl mb-3 border border-gray-100 shadow-sm"
          >
            <View className="flex-row justify-between items-center mb-1">
              <Text className="text-gray-700 font-semibold">Order #{item.id}</Text>
              <Text className="text-green-600 text-sm font-medium">{item.status}</Text>
            </View>
            <Text className="text-sm text-gray-500">Date: {item.date}</Text>
            <Text className="text-sm text-gray-700 mt-1">Total: {item.total}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
