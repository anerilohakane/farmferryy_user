import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { SCREEN_NAMES } from '../types';
import { createStackNavigator } from '@react-navigation/stack';

// Main Screens
import DashboardScreen from '../screens/DashboardScreen';
import OrdersScreen from '../screens/OrdersScreen';
import ProfileScreen from '../screens/ProfileScreen';
import OrderDetailsScreen from '../screens/OrderDetailsScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
// import VerificationStatusScreen from '../screens/VerificationStatusScreen';
import ChangePasswordScreen from '../screens/ChangePasswordScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import SupportScreen from '../screens/SupportScreen';
import TermsScreen from '../screens/TermsScreen';
// import PrivacyScreen from '../screens/PrivacyScreen';

// Stack Navigators
import ProductsStackNavigator from './ProductsStackNavigator';

const Tab = createBottomTabNavigator();
const OrdersStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const OrdersStackNavigator = () => (
  <OrdersStack.Navigator screenOptions={{ headerShown: false }}>
    <OrdersStack.Screen name="OrdersList" component={OrdersScreen} />
    <OrdersStack.Screen name="OrderDetails" component={OrderDetailsScreen} />
  </OrdersStack.Navigator>
);

const ProfileStackNavigator = () => (
  <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
    <ProfileStack.Screen name="ProfileMain" component={ProfileScreen} />
    <ProfileStack.Screen name="EditProfile" component={EditProfileScreen} />
    {/* <ProfileStack.Screen name="VerificationStatus" component={VerificationStatusScreen} /> */}
    <ProfileStack.Screen name="ChangePassword" component={ChangePasswordScreen} />
    <ProfileStack.Screen name="Notifications" component={NotificationsScreen} />
    <ProfileStack.Screen name="Support" component={SupportScreen} />
    {/* <ProfileStack.Screen name="Terms" component={TermsScreen} /> */}
    {/* <ProfileStack.Screen name="Privacy" component={PrivacyScreen} /> */}
  </ProfileStack.Navigator>
);

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case SCREEN_NAMES.DASHBOARD:
              iconName = focused ? 'home' : 'home-outline';
              break;
            case SCREEN_NAMES.PRODUCTS:
              iconName = focused ? 'cube' : 'cube-outline';
              break;
            case SCREEN_NAMES.ORDERS:
              iconName = focused ? 'list' : 'list-outline';
              break;
            case SCREEN_NAMES.PROFILE:
              iconName = focused ? 'person' : 'person-outline';
              break;
            default:
              iconName = 'help-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#059669',
        tabBarInactiveTintColor: '#6b7280',
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 1,
          borderTopColor: '#e5e7eb',
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
        headerShown: false,
      })}
    >
      <Tab.Screen
        name={SCREEN_NAMES.DASHBOARD}
        component={DashboardScreen}
        options={{
          title: 'Dashboard',
          headerShown: false,
        }}
      />
      
      <Tab.Screen
        name={SCREEN_NAMES.PRODUCTS}
        component={ProductsStackNavigator}
        options={{
          title: 'Products',
          headerShown: false,
        }}
      />
      
      <Tab.Screen
        name={SCREEN_NAMES.ORDERS}
        component={OrdersStackNavigator}
        options={{
          title: 'Orders',
          headerShown: false,
        }}
      />
      
      <Tab.Screen
        name={SCREEN_NAMES.PROFILE}
        component={ProfileStackNavigator}
        options={{
          title: 'My Profile',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator; 