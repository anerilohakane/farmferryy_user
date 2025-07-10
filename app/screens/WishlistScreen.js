import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppContext } from '../context/AppContext';
import { Star, Trash2 } from 'lucide-react-native';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = (width - 40) / 2;

export default function WishlistScreen() {
  const { wishlistItems, addToCart, removeFromWishlist } = useAppContext();

  const renderItem = ({ item }) => (
    <View className="bg-white rounded-2xl mb-4" style={{ width: ITEM_WIDTH }}>
      <View className="relative">
        <Image
          source={item.image}
          className="w-full h-40 rounded-t-2xl"
          resizeMode="cover"
        />
        <TouchableOpacity
          onPress={() => removeFromWishlist(item.id)}
          className="absolute top-2 right-2 bg-white rounded-full p-1"
        >
          <Trash2 size={18} color="#ef4444" />
        </TouchableOpacity>
      </View>

      <View className="p-2">
        <Text className="text-sm font-semibold text-gray-800" numberOfLines={2}>
          {item.name}
        </Text>

        <View className="flex-row items-center space-x-1 mt-1">
          <Text className="text-green-600 text-sm font-bold">↓{item.discount}%</Text>
          <Text className="text-gray-400 line-through text-xs">₹{item.originalPrice}</Text>
          <Text className="text-black font-semibold text-sm">₹{item.price}</Text>
        </View>

        <View className="flex-row items-center mt-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              color={i < Math.round(item.rating) ? '#facc15' : '#d1d5db'}
              fill={i < Math.round(item.rating) ? '#facc15' : 'none'}
            />
          ))}
        </View>

        <TouchableOpacity
          onPress={() => addToCart(item)}
          className="mt-2 bg-green-100 py-3 rounded-xl"
        >
          <Text className="text-green-700 text-center font-semibold text-sm">Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50 px-4 pt-2">
      <Text className="text-2xl font-bold text-gray-800 mb-4">My Wishlist</Text>
      <FlatList
        data={wishlistItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
