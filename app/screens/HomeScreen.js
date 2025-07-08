import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext'; // already exists

import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';
import {
  MapPin, Plus, Heart, ShoppingCart, Search, Filter, Star,
  Bell, User, Package, Grid3x3, ChevronRight
} from 'lucide-react-native';
import { useAppContext } from '../context/AppContext'; // ✅ import context

const FarmFerryHome = () => {
  const { cartCount, setCartCount, wishlistCount, setWishlistCount } = useAppContext(); // ✅ use context

  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const categories = [
    { name: 'Vegetables', image: require('../../assets/images/vegetables.jpg') },
    { name: 'Fruits', image: require('../../assets/images/fruits.jpg') },
    { name: 'Grains', image: require('../../assets/images/grains.jpg') },
    { name: 'Dry Fruits', image: require('../../assets/images/dryfruits.jpg') },
  ];

  const farmers = [
    {
      name: 'Rajesh Kumar',
      farm: 'Green Valley Farm',
      rating: 4.8,
      image: require('../../assets/images/farmer1.png'),
      location: 'Nashik, Maharashtra',
      verified: true,
    },
    {
      name: 'Priya Sharma',
      farm: 'Organic Fields',
      rating: 4.9,
      image: require('../../assets/images/farmer1.png'),
      location: 'Pune, Maharashtra',
      verified: true,
    },
    {
      name: 'Suresh Patel',
      farm: 'Fresh Harvest Co',
      rating: 4.7,
      image: require('../../assets/images/farmer1.png'),
      location: 'Nagpur, Maharashtra',
      verified: true,
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Organic Tomatoes',
      price: 45,
      originalPrice: 60,
      unit: 'kg',
      image: require('../../assets/images/tomato.png'),
      discount: 25,
      rating: 4.5,
      farmer: 'Rajesh Kumar',
      inStock: true,
    },
    {
      id: 2,
      name: 'Fresh Apples',
      price: 120,
      originalPrice: 150,
      unit: 'kg',
      image: require('../../assets/images/apple.png'),
      discount: 20,
      rating: 4.3,
      farmer: 'Priya Sharma',
      inStock: true,
    },
    {
      id: 3,
      name: 'Brown Rice',
      price: 90,
      originalPrice: 110,
      unit: 'kg',
      image: require('../../assets/images/grains.jpg'),
      discount: 18,
      rating: 4.6,
      farmer: 'Suresh Patel',
      inStock: true,
    },
    {
      id: 4,
      name: 'Organic Tomatoes',
      price: 45,
      originalPrice: 60,
      unit: 'kg',
      image: require('../../assets/images/tomato.png'),
      discount: 25,
      rating: 4.5,
      farmer: 'Rajesh Kumar',
      inStock: true,
    },
  ];

  const toggleWishlist = (id) => {
    const updated = wishlist.includes(id)
      ? wishlist.filter((x) => x !== id)
      : [...wishlist, id];
    setWishlist(updated);
    setWishlistCount(updated.length); // ✅ update global count
  };

  const addToCart = (id) => {
    const updated = [...cart, id];
    setCart(updated);
    setCartCount(updated.length); // ✅ update global count
  };

  const isInWishlist = (id) => wishlist.includes(id);

  return (
    <View className="flex-1 bg-green-50">
      {/* Top AppBar */}
      <View className="bg-white px-4 py-4 flex-row justify-between items-center border-b border-green-200">
        <View className="flex-row items-center space-x-2">
          <View className="w-8 h-8 bg-green-500 rounded-full items-center justify-center">
            <Text className="text-white font-bold">F</Text>
          </View>
          <View>
            <Text className="text-lg font-bold text-green-800">FarmFerry</Text>
            <View className="flex-row items-center space-x-1">
              <MapPin size={12} color="#15803d" />
              <Text className="text-xs text-green-700">Nagpur, Maharashtra</Text>
            </View>
          </View>
        </View>
        <View className="flex-row items-center space-x-3">
          <View className="relative">
            <Bell size={24} color="#15803d" />
            <View className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-red-500" />
          </View>
          <View className="w-8 h-8 rounded-full bg-green-100 items-center justify-center">
            <User size={20} color="#15803d" />
          </View>
        </View>
      </View>

      {/* Search */}
      <View className="px-4 py-2">
        <View className="bg-white flex-row items-center px-4 py-3 rounded-2xl border border-green-100">
          <Search size={20} color="#22c55e" />
          <TextInput
            placeholder="Search fresh produce, grains..."
            className="flex-1 ml-2 text-gray-700"
            placeholderTextColor="#94a3b8"
          />
          <Filter size={20} color="#94a3b8" />
        </View>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 90 }}>
        {/* Categories */}
        <View className="px-4 mt-2">
          <Text className="text-lg font-bold text-gray-800 mb-2">Shop by Category</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((cat, idx) => (
              <View
                key={idx}
                className="bg-green-100 border border-green-200 rounded-2xl px-4 py-3 mr-3 items-center"
              >
                <Image source={cat.image} className="w-12 h-12 rounded-full" />
                <Text className="text-xs mt-1 text-gray-800 font-semibold">
                  {cat.name}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Banner */}
        <View className="px-4 mt-4">
          <View className="bg-green-500 rounded-2xl p-5">
            <Text className="text-white text-xl font-bold mb-1">20% OFF</Text>
            <Text className="text-white text-lg font-semibold mb-1">Fresh Tomatoes</Text>
            <Text className="text-green-100 text-sm mb-2">Limited time offer - Direct from farm</Text>
            <TouchableOpacity className="bg-white rounded-xl px-4 py-2 mt-2">
              <Text className="text-green-600 font-semibold">Shop Now</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Farmers */}
        <View className="px-4 mt-4">
          <View className="flex-row justify-between items-center mb-2">
            <Text className="text-lg font-bold text-gray-800">Popular Farmers</Text>
            <TouchableOpacity className="flex-row items-center">
              <Text className="text-green-600 font-semibold text-sm">View All</Text>
              <ChevronRight size={14} color="#15803d" />
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {farmers.map((farmer, idx) => (
              <View
                key={idx}
                className="bg-white border border-green-100 rounded-2xl p-3 mr-3 w-40"
              >
                <Image
                  source={farmer.image}
                  className="w-16 h-16 rounded-full self-center mb-2"
                  resizeMode="contain"
                />
                <Text className="text-sm font-semibold text-center">{farmer.name}</Text>
                <Text className="text-xs text-gray-500 text-center">{farmer.farm}</Text>
                <Text className="text-xs text-green-700 text-center">{farmer.location}</Text>
                <View className="flex-row justify-center mt-1">
                  <Star size={12} color="#facc15" fill="#facc15" />
                  <Text className="text-xs font-semibold text-yellow-700 ml-1">
                    {farmer.rating}
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Featured Products */}
        <View className="px-4 mt-4">
          <Text className="text-lg font-bold text-gray-800 mb-2">Featured Products</Text>
          <View className="flex-row flex-wrap justify-between">
            {featuredProducts.map((product) => (
              <View
                key={product.id}
                className="bg-white w-[48%] rounded-2xl mb-4 border border-green-100"
              >
                <View className="relative p-3 items-center">
                  {product.discount && (
                    <View className="absolute top-2 left-2 bg-red-500 px-2 py-1 rounded-md">
                      <Text className="text-white text-xs font-bold">
                        {product.discount}% OFF
                      </Text>
                    </View>
                  )}
                  <TouchableOpacity
                    onPress={() => toggleWishlist(product.id)}
                    className="absolute top-2 right-2"
                  >
                    <Heart
                      size={20}
                      color={isInWishlist(product.id) ? '#ef4444' : '#9ca3af'}
                      fill={isInWishlist(product.id) ? '#ef4444' : 'none'}
                    />
                  </TouchableOpacity>
                  <Image source={product.image} className="h-20 w-20" resizeMode="contain" />
                </View>
                <View className="px-3 pb-3">
                  <Text className="font-semibold text-sm text-gray-800">{product.name}</Text>
                  <Text className="text-xs text-green-600 mb-1">by {product.farmer}</Text>
                  <View className="flex-row justify-between items-center mb-2">
                    <View className="flex-row items-center space-x-1">
                      <Text className="text-green-600 font-bold">₹{product.price}</Text>
                      <Text className="text-xs text-gray-400 line-through">
                        ₹{product.originalPrice}
                      </Text>
                    </View>
                    <View className="flex-row items-center bg-yellow-50 px-2 py-1 rounded-full">
                      <Star size={10} color="#facc15" fill="#facc15" />
                      <Text className="text-xs ml-1 text-yellow-700 font-semibold">
                        {product.rating}
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    onPress={() => addToCart(product.id)}
                    className="bg-green-500 rounded-xl py-2 flex-row items-center justify-center"
                  >
                    <Plus size={16} color="#fff" />
                    <Text className="text-white font-semibold ml-1">Add to Cart</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default FarmFerryHome;
