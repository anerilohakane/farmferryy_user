import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const navigation = useNavigation();
  const user = { name: 'Vaish', email: 'vaish@example.com' };

  return (
    <ScrollView className="flex-1 bg-gray-50 px-4 pt-6">
      <Text className="text-2xl font-bold text-gray-800 mb-4">My Profile</Text>

      <View className="bg-white rounded-2xl p-4 mb-6 border border-gray-100">
        <Text className="text-lg font-semibold text-gray-800 mb-1">{user.name}</Text>
        <Text className="text-sm text-gray-500">{user.email}</Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('EditProfile', { user })}
        className="flex-row items-center justify-between bg-white p-4 rounded-2xl mb-3 border border-gray-100"
      >
        <Text className="text-gray-800 font-medium">Edit Profile</Text>
        <Ionicons name="chevron-forward" size={18} color="#6B7280" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('ChangePassword')}
        className="flex-row items-center justify-between bg-white p-4 rounded-2xl mb-3 border border-gray-100"
      >
        <Text className="text-gray-800 font-medium">Change Password</Text>
        <Ionicons name="lock-closed-outline" size={18} color="#6B7280" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Support')}
        className="flex-row items-center justify-between bg-white p-4 rounded-2xl mb-3 border border-gray-100"
      >
        <Text className="text-gray-800 font-medium">Support</Text>
        <Ionicons name="help-circle-outline" size={18} color="#6B7280" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Terms')}
        className="flex-row items-center justify-between bg-white p-4 rounded-2xl mb-6 border border-gray-100"
      >
        <Text className="text-gray-800 font-medium">Terms & Conditions</Text>
        <Ionicons name="document-text-outline" size={18} color="#6B7280" />
      </TouchableOpacity>

      <TouchableOpacity className="bg-red-100 py-4 rounded-2xl items-center">
        <Text className="text-red-500 font-semibold">Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
