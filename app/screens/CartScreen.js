import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { ArrowLeft, Minus, Plus, Heart, ChevronRight, Tag, MapPin, Clock, Star } from 'lucide-react-native';
import { useAppContext } from '../context/AppContext';

export default function CartScreen({ navigation }) {
  const { cartItems, updateCartItems } = useAppContext();

  // Sample recommended products
  const recommendedProducts = [
    {
      id: 'r1',
      name: 'Fresh Tomatoes',
      price: 25.0,
      originalPrice: 30.0,
      image: require('../../assets/images/tomato.png'),
      weight: '1 kg',
      discount: '17% OFF',
      rating: 4.5,
      deliveryTime: '10 mins'
    },
    {
      id: 'r2',
      name: 'Organic Spinach',
      price: 18.0,
      originalPrice: 22.0,
      image: require('../../assets/images/spinach.png'),
      weight: '500 g',
      discount: '18% OFF',
      rating: 4.3,
      deliveryTime: '10 mins'
    },
    {
      id: 'r3',
      name: 'Red Onions',
      price: 15.0,
      originalPrice: 20.0,
      image: require('../../assets/images/onion.jpg'),
      weight: '1 kg',
      discount: '25% OFF',
      rating: 4.2,
      deliveryTime: '10 mins'
    },
    {
      id: 'r4',
      name: 'Fresh Coriander',
      price: 8.0,
      originalPrice: 12.0,
      image: require('../../assets/images/coriander.jpg'),
      weight: '100 g',
      discount: '33% OFF',
      rating: 4.4,
      deliveryTime: '10 mins'
    }
  ];

  const frequentlyBoughtProducts = [
    {
      id: 'f1',
      name: 'Basmati Rice',
      price: 120.0,
      originalPrice: 140.0,
      image: require('../../assets/images/basmati.jpg'),
      weight: '1 kg',
      discount: '14% OFF',
      rating: 4.6,
      deliveryTime: '15 mins'
    },
    {
      id: 'f2',
      name: 'Turmeric Powder',
      price: 45.0,
      originalPrice: 55.0,
      image: require('../../assets/images/turmericpowder.jpg'),
      weight: '200 g',
      discount: '18% OFF',
      rating: 4.5,
      deliveryTime: '15 mins'
    },
    {
      id: 'f3',
      name: 'Garam Masala',
      price: 35.0,
      originalPrice: 45.0,
      image: require('../../assets/images/garammasala.jpg'),
      weight: '100 g',
      discount: '22% OFF',
      rating: 4.4,
      deliveryTime: '15 mins'
    }
  ];

  const increaseQty = (id) => {
    const updated = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCartItems(updated);
  };

  const decreaseQty = (id) => {
    const updated = cartItems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    updateCartItems(updated);
  };

  const removeFromCart = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    updateCartItems(updated);
  };

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      increaseQty(product.id);
    } else {
      const newItem = {
        ...product,
        quantity: 1
      };
      updateCartItems([...cartItems, newItem]);
    }
  };

  const getSubtotal = () =>
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const getShipping = () => 4.00;
  const getTotal = () => getSubtotal() + getShipping();

  const renderRecommendedProduct = (product) => (
    <TouchableOpacity
      key={product.id}
      className="bg-white rounded-2xl p-3 mr-3 shadow-sm border border-green-100"
      style={{ width: 160 }}
      onPress={() => addToCart(product)}
    >
      {/* Image Container with Overlays */}
    <View className="relative w-full h-24 bg-green-50 rounded-xl mb-3 overflow-hidden">
  <Image
    source={require('../../assets/images/dragonfruit.png')}
    className="w-full h-full"
    resizeMode="cover" // Or 'contain' if you prefer full visibility
  />
    {/* Discount Badge */}
   <View className="absolute top-1 left-1 bg-green-500 px-1 py-1 rounded-full ">
    <Text className="text-white text-xs font-medium">{product.discount}</Text>
   </View>

  {/* Wishlist Heart Icon */}
  <TouchableOpacity className="absolute top-1 right-1 w-6 h-6 bg-white rounded-full items-center justify-center shadow-sm">
    <Heart size={12} color="#059669" />
  </TouchableOpacity>
  </View>
      
      <Text className="text-sm font-semibold text-green-800 mb-1" numberOfLines={2}>
        {product.name}
      </Text>
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
        <TouchableOpacity className="bg-green-500 w-8 h-8 rounded-full items-center justify-center">
          <Plus size={14} color="white" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-white px-4 py-4 flex-row items-center justify-between border-b border-green-100">
        <View className="flex-row items-center">
          <TouchableOpacity 
            onPress={() => navigation.goBack()}
            className="mr-4"
          >
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

      {/* Delivery Location */}
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
            {/* Delivery Time Banner */}
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
                <View
                  key={item.id}
                  className="bg-white rounded-2xl mb-4 p-4 shadow-sm border border-green-100"
                >
                  <View className="flex-row items-start">
                    {/* Product Image */}
                    <View className="w-24 h-24 bg-green-50 border border-green-200  rounded-xl items-center justify-center mr-3 self-center">
                      <Image 
                        source={item.image} 
                        className="w-20 h-20" 
                        resizeMode="contain" 
                      />
                     
                    </View>

                    {/* Product Details */}
                    <View className="flex-1">
                      <View className="flex-row justify-between items-start mb-1">
                        <Text className="font-semibold text-base text-black-800 flex-1">
                          {item.name}
                        </Text>
                        <TouchableOpacity 
                          onPress={() => removeFromCart(item.id)}
                          className="ml-2"
                        >
                          <Text className="text-green-400 text-lg">×</Text>
                        </TouchableOpacity>
                      </View>

                      <Text className="text-sm text-green-600 mb-1">500 g</Text>
                      
                      <View className="flex-row items-center mb-3">
                        <Text className="text-lg font-bold text-green-800">
                          ₹{(item.price * item.quantity).toFixed(2)}
                        </Text>
                        <Text className="text-sm text-gray-400 line-through ml-2">
                          ₹{((item.price * 1.2) * item.quantity).toFixed(2)}
                        </Text>
                      </View>

                      {/* Quantity Controls */}
                      <View className="flex-row items-center justify-between">
                        <View className="flex-row items-center bg-green-50 rounded-full px-1 py-1">
                          <TouchableOpacity
                            className="w-8 h-8 rounded-full bg-white items-center justify-center shadow-sm border border-green-100"
                            onPress={() => decreaseQty(item.id)}
                          >
                            <Minus size={14} color="#059669" />
                          </TouchableOpacity>
                          <Text className="mx-4 font-medium text-green-700 min-w-[20px] text-center">
                            {item.quantity}
                          </Text>
                          <TouchableOpacity
                            className="w-8 h-8 rounded-full bg-white items-center justify-center shadow-sm border border-green-100"
                            onPress={() => increaseQty(item.id)}
                          >
                            <Plus size={14} color="#059669" />
                          </TouchableOpacity>
                        </View>
                        
                        <View className="flex-row items-center bg-green-100 px-3 py-1 rounded-full">
                          <Text className="text-green-700 text-xs">✓</Text>
                          <Text className="text-grey-700 text-xs ml-1">Har Din Sastal</Text>
                        </View>
                      </View>
                    </View>
                  </View>

                  {/* Move to Wishlist */}
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
                <TouchableOpacity>
                  <ChevronRight size={20} color="#059669" />
                </TouchableOpacity>
              </View>
              
              <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false}
                className="px-4"
              >
                {recommendedProducts.map((product) => renderRecommendedProduct(product))}
              </ScrollView>
            </View>

            {/* Frequently Bought Together */}
            <View className="mt-6">
              <View className="flex-row items-center justify-between px-4 mb-4">
                <Text className="text-lg font-semibold text-grey-900">Frequently bought together</Text>
                <TouchableOpacity>
                  <ChevronRight size={20} color="#059669" />
                </TouchableOpacity>
              </View>
              
              <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false}
                className="px-4"
              >
                {frequentlyBoughtProducts.map((product) => renderRecommendedProduct(product))}
              </ScrollView>
            </View>

            {/* Promo Code Section */}
            <View className="bg-white mx-4 mt-6 rounded-2xl p-4 shadow-sm border border-green-100">
              <TouchableOpacity className="flex-row items-center justify-between">
                <View className="flex-row items-center">
                  <Tag size={20} color="#059669" />
                  <Text className="text-base text-grey-700 ml-3">Enter your promo code</Text>
                </View>
                <ChevronRight size={20} color="#059669" />
              </TouchableOpacity>
            </View>

            {/* Bottom spacing */}
            <View className="h-32" />
          </>
        )}
      </ScrollView>

      {/* Bottom Summary & Checkout */}
      {cartItems.length > 0 && (
        <View className="bg-white border-t border-green-100">
          {/* Order Summary */}
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
          
          {/* Checkout Button */}
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