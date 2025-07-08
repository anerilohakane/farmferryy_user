import React, { useState } from 'react';
import {View,Text,Image,TouchableOpacity,ScrollView,Alert,
} from 'react-native';
import { useAppContext } from '../context/AppContext';
import { Star, MapPin, ShoppingCart } from 'lucide-react-native';

export default function ProductDetailsScreen({ route, navigation }) {
  const { product } = route.params;
  console.log(product);
  
  const { addToCart, cartItems } = useAppContext();

  const isAlreadyInCart = cartItems.some(item => item.id === product.id);
  const [added, setAdded] = useState(isAlreadyInCart);

  const handleAddToCart = () => {
    if (!added) {
      addToCart({ ...product, quantity: 1 });
      setAdded(true);
    }
  };

  const handleBuyNow = () => {
    if (!isAlreadyInCart) {
      addToCart({ ...product, quantity: 1 });
    }
    navigation.navigate('Cart');
  };

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Product Image */}
      <Image
        source={product.image}
        className="w-full h-64 bg-gray-100"
        resizeMode="contain"
      />

      {/* Product Info */}
      <View className="p-4">
        <Text className="text-2xl font-bold text-gray-900 mb-1">{product.name}</Text>
        <Text className="text-sm text-green-700 mb-3">by {product.farmer}</Text>

        {/* Price & Discount */}
        <View className="flex-row items-center space-x-2 mb-2">
          <Text className="text-xl font-bold text-green-700">₹{product.price}</Text>
          {product.originalPrice && (
            <Text className="text-base line-through text-gray-400">
              ₹{product.originalPrice}
            </Text>
          )}
          {product.discount && (
            <Text className="text-base text-red-500 font-bold">{product.discount}% OFF</Text>
          )}
        </View>

        {/* Rating */}
        <View className="flex-row items-center mb-4">
          <Star size={16} color="#facc15" fill="#facc15" />
          <Text className="ml-1 text-yellow-700 font-semibold">{product.rating}</Text>
        </View>

        {/* Description */}
        <Text className="text-base text-gray-600 mb-6 leading-relaxed">
          {product.description || 'This is a high-quality, organic farm product grown naturally by top farmers in your region.'}
        </Text>

        {/* Add to Cart Button */}
        <TouchableOpacity
          onPress={handleAddToCart}
          className="bg-green-600 py-4 rounded-2xl items-center mb-3"
        >
          <Text className="text-white text-base font-semibold">
            {added ? 'Added to Cart' : 'Add to Cart'}
          </Text>
        </TouchableOpacity>

        {/* Buy Now Button */}
        <TouchableOpacity
          onPress={handleBuyNow}
          className="bg-orange-500 py-4 rounded-2xl items-center"
        >
          <Text className="text-white text-base font-semibold">Buy Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
