import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AddAddressScreen({ navigation }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    if (!name || !phone || !street || !city || !pincode) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    setIsSaving(true);

    // Simulate saving address
    setTimeout(() => {
      setIsSaving(false);
      Alert.alert('Success', 'Address saved successfully');
      navigation.goBack();
    }, 1000);
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-gray-50"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView className="p-4" showsVerticalScrollIndicator={false}>
        <Text className="text-2xl font-bold text-gray-800 mb-6">Add New Address</Text>

        {/* Name */}
        <View className="mb-4">
          <Text className="mb-1 text-gray-700 font-medium">Full Name</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
            className="bg-white rounded-xl p-4 border border-gray-200 text-base"
          />
        </View>

        {/* Phone */}
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

        {/* Street Address */}
        <View className="mb-4">
          <Text className="mb-1 text-gray-700 font-medium">Street Address</Text>
          <TextInput
            value={street}
            onChangeText={setStreet}
            placeholder="Enter street/house/building"
            className="bg-white rounded-xl p-4 border border-gray-200 text-base"
          />
        </View>

        {/* City */}
        <View className="mb-4">
          <Text className="mb-1 text-gray-700 font-medium">City</Text>
          <TextInput
            value={city}
            onChangeText={setCity}
            placeholder="Enter city"
            className="bg-white rounded-xl p-4 border border-gray-200 text-base"
          />
        </View>

        {/* Pincode */}
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

        {/* Save Button */}
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
              {isSaving ? 'Saving...' : 'Save Address'}
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
