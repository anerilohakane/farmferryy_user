import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import FarmFerryHome from '../screens/FarmFerryHome';
import FarmFerryHome from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import OrdersScreen from '../screens/OrdersScreen';
import WishlistScreen from '../screens/WishlistScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {
  Grid3x3,
  ShoppingCart,
  Package,
  Heart,
  User
} from 'lucide-react-native';
import { useAppContext } from '../context/AppContext';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  const { cartCount, wishlistCount } = useAppContext(); // ✅ Get counts from context

  const renderIcon = (Icon, focused, badge) => (
    <View className="items-center relative">
      <Icon size={22} color={focused ? '#16a34a' : '#6b7280'} />
      {badge > 0 && (
        <View className="absolute -top-1 -right-2 bg-red-500 w-4 h-4 rounded-full items-center justify-center">
          <Text className="text-white text-[10px] font-bold">{badge}</Text>
        </View>
      )}
    </View>
  );

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#d1fae5',
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={FarmFerryHome}
        options={{
          tabBarIcon: ({ focused }) => renderIcon(Grid3x3, focused, 0),
          tabBarLabel: 'Home'
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused }) => renderIcon(ShoppingCart, focused, cartCount),
          tabBarLabel: 'Cart'
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          tabBarIcon: ({ focused }) => renderIcon(Package, focused, 0),
          tabBarLabel: 'Orders'
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{
          tabBarIcon: ({ focused }) => renderIcon(Heart, focused, wishlistCount),
          tabBarLabel: 'Wishlist'
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => renderIcon(User, focused, 0),
          tabBarLabel: 'Profile'
        }}
      />
    </Tab.Navigator>
  );
}
