import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  RefreshControl,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { ShoppingCart } from 'lucide-react-native';

const { width } = Dimensions.get('window');

const orders = [
  {
    id: '1234',
    date: '2025-07-01',
    status: 'Delivered',
    total: '₹325',
    items: 3,
    restaurant: 'Spice Kitchen',
    estimatedTime: 'Delivered at 2:30 PM',
    image: '🍛',
  },
  {
    id: '1235',
    date: '2025-06-28',
    status: 'Processing',
    total: '₹210',
    items: 2,
    restaurant: 'Pizza Palace',
    estimatedTime: 'Arriving in 25 mins',
    image: '🍕',
  },
  {
    id: '1236',
    date: '2025-06-25',
    status: 'Cancelled',
    total: '₹180',
    items: 1,
    restaurant: 'Burger House',
    estimatedTime: 'Order cancelled',
    image: '🍔',
  },
  {
    id: '1237',
    date: '2025-06-22',
    status: 'Delivered',
    total: '₹450',
    items: 4,
    restaurant: 'Thai Express',
    estimatedTime: 'Delivered at 7:15 PM',
    image: '🍜',
  },
  {
    id: '1238',
    date: '2025-06-20',
    status: 'Delivered',
    total: '₹290',
    items: 2,
    restaurant: 'Dessert Corner',
    estimatedTime: 'Delivered at 4:45 PM',
    image: '🍰',
  },
];

const filterOptions = ['All', 'Processing', 'Delivered', 'Cancelled'];

export default function OrdersScreen() {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All');

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered':
      case 'Processing':
        return 'bg-green-100 text-green-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Delivered':
        return 'checkmark-circle';
      case 'Processing':
        return 'time';
      case 'Cancelled':
        return 'close-circle';
      default:
        return 'help-circle';
    }
  };

  const filteredOrders =
    selectedFilter === 'All'
      ? orders
      : orders.filter((order) => order.status === selectedFilter);

  const renderFilterTab = (filter) => (
    <TouchableOpacity
      key={filter}
      onPress={() => setSelectedFilter(filter)}
      className={`px-4 py-2 mr-3 rounded-full ${selectedFilter === filter ? '' : 'bg-gray-200'
        }`}
      style={{
        backgroundColor: selectedFilter === filter ? '#10B981' : undefined,
      }}
    >
      <Text
        className="font-medium"
        style={{
          color: selectedFilter === filter ? 'white' : '#4b5563',
        }}
      >
        {filter}
      </Text>
    </TouchableOpacity>
  );

  const renderOrderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('OrderDetails', { orderId: item.id })}
      className="bg-white mx-4 mb-4 rounded-3xl shadow-sm border border-gray-100"
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
      }}
    >
      <View className="p-5">
        {/* Header */}
        <View className="flex-row justify-between items-start mb-3">
          <View className="flex-1">
            <View className="flex-row items-center mb-1">
              <Text className="text-3xl mr-3">{item.image}</Text>
              <View className="flex-1">
                <Text className="text-lg font-bold text-gray-800">{item.restaurant}</Text>
                <Text className="text-sm text-gray-500">Order #{item.id}</Text>
              </View>
            </View>
          </View>
          <View className={`px-3 py-1 rounded-full ${getStatusColor(item.status)}`}>
            <View className="flex-row items-center">
              <Ionicons
                name={getStatusIcon(item.status)}
                size={14}
                color={item.status === 'Cancelled' ? '#dc2626' : '#10B981'}
              />
              <Text
                className="ml-1 text-xs font-semibold"
                style={{
                  color: item.status === 'Cancelled' ? '#dc2626' : '#10B981',
                }}
              >
                {item.status}
              </Text>
            </View>
          </View>
        </View>

        {/* Order Details */}
        <View className="bg-gray-50 p-3 rounded-2xl mb-3">
          <View className="flex-row justify-between items-center mb-2">
            <View className="flex-row items-center">
              <Ionicons name="calendar-outline" size={16} color="#6b7280" />
              <Text className="text-sm text-gray-600 ml-2">{item.date}</Text>
            </View>
            <View className="flex-row items-center">
              <Ionicons name="restaurant-outline" size={16} color="#6b7280" />
              <Text className="text-sm text-gray-600 ml-2">{item.items} items</Text>
            </View>
          </View>
          <View className="flex-row items-center">
            <Ionicons name="time-outline" size={16} color="#6b7280" />
            <Text className="text-sm text-gray-600 ml-2">{item.estimatedTime}</Text>
          </View>
        </View>

        {/* Footer */}
        <View className="flex-row justify-between items-center">
          <View className="flex-row items-center">
            <Text className="text-2xl font-bold text-gray-800">{item.total}</Text>
            <Text className="text-sm text-gray-500 ml-2">Total</Text>
          </View>

          {/* ✅ Updated View Details Button */}
          <TouchableOpacity
            onPress={() => navigation.navigate('OrderDetails', { orderId: item.id })}
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
              className="py-2.5 px-5 flex-row items-center justify-center"
            >
              <Text className="text-white font-semibold text-sm mr-1.5">View Details</Text>
              <Ionicons name="arrow-forward" size={14} color="white" />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderEmptyState = () => (
    <View className="flex-1 justify-center items-center px-8">
      <Text className="text-6xl mb-4">🛒</Text>
      <Text className="text-xl font-bold text-gray-800 mb-2">No Orders Yet</Text>
      <Text className="text-gray-500 text-center mb-6">
        {selectedFilter === 'All'
          ? 'Start exploring delicious restaurants and place your first order!'
          : `No ${selectedFilter.toLowerCase()} orders found`}
      </Text>
      <LinearGradient
        colors={['#10B981', '#059669']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className="px-6 py-3 rounded-full flex-row items-center justify-center"
      >
        <Text className="text-white font-semibold">Start Ordering</Text>
      </LinearGradient>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />

      {/* Header */}
      <View className="bg-white px-4 py-6 shadow-sm">
        <View className="flex-row items-center justify-between mb-4">
          <View className="flex-row items-center">
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="mr-4 p-2 rounded-full bg-gray-100"
            >
              <Ionicons name="arrow-back" size={24} color="#10B981" />
            </TouchableOpacity>
            <Text className="text-2xl font-bold text-gray-800">My Orders</Text>
          </View>
          <TouchableOpacity className="p-2 rounded-full bg-gray-100">
            <Ionicons name="search" size={24} color="#10B981" />
          </TouchableOpacity>
        </View>

        {/* Filter Tabs */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
          {filterOptions.map(renderFilterTab)}
        </ScrollView>
      </View>

      {/* Orders List */}
      <View className="flex-1">
        {filteredOrders.length === 0 ? (
          renderEmptyState()
        ) : (
          <FlatList
            data={filteredOrders}
            keyExtractor={(item) => item.id}
            renderItem={renderOrderItem}
            contentContainerStyle={{ paddingVertical: 20 }}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                colors={['#10B981']}
                tintColor="#10B981"
              />
            }
          />
        )}
      </View>

      {/* Quick Actions */}
      <View className="bg-white p-4 border-t border-gray-200">
        <View className="flex-row justify-between">
          <TouchableOpacity
            onPress={() => console.log('Order Again pressed')}
            activeOpacity={0.9}
            className="flex-1 mx-2 rounded-full overflow-hidden"
            style={{
              shadowColor: '#059669',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.25,
              shadowRadius: 6,
              elevation: 5,
            }}
          >
            <View className="flex-row justify-between"></View>
            <LinearGradient
              colors={['#10B981', '#059669']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              className="py-3 flex-row items-center justify-center"
            >
              <ShoppingCart size={20} color="#ffffff" />
              <Text className="text-white font-semibold text-base ml-2">Order Again</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Support')}
            className="flex-1 mx-2 py-3 rounded-full flex-row items-center justify-center border"
            style={{ borderColor: '#10B981' }}
          >
            <Ionicons name="headset" size={20} color="#10B981" />
            <Text className="font-semibold ml-2" style={{ color: '#10B981' }}>
              Support
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </SafeAreaView>
  );
}
