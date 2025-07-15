// import React, { useState } from 'react';
// import {
//   View, Text, FlatList, Image, TouchableOpacity,
//   Dimensions,
//   Animated,
//   StatusBar,
//   Alert,
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useAppContext } from '../context/AppContext';
// import { Star, Trash2, ShoppingCart, Heart, Package } from 'lucide-react-native';
// import { LinearGradient } from 'expo-linear-gradient';

// const { width } = Dimensions.get('window');
// const ITEM_WIDTH = (width - 50) / 2;

// export default function WishlistScreen() {
//   const { wishlistItems, addToCart, removeFromWishlist } = useAppContext();
//   const [animatedValues] = useState(new Map());

//   const getAnimatedValue = (id) => {
//     if (!animatedValues.has(id)) {
//       animatedValues.set(id, new Animated.Value(1));
//     }
//     return animatedValues.get(id);
//   };

//   const handleAddToCart = (item) => {
//     const animatedValue = getAnimatedValue(item.id);

//     // Bounce animation
//     Animated.sequence([
//       Animated.timing(animatedValue, {
//         toValue: 0.95,
//         duration: 100,
//         useNativeDriver: true,
//       }),
//       Animated.timing(animatedValue, {
//         toValue: 1,
//         duration: 100,
//         useNativeDriver: true,
//       }),
//     ]).start();

//     addToCart(item);
//   };

//   const handleRemoveFromWishlist = (item) => {
//     Alert.alert(
//       "Remove from Wishlist",
//       `Are you sure you want to remove "${item.name}" from your wishlist?`,
//       [
//         { text: "Cancel", style: "cancel" },
//         {
//           text: "Remove",
//           style: "destructive",
//           onPress: () => {
//             const animatedValue = getAnimatedValue(item.id);
//             // Fade out animation
//             Animated.timing(animatedValue, {
//               toValue: 0,
//               duration: 300,
//               useNativeDriver: true,
//             }).start(() => {
//               removeFromWishlist(item.id);
//             });
//           }
//         }
//       ]
//     );
//   };

//   const renderItem = ({ item, index }) => {
//     const animatedValue = getAnimatedValue(item.id);

//     return (
//       <Animated.View
//         style={{
//           transform: [{ scale: animatedValue }],
//           opacity: animatedValue,
//           width: ITEM_WIDTH,
//           marginBottom: 20,
//         }}
//       >
//         <View className="bg-white rounded-3xl shadow-lg overflow-hidden">
//           {/* Image Container with Gradient Overlay */}
//           <View className="relative">
//             <Image
//               source={{ uri: item.image }} // ✅ Correct for string URLs
//               className="w-full h-48 rounded-t-3xl"
//               resizeMode="cover"
//             />


//             {/* Gradient Overlay */}
//             <LinearGradient
//               colors={['transparent', 'rgba(0,0,0,0.1)']}
//               className="absolute bottom-0 left-0 right-0 h-16"
//             />

//             {/* Wishlist Badge */}
//             <View className="absolute top-3 left-3 bg-red-500 rounded-full px-2 py-1 flex-row items-center">
//               <Heart size={12} color="white" fill="white" />
//               <Text className="text-white text-xs font-semibold ml-1">Loved</Text>
//             </View>

//             {/* Remove Button */}
//             <TouchableOpacity
//               onPress={() => handleRemoveFromWishlist(item)}
//               className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md"
//             >
//               <Trash2 size={16} color="#ef4444" />
//             </TouchableOpacity>

//             {/* Discount Badge */}
//             {item.discount > 0 && (
//               <View className="absolute bottom-3 right-3 bg-green-500 rounded-full px-2 py-1">
//                 <Text className="text-white text-xs font-bold">-{item.discount}%</Text>
//               </View>
//             )}
//           </View>

//           {/* Content */}
//           <View className="p-4">
//             {/* Product Name */}
//             <Text
//               className="text-base font-bold text-gray-800 mb-2"
//               numberOfLines={2}
//               style={{ lineHeight: 20 }}
//             >
//               {item.name}
//             </Text>

//             {/* Rating */}
//             <View className="flex-row items-center mb-3">
//               <View className="flex-row items-center mr-2">
//                 {[...Array(5)].map((_, i) => (
//                   <Star
//                     key={i}
//                     size={14}
//                     color={i < Math.round(item.rating) ? '#facc15' : '#e5e7eb'}
//                     fill={i < Math.round(item.rating) ? '#facc15' : 'none'}
//                   />
//                 ))}
//               </View>
//               <Text className="text-gray-500 text-sm">({item.rating})</Text>
//             </View>

//             {/* Price Section */}
//             <View className="flex-row items-center justify-between mb-4">
//               <View className="flex-row items-center space-x-2">
//                 <Text className="text-gray-400 line-through text-sm">₹{item.originalPrice}</Text>
//                 <Text className="text-gray-800 font-bold text-lg">₹{item.price}</Text>
//               </View>
//               <View className="bg-green-50 rounded-full px-2 py-1">
//                 <Text className="text-green-600 text-xs font-semibold">Save ₹{item.originalPrice - item.price}</Text>
//               </View>
//             </View>

//             {/* Add to Cart Button */}
//             <TouchableOpacity
//               onPress={() => handleAddToCart(item)}
//               className="bg-gradient-to-r from-green-500 to-green-600 py-3 rounded-2xl shadow-sm"
//             >
//               <LinearGradient
//                 colors={['#22c55e', '#16a34a']}
//                 className="py-3 rounded-2xl flex-row items-center justify-center"
//               >
//                 <ShoppingCart size={16} color="white" />
//                 <Text className="text-white font-bold text-sm ml-2">Add to Cart</Text>
//               </LinearGradient>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Animated.View>
//     );
//   };

//   const renderEmpty = () => (
//     <View className="flex-1 justify-center items-center py-20">
//       <View className="bg-gray-100 rounded-full p-8 mb-6">
//         <Package size={64} color="#9ca3af" />
//       </View>
//       <Text className="text-xl font-bold text-gray-700 mb-2">Your wishlist is empty</Text>
//       <Text className="text-gray-500 text-center px-8">
//         Start adding items to your wishlist by tapping the heart icon on products you love!
//       </Text>
//     </View>
//   );

//   return (
//     <SafeAreaView className="flex-1 bg-gray-50">
//       <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />

//       {/* Header */}
//       <View className="px-6 py-4 bg-white shadow-sm">
//         <View className="flex-row items-center justify-between">
//           <View>
//             <Text className="text-2xl font-bold text-gray-800">My Wishlist</Text>
//             <Text className="text-gray-500 text-sm">
//               {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'}
//             </Text>
//           </View>
//           <View className="bg-red-50 rounded-full p-3">
//             <Heart size={24} color="#ef4444" fill="#ef4444" />
//           </View>
//         </View>
//       </View>

//       {/* Content */}
//       <View className="flex-1 px-5">
//         {wishlistItems.length > 0 ? (
//           <FlatList
//             data={wishlistItems}
//             keyExtractor={(item) => item.id.toString()}
//             renderItem={renderItem}
//             numColumns={2}
//             columnWrapperStyle={{ justifyContent: 'space-between' }}
//             showsVerticalScrollIndicator={false}
//             contentContainerStyle={{ paddingTop: 20, paddingBottom: 100 }}
//             ItemSeparatorComponent={() => <View style={{ height: 0 }} />}
//           />
//         ) : (
//           renderEmpty()
//         )}
//       </View>
//     </SafeAreaView>
//   );
// }


import React, { useState } from 'react';
import {
  View, Text, FlatList, Image, TouchableOpacity,
  Dimensions,
  Animated,
  StatusBar,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppContext } from '../context/AppContext';
import { Star, Trash2, ShoppingCart, Heart, Package, Sparkles } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = (width - 36) / 2;

export default function WishlistScreen() {
  const { wishlistItems, addToCart, removeFromWishlist } = useAppContext();
  const [animatedValues] = useState(new Map());

  const getAnimatedValue = (id) => {
    if (!animatedValues.has(id)) {
      animatedValues.set(id, new Animated.Value(1));
    }
    return animatedValues.get(id);
  };

  const handleAddToCart = (item) => {
    const animatedValue = getAnimatedValue(item.id);

    // Subtle bounce animation
    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: 0.98,
        duration: 80,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 120,
        useNativeDriver: true,
      }),
    ]).start();

    addToCart(item);
  };

  const handleRemoveFromWishlist = (item) => {
    Alert.alert(
      "Remove from Wishlist",
      `Remove "${item.name}" from your wishlist?`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Remove",
          style: "destructive",
          onPress: () => {
            const animatedValue = getAnimatedValue(item.id);
            Animated.timing(animatedValue, {
              toValue: 0,
              duration: 250,
              useNativeDriver: true,
            }).start(() => {
              removeFromWishlist(item.id);
            });
          }
        }
      ]
    );
  };

  const renderItem = ({ item, index }) => {
    const animatedValue = getAnimatedValue(item.id);

    return (
      <Animated.View
        style={{
          transform: [{ scale: animatedValue }],
          opacity: animatedValue,
          width: ITEM_WIDTH,
          marginBottom: 16,
        }}
      >
        <View className="bg-white rounded-2xl overflow-hidden" style={{
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.08,
          shadowRadius: 8,
          elevation: 3,
        }}>
          {/* Image Container */}
          <View className="relative">
            <Image
              source={{ uri: item.image }}
              className="w-full h-36 rounded-t-2xl"
              resizeMode="cover"
            />

            {/* Subtle overlay for better text readability */}
            <LinearGradient
              colors={['transparent', 'rgba(0,0,0,0.05)']}
              className="absolute bottom-0 left-0 right-0 h-12"
            />

            {/* Wishlist Badge - Smaller and more elegant */}
            <View className="absolute top-2 left-2 bg-red-500 rounded-full px-2 py-1 flex-row items-center" style={{
              shadowColor: '#ef4444',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.3,
              shadowRadius: 2,
              elevation: 2,
            }}>
              <Heart size={10} color="white" fill="white" />
              <Text className="text-white text-xs font-medium ml-1">Loved</Text>
            </View>

            {/* Remove Button - More subtle */}
            <TouchableOpacity
              onPress={() => handleRemoveFromWishlist(item)}
              className="absolute top-2 right-2 bg-white/95 backdrop-blur-sm rounded-full p-1.5" style={{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.1,
                shadowRadius: 2,
                elevation: 2,
              }}
            >
              <Trash2 size={14} color="#ef4444" />
            </TouchableOpacity>

            {/* Discount Badge */}
            {item.discount > 0 && (
              <View className="absolute bottom-2 right-2 bg-emerald-500 rounded-lg px-2 py-1">
                <Text className="text-white text-xs font-bold">-{item.discount}%</Text>
              </View>
            )}
          </View>

          {/* Content */}
          <View className="p-3">
            {/* Product Name */}
            <Text
              className="text-sm font-bold text-gray-900 mb-1.5"
              numberOfLines={2}
              style={{ lineHeight: 18 }}
            >
              {item.name}
            </Text>

            {/* Rating - More compact */}
            <View className="flex-row items-center mb-2">
              <View className="flex-row items-center mr-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    color={i < Math.round(item.rating) ? '#f59e0b' : '#e5e7eb'}
                    fill={i < Math.round(item.rating) ? '#f59e0b' : 'none'}
                  />
                ))}
              </View>
              <Text className="text-gray-500 text-xs">({item.rating})</Text>
            </View>

            {/* Price Section - More compact */}
            <View className="flex-row items-center justify-between mb-3">
              <View className="flex-row items-center">
                <Text className="text-gray-400 line-through text-xs mr-1">₹{item.originalPrice}</Text>
                <Text className="text-gray-900 font-bold text-base">₹{item.price}</Text>
              </View>
              <View className="bg-emerald-50 rounded-md px-1.5 py-0.5">
                <Text className="text-emerald-600 text-xs font-semibold">Save ₹{item.originalPrice - item.price}</Text>
              </View>
            </View>

            {/* Add to Cart Button - More elegant */}
            <TouchableOpacity
              onPress={() => handleAddToCart(item)}
              className="overflow-hidden rounded-xl"
              style={{
                shadowColor: '#059669',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.15,
                shadowRadius: 4,
                elevation: 2,
              }}
            >
              <LinearGradient
                colors={['#10b981', '#059669']}
                className="py-2.5 flex-row items-center justify-center"
              >
                <ShoppingCart size={14} color="white" />
                <Text className="text-white font-semibold text-sm ml-1.5">Add to Cart</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    );
  };

  const renderEmpty = () => (
    <View className="flex-1 justify-center items-center py-16">
      <View className="bg-gradient-to-b from-gray-50 to-gray-100 rounded-3xl p-12 mb-6" style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 12,
        elevation: 3,
      }}>
        <Package size={56} color="#9ca3af" />
        <View className="absolute top-8 right-8">
          <Sparkles size={20} color="#d1d5db" />
        </View>
      </View>
      <Text className="text-xl font-bold text-gray-800 mb-2">Your wishlist is empty</Text>
      <Text className="text-gray-500 text-center px-8 leading-5">
        Discover amazing products and add them to your wishlist by tapping the heart icon!
      </Text>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />

      {/* Header - More refined */}
      <View className="px-6 py-5 bg-white" style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 2,
      }}>
        <View className="flex-row items-center justify-between">
          <View>
            <Text className="text-2xl font-bold text-gray-900">My Wishlist</Text>
            <Text className="text-gray-500 text-sm mt-0.5">
              {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved
            </Text>
          </View>
          <View className="bg-red-50 rounded-2xl p-3" style={{
            shadowColor: '#ef4444',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 2,
          }}>
            <Heart size={22} color="#ef4444" fill="#ef4444" />
          </View>
        </View>
      </View>

      {/* Content */}
      <View className="flex-1 px-4">
        {wishlistItems.length > 0 ? (
          <FlatList
            data={wishlistItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingTop: 16, paddingBottom: 100 }}
            ItemSeparatorComponent={() => <View style={{ height: 0 }} />}
          />
        ) : (
          renderEmpty()
        )}
      </View>
    </SafeAreaView>
  );
}