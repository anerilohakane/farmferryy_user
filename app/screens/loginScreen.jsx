import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  return (
    <View className="flex-1 bg-white px-6 justify-center">
      <Text className="text-3xl font-bold text-center text-green-700 mb-8">
        Login
      </Text>

      <Text className="text-base text-gray-600 mb-2">Email</Text>
      <TextInput
        placeholder="Enter your email"
        keyboardType="email-address"
        className="border border-gray-300 rounded-lg p-3 mb-4"
      />

      <Text className="text-base text-gray-600 mb-2">Password</Text>
      <TextInput
        placeholder="Enter your password"
        secureTextEntry
        className="border border-gray-300 rounded-lg p-3 mb-6"
      />

      <TouchableOpacity className="bg-green-600 p-4 rounded-lg mb-4">
        <Text className="text-white text-center font-semibold">Login</Text>
      </TouchableOpacity>

      <Text className="text-center text-gray-500 text-sm">
        Don't have an account? <Text className="text-green-600">Sign up</Text>
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}
