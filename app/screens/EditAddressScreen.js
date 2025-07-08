import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function EditAddressScreen({ route, navigation }) {
  const { address } = route.params;

  const [name, setName] = useState(address?.name || '');
  const [phone, setPhone] = useState(address?.phone || '');
  const [street, setStreet] = useState(address?.street || '');
  const [city, setCity] = useState(address?.city || '');
  const [pincode, setPincode] = useState(address?.pincode || '');
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    if (!name || !phone || !street || !city || !pincode) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    setIsSaving(true);

    setTimeout(() => {
      setIsSaving(false);
      Alert.alert('Success', 'Address updated successfully');
      navigation.goBack();
    }, 1000);
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-gray-50"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView className="p-4">
        <Text className="text-2xl font-bold text-gray-800 mb-6">Edit Address</Text>

        <View className="mb-4">
          <Text className="mb-1 text-gray-700 font-medium">Full Name</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
            className="bg-white rounded-xl p-4 border border-gray-200 text-base"
          />
        </View>

        <View className="mb-4">
          <Text className="mb-1 text-gray-700 font-medium">Phone Number</Text>
          <TextInput
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            placeholder="Enter phone number"
            className="bg-white rounded-xl p-4 border border-gray-200 text-base"
          />
        </View>

        <View className="mb-4">
          <Text className="mb-1 text-gray-700 font-medium">Street Address</Text>
          <TextInput
            value={street}
            onChangeText={setStreet}
            placeholder="Enter street/house/building"
            className="bg-white rounded-xl p-4 border border-gray-200 text-base"
          />
        </View>

        <View className="mb-4">
          <Text className="mb-1 text-gray-700 font-medium">City</Text>
          <TextInput
            value={city}
            onChangeText={setCity}
            placeholder="Enter city"
            className="bg-white rounded-xl p-4 border border-gray-200 text-base"
          />
        </View>

        <View className="mb-6">
          <Text className="mb-1 text-gray-700 font-medium">Pincode</Text>
          <TextInput
            value={pincode}
            onChangeText={setPincode}
            keyboardType="number-pad"
            placeholder="Enter pincode"
            className="bg-white rounded-xl p-4 border border-gray-200 text-base"
          />
        </View>

        <TouchableOpacity
          onPress={handleSave}
          disabled={isSaving}
          className="bg-green-500 rounded-2xl py-4 items-center"
        >
          <View className="flex-row items-center">
            {isSaving ? (
              <Ionicons name="time-outline" size={18} color="white" className="mr-2" />
            ) : (
              <Ionicons name="save" size={18} color="white" className="mr-2" />
            )}
            <Text className="text-white font-semibold text-base">
              {isSaving ? 'Saving...' : 'Update Address'}
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
