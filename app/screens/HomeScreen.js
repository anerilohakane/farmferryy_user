import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, View, Text, TextInput, ScrollView, TouchableOpacity, Image, Animated, Dimensions, ImageBackground, } from 'react-native';
import { MapPin, Plus, Heart, Search, Filter, Star, Bell, User, ChevronRight, ArrowRight, Clock, Truck, Leaf, Percent, } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { useAppContext } from '../context/AppContext';
import { SCREEN_NAMES } from '../types';
import { BlurView } from 'expo-blur';

const { width } = Dimensions.get('window');
const BANNER_WIDTH = width - 32;

const FarmFerryHome = () => {
  const navigation = useNavigation();
  const {
    cartItems,
    wishlistItems,
    addToCart,
    addToWishlist,
    removeFromWishlist,
  } = useAppContext();

  const [currentBanner, setCurrentBanner] = useState(0);
  const scrollViewRef = useRef(null);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const categories = [
    { name: 'Vegetables', image: require('../../assets/images/vegetables.jpg') },
    { name: 'Fruits', image: require('../../assets/images/fruits.jpg') },
    { name: 'Grains', image: require('../../assets/images/grains.jpg') },
    { name: 'Dry Fruits', image: require('../../assets/images/dryfruits.jpg') },
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

  const banners = [
    {
      id: 1,
      title: 'Free Delivery',
      subtitle: 'Free on order 500',
      description: 'Limited time offer - Direct from farm',
      icon: <Percent size={24} color="#fff" />,
      tag: 'Limited Time',
      image: require('../../assets/images/banner2.jpg'),
    },
    {
      id: 2,
      title: '20% OFF',
      subtitle: 'Fresh Tomatoes',
      description: 'Get fresh produce delivered to your doorstep',
      icon: <Truck size={24} color="#fff" />,
      tag: 'Free Shipping',
      image: require('../../assets/images/banner1.jpg'),
    },
    {
      id: 3,
      title: '100% Organic',
      subtitle: 'Certified Fresh Vegetables',
      description: 'Farm-fresh organic produce without chemicals',
      icon: <Leaf size={24} color="#fff" />,
      tag: 'Certified',
      image: require('../../assets/images/banner3.jpg'),
    },
    {
      id: 4,
      title: 'Flash Sale',
      subtitle: 'Up to 40% OFF',
      description: 'Premium fruits at unbeatable prices',
      icon: <Clock size={24} color="#fff" />,
      tag: 'Ends Soon',
      image: require('../../assets/images/banner4.jpg'),
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => {
        const nextIndex = (prev + 1) % banners.length;
        scrollViewRef.current?.scrollTo({
          x: nextIndex * BANNER_WIDTH,
          animated: true,
        });
        return nextIndex;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0.8,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  }, [currentBanner]);

  const handleBannerScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / BANNER_WIDTH);
    setCurrentBanner(index);
  };

  const isInWishlist = (id) => wishlistItems.some((item) => item.id === id);
  const isInCart = (id) => cartItems.some((item) => item.id === id);

  const toggleWishlist = (product) => {
    isInWishlist(product.id)
      ? removeFromWishlist(product.id)
      : addToWishlist(product);
  };

  const handleAddToCart = (product) => {
    if (!isInCart(product.id)) {
      addToCart({ ...product, quantity: 1 });
    }
  };

  const renderBanner = (banner) => (
    <Animated.View
      key={banner.id}
      style={{ width: BANNER_WIDTH, opacity: fadeAnim }}
      className="rounded-3xl mr-4 overflow-hidden opacity-50"
    >
      <ImageBackground
        source={banner.image}
        className="w-full h-64"
        imageStyle={{ borderRadius: 24 }}
        resizeMode="cover"
      >
        <View style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(100, 100, 100, 0.5)',
          borderRadius: 24
        }} />
        {/* Blur the entire background */}
        <BlurView
          intensity={40}  // Adjust blur strength (0-100)
          tint="light"    // "light", "dark", or "default"
          style={{
            flex: 1,
            borderRadius: 24,
            padding: 20,
          }}
        >
          {/* Top-right tag (now inside BlurView) */}
          <View className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white z-10">
            <Text className="text-green-700 text-xs font-bold">{banner.tag}</Text>
          </View>

          {/* Content container (pushes text to bottom) */}
          <View style={{ flex: 1 }} />

          {/* Bottom text section (same as before) */}
          <View>
            <View className="flex-row items-center mb-2">
              {banner.icon}
              <Text className="text-white text-2xl font-extrabold ml-2">{banner.title}</Text>
            </View>
            <Text className="text-white text-lg font-bold">{banner.subtitle}</Text>
            <Text className="text-white text-sm mb-3">{banner.description}</Text>

            <View className="flex-row items-center justify-between">
              <TouchableOpacity
                className="bg-white rounded-xl px-4 py-2 flex-row items-center"
                onPress={() => console.log(`Navigate to ${banner.subtitle}`)}
              >
                <Text className="text-green-700 font-semibold mr-2">Shop Now</Text>
                <ArrowRight size={16} color="#15803d" />
              </TouchableOpacity>
              <View className="flex-row items-center space-x-4">
                <View className="flex-row items-center">
                  <Star size={14} color="#facc15" fill="#facc15" />
                  <Text className="text-white text-xs ml-1">4.8 Rating</Text>
                </View>
                <View className="flex-row items-center">
                  <Truck size={14} color="#fff" />
                  <Text className="text-white text-xs ml-1">Fast Delivery</Text>
                </View>
              </View>
            </View>
          </View>
        </BlurView>
      </ImageBackground>
    </Animated.View>
  );


  return (
    <SafeAreaView className="flex-1 bg-grey-100">
      <View className="flex-1">
        {/* App Bar */}
        <View className="bg-white mt-6 px-4 py-4  flex-row justify-between items-center border-b border-green-200">
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
            <View className="relative z-10">
              <Bell size={24} color="#15803d" />
              <View className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-red-500" />
            </View>
            <View className="w-8 h-8 rounded-full bg-green-50 items-center justify-center">
              <User size={20} color="#15803d" />
            </View>
          </View>
        </View>

        {/* Search Bar */}
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
                <View key={idx} className="items-center mr-4">
                  <View className="w-16 h-16 rounded-full overflow-hidden">
                    <Image source={cat.image} className="w-full h-full" resizeMode="cover" />
                  </View>
                  <Text className="text-xs mt-2 text-gray-800 font-semibold">
                    {cat.name}
                  </Text>
                </View>

              ))}
            </ScrollView>
          </View>

          {/* Enhanced Banner Section */}
          <View className="px-4 mt-4">
            {/* Banner Carousel */}
            <ScrollView
              ref={scrollViewRef}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onMomentumScrollEnd={handleBannerScroll}
              scrollEventThrottle={16}
              className="mb-4"
            >
              {banners.map(renderBanner)}
            </ScrollView>

            {/* Pagination Dots */}
            <View className="flex-row justify-center items-center space-x-2 mb-2">
              {banners.map((_, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setCurrentBanner(index);
                    scrollViewRef.current?.scrollTo({
                      x: index * BANNER_WIDTH,
                      animated: true,
                    });
                  }}
                  className={`w-2 h-2 rounded-full ${index === currentBanner ? 'bg-green-500' : 'bg-gray-300'
                    }`}
                />
              ))}
            </View>

            {/* Quick Action Cards */}
            <View className="flex-row justify-between mt-2">
              <TouchableOpacity className="bg-green-50 border border-green-200 rounded-xl p-3 flex-1 mr-2 flex-row items-center">
                <View className="w-8 h-8 bg-green-500 rounded-full items-center justify-center mr-2">
                  <Truck size={16} color="#fff" />
                </View>
                <View className="flex-1">
                  <Text className="text-green-800 font-semibold text-sm">Quick Order</Text>
                  <Text className="text-green-600 text-xs">30 min delivery</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity className="bg-blue-50 border border-blue-200 rounded-xl p-3 flex-1 ml-2 flex-row items-center">
                <View className="w-8 h-8 bg-blue-500 rounded-full items-center justify-center mr-2">
                  <Leaf size={16} color="#fff" />
                </View>
                <View className="flex-1">
                  <Text className="text-blue-800 font-semibold text-sm">Fresh Deals</Text>
                  <Text className="text-blue-600 text-xs">Daily specials</Text>
                </View>
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
                <TouchableOpacity
                  key={product.id}
                  onPress={() => navigation.navigate(SCREEN_NAMES.PRODUCT_DETAILS, { product })}
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
                      onPress={() => toggleWishlist(product)}
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
                      onPress={() => handleAddToCart(product)}
                      className="bg-green-500 rounded-xl py-2 flex-row items-center justify-center"
                    >
                      <Plus size={16} color="#fff" />
                      <Text className="text-white font-semibold ml-1">Add to Cart</Text>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default FarmFerryHome;
