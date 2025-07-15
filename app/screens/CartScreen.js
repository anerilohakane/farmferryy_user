import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { ArrowLeft, Minus, Plus, Heart, ChevronRight, Tag, MapPin, Clock, Star, Trash2 } from 'lucide-react-native';
import { useAppContext } from '../context/AppContext';

export default function CartScreen({ navigation }) {
  const { cartItems, updateCartItems } = useAppContext();

  const recommendedProducts = [
    {
      id: 101,
      name: 'Organic Bananas',
      price: 35,
      originalPrice: 45,
      weight: '1 kg',
      image: { uri: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=200&h=200&fit=crop' },
      discount: '22%',
      rating: 4.3,
      deliveryTime: '30 min'
    },
    {
      id: 102,
      name: 'Fresh Strawberries',
      price: 120,
      originalPrice: 150,
      weight: '500 g',
      image: { uri: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=200&h=200&fit=crop' },
      discount: '20%',
      rating: 4.5,
      deliveryTime: '45 min'
    },
    {
      id: 103,
      name: 'Avocados',
      price: 90,
      originalPrice: 120,
      weight: '3 pcs',
      image: { uri: 'https://foodcare.in/cdn/shop/files/gps_generated_88352e72-bd4f-40c1-90b5-d33093d38d3e.png?v=1751017345&width=1445' },
      discount: '25%',
      rating: 4.6,
      deliveryTime: '40 min'
    },
    {
      id: 104,
      name: 'Cherry Tomatoes',
      price: 60,
      originalPrice: 80,
      weight: '250 g',
      image: { uri: 'https://images.immediate.co.uk/production/volatile/sites/10/2018/02/138d469d-4399-4a4d-b3f5-a6d40d1139d1-122e378.jpg' },
      discount: '25%',
      rating: 4.4,
      deliveryTime: '35 min'
    },
    {
      id: 105,
      name: 'Green Grapes',
      price: 110,
      originalPrice: 140,
      weight: '500 g',
      image: { uri: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=200&h=200&fit=crop' },
      discount: '21%',
      rating: 4.7,
      deliveryTime: '50 min'
    }

    
  ];

  const frequentlyBoughtProducts = [
    {
      id: 201,
      name: 'Fresh Milk',
      price: 50,
      originalPrice: 60,
      weight: '1 L',
      image: { uri: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=200&h=200&fit=crop' },
      discount: '17%',
      rating: 4.2,
      deliveryTime: '20 min'
    },
    {
      id: 202,
      name: 'Farm Eggs',
      price: 80,
      originalPrice: 90,
      weight: '6 pcs',
      image: { uri: 'https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=200&h=200&fit=crop' },
      discount: '11%',
      rating: 4.4,
      deliveryTime: '25 min'
    },
    {
      id: 203,
      name: 'Whole Wheat Bread',
      price: 45,
      originalPrice: 55,
      weight: '400 g',
      image: { uri: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200&h=200&fit=crop' },
      discount: '18%',
      rating: 4.3,
      deliveryTime: '30 min'
    },
    {
      id: 204,
      name: 'Greek Yogurt',
      price: 65,
      originalPrice: 75,
      weight: '200 g',
      image: { uri: 'https://www.mygreekdish.com/wp-content/uploads/2023/08/Greek-Yogurt-recipe-How-to-make-homemade-Greek-Yogurt.jpeg' },
      discount: '13%',
      rating: 4.5,
      deliveryTime: '25 min'
    },
    {
      id: 205,
      name: 'Almond Butter',
      price: 220,
      originalPrice: 250,
      weight: '300 g',
      image: { uri: 'https://images.unsplash.com/photo-1612528443702-f6741f70a049?w=200&h=200&fit=crop' },
      discount: '12%',
      rating: 4.8,
      deliveryTime: '45 min'
    }

  ];

  const increaseQty = (id) => {
    const updated = cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCartItems(updated);
  };

  const decreaseQty = (id) => {
    const updated = cartItems.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    updateCartItems(updated);
  };

  const removeFromCart = (id) => {
    const updated = cartItems.filter(item => item.id !== id);
    updateCartItems(updated);
  };

  const addToCart = (product) => {
    const exists = cartItems.find(item => item.id === product.id);
    if (exists) {
      increaseQty(product.id);
    } else {
      updateCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const getSubtotal = () =>
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const getShipping = () => 4.0;
  const getTotal = () => getSubtotal() + getShipping();

  const renderRecommendedProduct = (product) => (
    <View
      key={product.id}
      className="bg-white rounded-2xl p-3 mr-3 shadow-sm border border-green-100"
      style={{ width: 160 }}
    >
      <View className="relative w-full h-24 bg-green-50 rounded-xl mb-3 overflow-hidden">
        <Image
          source={product.image}
          className="w-full h-full"
          resizeMode="cover"
        />
        <View className="absolute top-1 left-1 bg-green-500 px-2 py-1 rounded-full">
          <Text className="text-white text-xs font-medium">{product.discount}</Text>
        </View>
        <TouchableOpacity className="absolute top-1 right-1 w-6 h-6 bg-white rounded-full items-center justify-center shadow-sm">
          <Heart size={12} color="#059669" />
        </TouchableOpacity>
      </View>

      <Text className="text-sm font-semibold text-green-800 mb-1" numberOfLines={2}>{product.name}</Text>
      <Text className="text-xs text-green-600 mb-2">{product.weight}</Text>

      <View className="flex-row items-center mb-2">
        <Star size={12} color="#F59E0B" fill="#F59E0B" />
        <Text className="text-xs text-gray-600 ml-1">{product.rating}</Text>
        <View className="flex-row items-center ml-2">
          <Clock size={10} color="#059669" />
          <Text className="text-xs text-green-600 ml-1">{product.deliveryTime}</Text>
        </View>
      </View>

      <View className="flex-row items-center justify-between">
        <View>
          <Text className="text-sm font-bold text-green-800">₹{product.price.toFixed(2)}</Text>
          <Text className="text-xs text-gray-400 line-through">₹{product.originalPrice.toFixed(2)}</Text>
        </View>
        <TouchableOpacity
          className="bg-green-500 w-8 h-8 rounded-full items-center justify-center"
          onPress={() => addToCart(product)}
        >
          <Plus size={14} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-white px-4 py-4 flex-row items-center justify-between border-b border-green-100">
        <View className="flex-row items-center">
          <TouchableOpacity onPress={() => navigation.goBack()} className="mr-4">
            <ArrowLeft size={24} color="#059669" />
          </TouchableOpacity>
          <Text className="text-lg font-semibold text-black-800">Cart</Text>
          {cartItems.length > 0 && (
            <Text className="text-sm text-green-600 ml-2">
              {cartItems.length} item{cartItems.length > 1 ? 's' : ''}
            </Text>
          )}
        </View>
        <TouchableOpacity>
          <Text className="text-black-600 text-2xl">🔍</Text>
        </TouchableOpacity>
      </View>

      {/* Location */}
      <View className="bg-white px-4 py-3 border-b border-green-100">
        <TouchableOpacity className="flex-row items-center">
          <MapPin size={16} color="#059669" />
          <Text className="text-sm text-black-700 ml-2">Deliver to </Text>
          <Text className="text-sm font-semibold text-black-800">Selected Location</Text>
          <ChevronRight size={14} color="#059669" className="ml-1" />
        </TouchableOpacity>
        <Text className="text-xs text-grey-600 mt-1 ml-6">Mokarwadi, Pune - 411046</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        {cartItems.length === 0 ? (
          <View className="flex-1 items-center justify-center mt-20">
            <View className="w-20 h-20 bg-green-100 rounded-full items-center justify-center mb-4">
              <Text className="text-green-400 text-2xl">🛒</Text>
            </View>
            <Text className="text-green-600 text-lg">Your cart is empty</Text>
            <Text className="text-green-500 text-sm mt-2">Add some fresh items to get started!</Text>
          </View>
        ) : (
          <>
            {/* Delivery Time */}
            <View className="bg-white mx-4 mt-4 rounded-2xl p-4 border border-green-100">
              <View className="flex-row items-center justify-between">
                <View>
                  <Text className="text-lg font-semibold text-grey-800">Get it in 10 mins</Text>
                  <Text className="text-sm text-green-600">
                    {cartItems.length} Product{cartItems.length > 1 ? 's' : ''}
                  </Text>
                </View>
                <View className="bg-green-100 px-3 py-1 rounded-full">
                  <Text className="text-black-700 text-sm font-medium">Express</Text>
                </View>
              </View>
            </View>

            {/* Cart Items */}
            <View className="px-4 pt-4">
              {cartItems.map((item) => (
                <View key={item.id} className="bg-white rounded-2xl mb-4 p-4 shadow-sm border border-green-100">
                  <View className="flex-row items-start">
                    <View className="w-24 h-24 bg-green-50 border border-green-200 rounded-xl items-center justify-center mr-3 self-center overflow-hidden">
                      <Image 
                        source={{ uri: item.image }} 
                        className="w-full h-full" 
                        resizeMode="contain"
                      />
                    </View>
                    <View className="flex-1">
                      <View className="flex-row justify-between items-start mb-1">
                        <Text className="font-semibold text-base text-black-800 flex-1">{item.name}</Text>
                        <TouchableOpacity onPress={() => removeFromCart(item.id)} className="ml-2">
                          <Trash2 size={18} color="red" />
                        </TouchableOpacity>
                      </View>
                      <Text className="text-sm text-green-600 mb-1">{item.unit || '500 g'}</Text>
                      <View className="flex-row items-center mb-3">
                        <Text className="text-lg font-bold text-green-800">₹{(item.price * item.quantity).toFixed(2)}</Text>
                        {item.originalPrice && (
                          <Text className="text-sm text-gray-400 line-through ml-2">₹{item.originalPrice}</Text>
                        )}
                      </View>
                      <View className="flex-row items-center justify-between">
                        <View className="flex-row items-center bg-green-50 rounded-full px-1 py-1">
                          <TouchableOpacity 
                            onPress={() => decreaseQty(item.id)} 
                            className="w-8 h-8 rounded-full bg-white items-center justify-center shadow-sm border border-green-100"
                          >
                            <Minus size={14} color="#059669" />
                          </TouchableOpacity>
                          <Text className="mx-4 font-medium text-green-700 min-w-[20px] text-center">{item.quantity}</Text>
                          <TouchableOpacity 
                            onPress={() => increaseQty(item.id)} 
                            className="w-8 h-8 rounded-full bg-white items-center justify-center shadow-sm border border-green-100"
                          >
                            <Plus size={14} color="#059669" />
                          </TouchableOpacity>
                        </View>
                        <View className="flex-row items-center bg-green-100 px-3 py-1 rounded-full">
                          <Text className="text-green-700 text-xs">✓</Text>
                          <Text className="text-grey-700 text-xs ml-1">Har Din Sasta</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity className="flex-row items-center mt-3 pt-3 border-t border-green-100">
                    <Heart size={16} color="#059669" />
                    <Text className="text-sm text-grey-600 ml-2">Move to wishlist</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>

            {/* Recommended Products */}
            <View className="mt-6">
              <View className="flex-row items-center justify-between px-4 mb-4">
                <Text className="text-lg font-semibold text-grey-900">Fresh picks for you</Text>
                <ChevronRight size={20} color="#059669" />
              </View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-4">
                {recommendedProducts.map(renderRecommendedProduct)}
              </ScrollView>
            </View>

            {/* Frequently Bought Together */}
            <View className="mt-6">
              <View className="flex-row items-center justify-between px-4 mb-4">
                <Text className="text-lg font-semibold text-grey-900">Frequently bought together</Text>
                <ChevronRight size={20} color="#059669" />
              </View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-4">
                {frequentlyBoughtProducts.map(renderRecommendedProduct)}
              </ScrollView>
            </View>

            {/* Promo Code */}
            <View className="bg-white mx-4 mt-6 rounded-2xl p-4 shadow-sm border border-green-100">
              <TouchableOpacity className="flex-row items-center justify-between">
                <View className="flex-row items-center">
                  <Tag size={20} color="#059669" />
                  <Text className="text-base text-grey-700 ml-3">Enter your promo code</Text>
                </View>
                <ChevronRight size={20} color="#059669" />
              </TouchableOpacity>
            </View>

            <View className="h-32" />
          </>
        )}
      </ScrollView>

      {/* Checkout */}
      {cartItems.length > 0 && (
        <View className="bg-white border-t border-green-100">
          <View className="px-4 py-3 border-b border-green-100">
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-sm text-green-700">Subtotal</Text>
              <Text className="text-sm font-medium text-green-800">₹{getSubtotal().toFixed(2)}</Text>
            </View>
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-sm text-green-700">Delivery</Text>
              <Text className="text-sm font-medium text-green-800">₹{getShipping().toFixed(2)}</Text>
            </View>
            <View className="flex-row justify-between items-center">
              <Text className="text-base font-semibold text-black-800">Total: ₹{getTotal().toFixed(2)}</Text>
              <View className="flex-row items-center">
                <Tag size={14} color="#059669" />
                <Text className="text-sm text-black-600 ml-1">Saved ₹{(getSubtotal() * 0.1).toFixed(1)}</Text>
              </View>
            </View>
          </View>
          <View className="px-4 py-4">
            <TouchableOpacity
              className="bg-green-500 rounded-2xl py-4 items-center shadow-sm"
              onPress={() => navigation.navigate('PlaceOrder')}
            >
              <Text className="text-white font-semibold text-base">Proceed to Checkout</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}