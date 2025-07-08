import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Alert } from 'react-native';

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (!name || !email || !phone || !password) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    Alert.alert('Success', 'Account created!');
    navigation.navigate('Login');
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-gray-50 justify-center px-5"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Text className="text-2xl font-bold text-gray-800 mb-6">Create Account</Text>

      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Full Name"
        className="bg-white border border-gray-200 rounded-xl p-4 text-base mb-3"
      />
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
        className="bg-white border border-gray-200 rounded-xl p-4 text-base mb-3"
      />
      <TextInput
        value={phone}
        onChangeText={setPhone}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        className="bg-white border border-gray-200 rounded-xl p-4 text-base mb-3"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
        className="bg-white border border-gray-200 rounded-xl p-4 text-base mb-6"
      />

      <TouchableOpacity
        onPress={handleRegister}
        className="bg-green-500 py-4 rounded-2xl items-center"
      >
        <Text className="text-white text-base font-semibold">Register</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
