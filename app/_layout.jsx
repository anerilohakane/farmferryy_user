import '../global.css';
// import LoginScreen from './screens/loginScreen';

// // export default function RootLayout() {
// export default function App() {
//   return (
//     <LoginScreen />
//   );
// }

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from './context/AuthContext';
import AppNavigator from './navigation/AppNavigator';
import Toast from 'react-native-toast-message';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    // <NavigationContainer>
      <AuthProvider>
        <AppNavigator />
        <Toast />
        <StatusBar style="auto" />
      </AuthProvider>
    // </NavigationContainer>
  );
} 
