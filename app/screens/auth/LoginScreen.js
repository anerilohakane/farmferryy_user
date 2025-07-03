import React from 'react';
import { View, ScrollView, Image, SafeAreaView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoginForm from '../../components/forms/LoginForm';
import { SCREEN_NAMES } from '../../types';

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleLoginSuccess = () => {
    // Navigation will be handled automatically by the AppNavigator
    // based on authentication state
  };

  const handleForgotPassword = () => {
    navigation.navigate(SCREEN_NAMES.FORGOT_PASSWORD);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView 
        className="flex-1"
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 justify-center px-6 py-8">
          {/* Login Form */}
          <LoginForm
            onSuccess={handleLoginSuccess}
            onForgotPassword={handleForgotPassword}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen; 