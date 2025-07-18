import {
  Bell, ChevronRight, Clock, CreditCard, Edit3,
  Headphones, Lock, LogOut, Mail, MapPin, Package,
  Phone, Plus, Receipt, Search, Settings, ShoppingBag, Star, User, X
} from 'lucide-react-native';
import { useState } from 'react';
import {
  FlatList,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const ProfileScreen = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [showNotifications, setShowNotifications] = useState(false);

  const recentOrders = [
    { id: 'GR2401', date: '2024-07-16', items: 8, total: '₹847', status: 'Delivered', deliveryTime: '11 min', rating: 5, items_preview: ['Milk', 'Bread', 'Eggs', '+5 more'] },
    { id: 'GR2402', date: '2024-07-14', items: 12, total: '₹1,234', status: 'Delivered', deliveryTime: '15 min', rating: 4, items_preview: ['Vegetables', 'Fruits', 'Snacks', '+9 more'] },
    { id: 'GR2403', date: '2024-07-12', items: 6, total: '₹523', status: 'Delivered', deliveryTime: '9 min', rating: 5, items_preview: ['Ice Cream', 'Chips', 'Drinks', '+3 more'] },
  ];

  const savedAddresses = [
    { id: 1, type: 'Home', address: '301, Sunshine Apartments, MG Road, Koregaon Park, Pune - 411001', isDefault: true, tag: 'PRIMARY' },
    { id: 2, type: 'Office', address: '5th Floor, Tech Tower, Hinjewadi Phase 2, Pune - 411057', isDefault: false, tag: 'WORK' },
    { id: 3, type: "Mom's Place", address: '12, Rose Garden Society, Baner, Pune - 411045', isDefault: false, tag: 'FAMILY' },
  ];

  const notifications = [
    { id: 1, title: 'Order Delivered!', desc: 'Your order #GR2401 has been delivered', time: '5 min ago', unread: true },
    { id: 2, title: 'New Offer Available', desc: 'Get 20% off on your next order', time: '1 hour ago', unread: true },
    { id: 3, title: 'Payment Successful', desc: 'Payment of ₹847 completed', time: '2 hours ago', unread: false },
  ];

  const profileMenu = [
    { icon: Lock, label: 'Change Password', desc: 'Update your password', color: 'red', badge: null },
    { icon: CreditCard, label: 'Payment Methods', desc: 'Manage cards & wallets', color: 'purple', badge: null },
    { icon: Star, label: 'Rate & Review', desc: 'Share your experience', color: 'yellow', badge: null },
    { icon: Settings, label: 'Settings', desc: 'App preferences', color: 'indigo', badge: null },
    { icon: Headphones, label: 'Help & Support', desc: 'Get assistance', color: 'teal', badge: null },
  ];

  const shadowStyle = "shadow-lg shadow-gray-600";

  const renderProfileTab = () => (
    <View className="p-4 space-y-6">
      <View className="space-y-4">
        {profileMenu.map((item, i) => (
          <TouchableOpacity key={i} className={`w-full bg-white rounded-xl p-4 mb-4 ${shadowStyle}`}>
            <View className="flex flex-row items-center">
              <View className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 bg-${item.color}-100`}>
                <item.icon
                  size={24}
                  color={
                    item.color === 'red' ? '#dc2626' :
                    item.color === 'purple' ? '#9333ea' :
                    item.color === 'yellow' ? '#ca8a04' :
                    item.color === 'indigo' ? '#4f46e5' :
                    item.color === 'teal' ? '#0d9488' :
                    '#000'
                  }
                />
              </View>
              <View className="flex-1">
                <Text className="text-base font-medium text-gray-900">{item.label}</Text>
                <Text className="text-sm text-gray-500">{item.desc}</Text>
                {item.badge && (
                  <View className="bg-green-100 rounded-xl px-2 py-1 mt-1 self-start">
                    <Text className="text-xs text-green-800">{item.badge}</Text>
                  </View>
                )}
              </View>
              <ChevronRight size={20} color="#9ca3af" />
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity className={`w-full flex flex-row items-center justify-center bg-red-100 p-4 rounded-xl gap-2 ${shadowStyle}`}>
        <LogOut size={20} color="#dc2626" />
        <Text className="text-base font-medium text-red-600">Logout</Text>
      </TouchableOpacity>
    </View>
  );

  const renderOrdersTab = () => (
    <View className="p-4 space-y-6">
      {/* Removed "Order History" heading as requested */}
      <View className="space-y-4">
        {recentOrders.map((item) => (
          <View key={item.id} className={`bg-white rounded-xl p-4 mb-4 ${shadowStyle}`}>
            <View className="flex flex-row justify-between mb-3">
              <View>
                <View className="flex flex-row items-center">
                  <Text className="text-base font-bold text-gray-900">#{item.id}</Text>
                  <View className="bg-green-100 rounded-xl px-2 py-1 ml-2">
                    <Text className="text-xs text-green-800 font-semibold">{item.status}</Text>
                  </View>
                </View>
                <Text className="text-xs text-gray-500 mt-1">{item.date}</Text>
              </View>
              <View>
                <Text className="text-base font-bold text-gray-900 text-right">{item.total}</Text>
                <View className="flex flex-row justify-end mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      color={i < item.rating ? '#facc15' : '#d1d5db'}
                      fill={i < item.rating ? '#facc15' : 'transparent'}
                    />
                  ))}
                </View>
              </View>
            </View>
            <View className="mb-3">
              <View className="flex flex-row gap-4">
                <View className="flex flex-row items-center">
                  <Package size={14} color="#6b7280" />
                  <Text className="text-xs text-gray-500 ml-1">{item.items} items</Text>
                </View>
                <View className="flex flex-row items-center">
                  <Clock size={14} color="#6b7280" />
                  <Text className="text-xs text-gray-500 ml-1">{item.deliveryTime}</Text>
                </View>
              </View>
            </View>
            <View className="bg-gray-50 rounded-lg p-3 mb-4">
              <Text className="text-sm text-gray-500">
                <Text className="font-medium text-gray-900">Items: </Text>
                {item.items_preview.join(', ')}
              </Text>
            </View>
            <View className="flex flex-row gap-2">
              <TouchableOpacity className="flex-1 bg-green-600 rounded-lg p-3 items-center">
                <Text className="text-white text-sm font-medium">Reorder</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-1 bg-gray-100 rounded-lg p-3 items-center">
                <Text className="text-gray-600 text-sm font-medium">View Details</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-blue-100 rounded-lg p-3 items-center justify-center">
                <Receipt size={16} color="#2563eb" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </View>
  );

  // Addresses tab with header text removed and spaced Add New
  const renderAddressesTab = () => (
    <View className="p-4 space-y-6">
      <View className="flex flex-row justify-between items-center">
        {/* Removed "Saved Addresses" heading */}
        <View />
        <TouchableOpacity className="flex flex-row items-center bg-green-600 rounded-lg px-4 py-2 gap-2">
          <Plus size={16} color="#ffffff" />
          <Text className="text-white text-sm font-medium">Add New</Text>
        </TouchableOpacity>
      </View>
      {/* Additional spacing between Add New button and address cards */}
      <View className="mt-4 space-y-4">
        {savedAddresses.map((item) => (
          <View key={item.id} className={`bg-white rounded-xl p-4 mb-4 ${shadowStyle}`}>
            <View className="flex flex-row justify-between items-center mb-3">
              <View className="flex flex-row items-center">
                <View className="w-12 h-12 rounded-xl bg-blue-100 items-center justify-center mr-4">
                  <MapPin size={24} color="#2563eb" />
                </View>
                <View className="flex flex-row items-center">
                  <Text className="text-base font-medium text-gray-900">{item.type}</Text>
                  <View className={`rounded-xl px-2 py-1 ml-2 ${item.isDefault ? 'bg-green-100' : 'bg-gray-100'}`}>
                    <Text className={`text-xs font-semibold ${item.isDefault ? 'text-green-800' : 'text-gray-500'}`}>
                      {item.isDefault ? 'DEFAULT' : item.tag}
                    </Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity className="p-2 rounded-lg">
                <Edit3 size={16} color="#16a34a" />
              </TouchableOpacity>
            </View>
            <Text className="text-sm text-gray-500 leading-5 mb-4 ml-16">{item.address}</Text>
            <View className="flex flex-row gap-2 ml-16">
              {!item.isDefault && (
                <TouchableOpacity className="bg-green-50 rounded-lg p-2">
                  <Text className="text-green-600 text-xs font-medium">Set as Default</Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity className="bg-blue-50 rounded-lg p-2">
                <Text className="text-blue-500 text-xs font-medium">Edit Address</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-red-50 rounded-lg p-2">
                <Text className="text-red-500 text-xs font-medium">Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </View>
  );

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="flex flex-row justify-between items-center p-4 bg-white border-b border-gray-200">
        <View className="flex flex-row items-center">
          <View className="w-8 h-8 rounded-full bg-green-600 items-center justify-center mr-3">
            <User size={20} color="#ffffff" />
          </View>
          <View>
            <Text className="text-lg font-bold text-gray-900">Profile</Text>
            <Text className="text-xs text-gray-500">Manage your account</Text>
          </View>
        </View>
        <View className="flex flex-row items-center gap-4">
          <TouchableOpacity
            className="relative p-2 rounded-lg"
            onPress={() => setShowNotifications(!showNotifications)}
          >
            <Bell size={20} color="#4b5563" />
            <View className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 items-center justify-center">
              <Text className="text-white text-xs font-bold">2</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="p-2 rounded-lg">
            <Search size={20} color="#4b5563" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Profile Header */}
      <View className="p-4 bg-white">
        <View className="items-center">
          <View className="relative mb-4">
            <View className="w-16 h-16 rounded-2xl bg-green-600 items-center justify-center">
              <User size={32} color="#ffffff" />
            </View>
            <TouchableOpacity className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white items-center justify-center border-2 border-gray-200">
              <Edit3 size={14} color="#16a34a" />
            </TouchableOpacity>
          </View>
          <View>
            <Text className="text-lg font-bold text-gray-900 mb-1 text-center">Priya Sharma</Text>
            <View className="flex flex-row items-center mb-1 justify-center">
              <Phone size={12} color="#4b5563" />
              <Text className="text-xs text-gray-500 ml-2">+91 98765 43210</Text>
            </View>
            <View className="flex flex-row items-center mb-1 justify-center">
              <Mail size={12} color="#4b5563" />
              <Text className="text-xs text-gray-500 ml-2">priya.sharma@gmail.com</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Navigation Tabs */}
      <View className="flex flex-row bg-white border-b border-gray-200">
        {[
          { key: 'profile', label: 'Profile', icon: User },
          { key: 'orders', label: 'My Orders', icon: ShoppingBag },
          { key: 'addresses', label: 'Addresses', icon: MapPin },
        ].map(tab => (
          <TouchableOpacity
            key={tab.key}
            className={`flex-1 flex flex-row items-center justify-center py-4 gap-2 ${
              activeTab === tab.key ? 'border-b-2 border-green-600 bg-green-50' : ''
            }`}
            onPress={() => setActiveTab(tab.key)}
          >
            <tab.icon
              size={16}
              color={activeTab === tab.key ? '#16a34a' : '#6b7280'}
            />
            <Text className={`text-sm ${activeTab === tab.key ? 'text-green-600 font-semibold' : 'text-gray-500'}`}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Tab Content */}
      <ScrollView className="flex-1 bg-white">
        {activeTab === 'profile' && renderProfileTab()}
        {activeTab === 'orders' && renderOrdersTab()}
        {activeTab === 'addresses' && renderAddressesTab()}
      </ScrollView>

      {/* Notifications Modal */}
      <Modal
        visible={showNotifications}
        animationType="slide"
        onRequestClose={() => setShowNotifications(false)}
      >
        <View className="flex-1 bg-white">
          <View className="p-4 border-b border-gray-200 flex flex-row justify-between items-center">
            <Text className="text-lg font-semibold text-gray-900">Notifications</Text>
            <TouchableOpacity
              onPress={() => setShowNotifications(false)}
              className="p-2 rounded-lg"
            >
              <X size={20} color="#4b5563" />
            </TouchableOpacity>
          </View>
          <FlatList
            data={notifications}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                className={`p-4 border-b border-gray-100 relative ${item.unread ? 'bg-blue-50' : ''}`}
              >
                <Text className="text-base font-medium text-gray-900">{item.title}</Text>
                <Text className="text-sm text-gray-500 mt-1">{item.desc}</Text>
                <Text className="text-xs text-gray-400 mt-1">{item.time}</Text>
                {item.unread && (
                  <View className="absolute top-4 right-4 w-2 h-2 rounded-full bg-blue-500" />
                )}
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    </View>
  );
};

export default ProfileScreen;
