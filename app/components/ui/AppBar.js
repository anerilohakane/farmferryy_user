import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AppBar() {
  return (
    <SafeAreaView>
      <View className="w-full px-4 py-4 bg-green-100 flex-row justify-between items-center">
        {/* Logo & Title */}
        <View className="flex-row items-center">
          <View className="w-8 h-8 bg-green-600 rounded-full items-center justify-center mr-2">
            <Text className="text-white font-bold">F</Text>
          </View>
          <Text className="text-xl font-bold text-green-900">FarmFerry</Text>
        </View>

        {/* Delivery Location */}
        <View className="flex-row items-center">
          <Ionicons name="location-sharp" size={16} color="#22c55e" />
          <Text className="ml-1 text-sm text-green-700 font-medium">Deliver to:</Text>
          <Ionicons name="chevron-down" size={14} color="#4d7c0f" />
        </View>
      </View>
    </SafeAreaView>
  );
}
