import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import {
  User,
  MapPin,
  Clock,
  Star,
  Heart,
  ShoppingBag,
  CreditCard,
  Bell,
  Settings,
  LogOut,
  Edit3,
  Gift,
  Headphones,
  Shield,
  ChevronRight,
  Award,
  Wallet,
  Package,
  Repeat,
  Plus,
  Phone,
  Mail,
  Crown,
  Zap,
  TrendingUp,
  Calendar,
  Receipt,
  Search,
} from 'lucide-react-native';

const ProfileScreen = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [showNotifications, setShowNotifications] = useState(false);

  const userStats = {
    totalOrders: 127,
    totalSaved: 18450,
    avgRating: 4.9,
    avgDeliveryTime: 12,
    memberSince: 'Jan 2023',
    currentStreak: 7,
  };

  const tabs = [
    { key: 'profile', label: 'Profile', icon: User },
    { key: 'orders', label: 'Orders', icon: ShoppingBag },
    { key: 'addresses', label: 'Addresses', icon: MapPin },
  ];

  const menuItems = [
    { icon: ShoppingBag, label: 'My Orders', desc: 'View order history' },
    { icon: MapPin, label: 'Manage Addresses', desc: 'Add/edit delivery locations' },
    { icon: CreditCard, label: 'Payment Methods', desc: 'Manage cards & wallets' },
    { icon: Gift, label: 'Offers & Coupons', desc: 'Available discounts' },
    { icon: Star, label: 'Rate & Review', desc: 'Share your experience' },
    { icon: Headphones, label: 'Help & Support', desc: 'Get assistance' },
    { icon: Shield, label: 'Privacy & Security', desc: 'Account protection' },
    { icon: Settings, label: 'Settings', desc: 'App preferences' },
  ];

  return (
    <ScrollView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-white px-4 py-4 flex-row justify-between items-center shadow-sm">
        <View className="flex-row items-center space-x-3">
          <View className="bg-green-500 p-2 rounded-lg">
            <User size={20} color="white" />
          </View>
          <View>
            <Text className="text-lg font-bold text-gray-900">Profile</Text>
            <Text className="text-xs text-gray-500">Manage your account</Text>
          </View>
        </View>
        <View className="flex-row space-x-4">
          <TouchableOpacity onPress={() => setShowNotifications(!showNotifications)}>
            <Bell size={22} color="#4B5563" />
          </TouchableOpacity>
          <Search size={22} color="#4B5563" />
        </View>
      </View>

      {/* Profile Summary */}
      <View className="px-4 py-6 bg-gradient-to-r from-green-50 via-blue-50 to-purple-50">
        <View className="flex-row space-x-4 items-center">
          <View className="bg-gradient-to-br from-green-400 to-purple-500 w-20 h-20 rounded-2xl items-center justify-center">
            <User size={40} color="white" />
          </View>
          <View className="flex-1">
            <Text className="text-xl font-bold text-gray-900">Priya Sharma</Text>
            <View className="flex-row items-center mt-1">
              <Phone size={16} color="#4B5563" />
              <Text className="ml-2 text-sm text-gray-700">+91 98765 43210</Text>
            </View>
            <View className="flex-row items-center mt-1">
              <Mail size={16} color="#4B5563" />
              <Text className="ml-2 text-sm text-gray-700">priya.sharma@gmail.com</Text>
            </View>
            <View className="flex-row items-center mt-2">
              <Crown size={18} color="#FACC15" />
              <Text className="ml-2 text-sm font-semibold text-yellow-600 bg-yellow-100 px-2 py-0.5 rounded-full">
                Premium Member
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Membership Progress */}
      <View className="px-4 py-4 bg-orange-50 flex-row justify-between items-center">
        <View className="flex-row items-center space-x-3">
          <View className="bg-orange-400 w-10 h-10 rounded-full items-center justify-center">
            <TrendingUp size={20} color="white" />
          </View>
          <View>
            <Text className="text-sm font-semibold text-gray-900">Next: Elite Status</Text>
            <Text className="text-xs text-gray-600">Complete 3 more orders</Text>
          </View>
        </View>
        <View className="items-end">
          <View className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
            <View className="w-16 h-full bg-orange-400" />
          </View>
          <Text className="text-xs text-gray-600 mt-1">127/130</Text>
        </View>
      </View>

      {/* Quick Stats */}
      <View className="px-4 py-6">
        <View className="flex-row justify-between mb-4">
          <View className="bg-green-100 p-4 rounded-2xl flex-1 mr-2">
            <ShoppingBag size={24} color="#059669" />
            <Text className="text-2xl font-bold text-green-700 mt-2">{userStats.totalOrders}</Text>
            <Text className="text-xs text-green-700">Total Orders</Text>
          </View>
          <View className="bg-blue-100 p-4 rounded-2xl flex-1 ml-2">
            <Wallet size={24} color="#2563EB" />
            <Text className="text-2xl font-bold text-blue-700 mt-2">₹{userStats.totalSaved.toLocaleString()}</Text>
            <Text className="text-xs text-blue-700">Total Saved</Text>
          </View>
        </View>

        <View className="flex-row justify-between">
          <View className="bg-purple-100 p-3 rounded-xl items-center flex-1 mx-1">
            <Star size={20} color="#7C3AED" />
            <Text className="text-lg font-bold text-purple-700 mt-1">{userStats.avgRating}</Text>
            <Text className="text-xs text-purple-700">Rating</Text>
          </View>
          <View className="bg-orange-100 p-3 rounded-xl items-center flex-1 mx-1">
            <Zap size={20} color="#EA580C" />
            <Text className="text-lg font-bold text-orange-700 mt-1">{userStats.avgDeliveryTime}m</Text>
            <Text className="text-xs text-orange-700">Avg Time</Text>
          </View>
          <View className="bg-pink-100 p-3 rounded-xl items-center flex-1 mx-1">
            <Calendar size={20} color="#DB2777" />
            <Text className="text-lg font-bold text-pink-700 mt-1">{userStats.currentStreak}</Text>
            <Text className="text-xs text-pink-700">Day Streak</Text>
          </View>
        </View>
      </View>

      {/* Tab Navigation */}
      <View className="flex-row bg-white border-b border-gray-200">
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.key}
            onPress={() => setActiveTab(tab.key)}
            className={`flex-1 items-center py-4 ${
              activeTab === tab.key ? 'border-b-2 border-green-600 bg-green-50' : ''
            }`}
          >
            <tab.icon size={20} color={activeTab === tab.key ? '#059669' : '#6B7280'} />
            <Text className={`text-sm mt-1 ${activeTab === tab.key ? 'text-green-600' : 'text-gray-600'}`}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Tab Content */}
      {activeTab === 'profile' && (
        <View className="p-4 space-y-4">
          {/* Quick Actions */}
          <View className="bg-blue-50 rounded-2xl p-4">
            <Text className="font-semibold text-gray-800 mb-3">Quick Actions</Text>
            <View className="flex-row justify-between">
              <View className="items-center">
                <View className="bg-green-100 p-3 rounded-xl mb-1">
                  <Repeat size={20} color="#059669" />
                </View>
                <Text className="text-xs text-gray-700">Reorder</Text>
              </View>
              <View className="items-center">
                <View className="bg-red-100 p-3 rounded-xl mb-1">
                  <Heart size={20} color="#DC2626" />
                </View>
                <Text className="text-xs text-gray-700">Favorites</Text>
              </View>
              <View className="items-center">
                <View className="bg-purple-100 p-3 rounded-xl mb-1">
                  <Gift size={20} color="#7C3AED" />
                </View>
                <Text className="text-xs text-gray-700">Offers</Text>
              </View>
              <View className="items-center">
                <View className="bg-blue-100 p-3 rounded-xl mb-1">
                  <Headphones size={20} color="#2563EB" />
                </View>
                <Text className="text-xs text-gray-700">Support</Text>
              </View>
            </View>
          </View>

          {/* Menu Items */}
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              className="bg-white border border-gray-100 rounded-2xl p-4 flex-row items-center justify-between shadow-sm"
            >
              <View className="flex-row items-center space-x-4">
                <View className="bg-gray-100 p-3 rounded-xl">
                  <item.icon size={20} color="#4B5563" />
                </View>
                <View>
                  <Text className="text-gray-900 font-medium">{item.label}</Text>
                  <Text className="text-xs text-gray-500">{item.desc}</Text>
                </View>
              </View>
              <ChevronRight size={18} color="#9CA3AF" />
            </TouchableOpacity>
          ))}

          {/* Logout Button */}
          <TouchableOpacity className="mt-6 bg-red-100 p-4 rounded-2xl items-center flex-row justify-center space-x-2">
            <LogOut size={18} color="#DC2626" />
            <Text className="text-red-600 font-medium">Logout</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Orders and Addresses will go below if needed */}
    </ScrollView>
  );
};

export default ProfileScreen;
