import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from '../context/AuthContext';
import { SCREEN_NAMES } from '../types';

// Auth Screens
import LoginScreen from '../screens/auth/LoginScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';
import ResetPasswordScreen from '../screens/auth/ResetPasswordScreen';

// Main App Screens
import MainTabNavigator from './MainTabNavigator';

// Loading Screen
import LoadingScreen from '../screens/LoadingScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    // <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {isAuthenticated ? (
          // Authenticated Stack
          <Stack.Screen
            name="MainApp"
            component={MainTabNavigator}
            options={{ headerShown: false }}
          />
        ) : (
          // Auth Stack
          <>
            <Stack.Screen
              name={SCREEN_NAMES.LOGIN}
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name={SCREEN_NAMES.FORGOT_PASSWORD}
              component={ForgotPasswordScreen}
              options={{
                headerShown: true,
                title: 'Forgot Password',
                headerBackTitle: 'Back',
              }}
            />
            <Stack.Screen
              name={SCREEN_NAMES.RESET_PASSWORD}
              component={ResetPasswordScreen}
              options={{
                headerShown: true,
                title: 'Reset Password',
                headerBackTitle: 'Back',
              }}
            />
          </>
        )}
      </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default AppNavigator; 