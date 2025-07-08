// import React from 'react';
// import { View, Text, ActivityIndicator } from 'react-native';

// const LoadingScreen = () => {
//   return (
//     <View className="flex-1 bg-white justify-center items-center">
//       <ActivityIndicator size="large" color="#059669" />
//       <Text className="text-gray-600 mt-4 text-lg font-medium">
//         Loading FarmFerry...
//       </Text>
//     </View>
//   );
// };

// export default LoadingScreen; 



import React, { useEffect } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';

export default function LoadingScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <ActivityIndicator size="large" color="#10B981" />
      <Text className="text-gray-600 mt-4 text-base">Loading...</Text>
    </View>
  );
}
