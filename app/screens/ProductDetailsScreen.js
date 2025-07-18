import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { ArrowLeft, Plus, Minus, Heart, Star, Share2, ChevronRight } from 'lucide-react-native';
import { useAppContext } from '../context/AppContext';
import { farmers } from '../components/ui/farmers';
import { LinearGradient } from 'expo-linear-gradient';

const ProductDetailsScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const { cartItems, wishlistItems, updateCartItems, updateWishlistItems } = useAppContext();

  const isInWishlist = wishlistItems.some(item => item.id === product.id);
  const isInCart = cartItems.some(item => item.id === product.id);

  const toggleWishlist = () => {
    const newWishlist = isInWishlist
      ? wishlistItems.filter(item => item.id !== product.id)
      : [...wishlistItems, product];
    updateWishlistItems(newWishlist);
  };

  const handleAddToCart = () => {
    if (!isInCart) {
      updateCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleBuyNow = () => {
    if (!isInCart) {
      updateCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    navigation.navigate('Checkout', { 
      items: isInCart ? cartItems : [...cartItems, { ...product, quantity: 1 }]
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-white px-4 py-4 flex-row items-center justify-between border-b border-gray-200">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft size={24} color="#059669" />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleWishlist}>
          <Heart
            size={24}
            color={isInWishlist ? '#ef4444' : '#9ca3af'}
            fill={isInWishlist ? '#ef4444' : 'none'}
          />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        {/* Product Image */}
        <View className="w-full bg-gray-50 items-center justify-center py-6">
          <View
            className="bg-white rounded-3xl shadow-lg"
            style={{
              elevation: 8,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 6 },
              shadowOpacity: 0.15,
              shadowRadius: 12,
              transform: [{ translateY: -16 }],
            }}
          >
            <Image
              source={{ uri: product.image }}
              className="w-64 h-64 rounded-2xl"
              resizeMode="contain"
            />
          </View>
        </View>


        {/* Product Info */}
        <View className="bg-white p-6 mt-4 rounded-t-3xl shadow-sm">
          <View className="flex-row justify-between items-start mb-2">
            <Text className="text-2xl font-bold text-gray-900">{product.name}</Text>
            {product.discount && (
              <View className="bg-red-500 px-3 py-1 rounded-full">
                <Text className="text-white text-sm font-medium">{product.discount}% OFF</Text>
              </View>
            )}
          </View>

          <Text className="text-sm text-green-600 mb-4">by {product.farmer}</Text>

          <View className="flex-row items-center mb-4">
            <View className="flex-row items-center bg-amber-50 rounded-lg px-3 py-1 border border-amber-200 mr-4">
              <Star width={14} height={14} fill="#facc15" color="#facc15" />
              <Text className="text-sm text-amber-800 ml-1">{product.rating} ({product.reviews} reviews)</Text>
            </View>
            <Text className="text-sm text-gray-500">{product.unit}</Text>
          </View>

          <View className="flex-row items-center mb-6">
            <Text className="text-2xl font-bold text-green-600">₹{product.price}</Text>
            {product.originalPrice && (
              <Text className="text-base text-gray-400 line-through ml-3">₹{product.originalPrice}</Text>
            )}
          </View>

          {/* Product Description */}
          <View className="mb-8">
            <Text className="text-lg font-semibold text-gray-800 mb-3">Description</Text>
            <Text className="text-gray-600">
              Fresh, organic {product.name.toLowerCase()} directly from {product.farmer}'s farm. 
              Grown with natural methods and free from harmful pesticides. 
              Perfect for {product.name.toLowerCase().includes('rice') ? 'your daily meals' : 'salads, cooking, or healthy snacks'}.
            </Text>
          </View>

          {/* Nutritional Info */}
          <View className="mb-8">
            <Text className="text-lg font-semibold text-gray-800 mb-3">Nutritional Information</Text>
            <View className="bg-gray-50 p-4 rounded-lg">
              <View className="flex-row justify-between py-2 border-b border-gray-200">
                <Text className="text-gray-600">Calories</Text>
                <Text className="text-gray-800 font-medium">50 kcal</Text>
              </View>
              <View className="flex-row justify-between py-2 border-b border-gray-200">
                <Text className="text-gray-600">Protein</Text>
                <Text className="text-gray-800 font-medium">2g</Text>
              </View>
              <View className="flex-row justify-between py-2 border-b border-gray-200">
                <Text className="text-gray-600">Carbs</Text>
                <Text className="text-gray-800 font-medium">10g</Text>
              </View>
              <View className="flex-row justify-between py-2">
                <Text className="text-gray-600">Fiber</Text>
                <Text className="text-gray-800 font-medium">3g</Text>
              </View>
            </View>
          </View>

          {/* Farmer Info */}
          <View className="mb-8">
            <Text className="text-lg font-semibold text-gray-800 mb-3">About the Farmer</Text>
            <View className="flex-row items-center bg-green-50 p-4 rounded-lg">
              <Image
                source={{ uri: farmers.find(f => f.name === product.farmer)?.image || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop' }}
                className="w-12 h-12 rounded-full mr-3"
              />
              <View>
                <Text className="text-gray-800 font-medium">{product.farmer}</Text>
                <Text className="text-gray-500 text-sm">{farmers.find(f => f.name === product.farmer)?.farm || 'Organic Farm'}</Text>
                <Text className="text-green-600 text-sm">{farmers.find(f => f.name === product.farmer)?.location || 'Maharashtra'}</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Add to Cart Button */}
      <View className="bg-white border-t border-gray-200 p-4">
        <TouchableOpacity
          className={`flex-row justify-center items-center rounded-xl py-4 shadow-sm ${isInCart ? 'bg-gray-200' : 'bg-green-500'}`}
          onPress={handleAddToCart}
          disabled={isInCart}
        >
          {isInCart ? (
            <Text className="text-gray-600 text-lg font-semibold">Added to Cart</Text>
          ) : (
            <>
              <Plus width={20} height={20} color="#fff" />
              <Text className="text-white text-lg font-semibold ml-2">Add to Cart - ₹{product.price}</Text>
            </>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetailsScreen;