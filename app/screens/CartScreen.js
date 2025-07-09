// import React, { useState } from 'react';
// import { View, Text, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// const dummyCart = [
//   {
//     id: 1,
//     name: 'Organic Tomatoes',
//     image: require('../../assets/images/tomato.png'),
//     price: 45,
//     quantity: 1,
//   },
//   {
//     id: 2,
//     name: 'Fresh Apples',
//     image: require('../../assets/images/apple.png'),
//     price: 120,
//     quantity: 2,
//   },
// ];

// export default function CartScreen({ navigation }) {
//   const [cartItems, setCartItems] = useState(dummyCart);

//   const increaseQty = (id) => {
//     setCartItems((prev) =>
//       prev.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
//     );
//   };

//   const decreaseQty = (id) => {
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item.id === id && item.quantity > 1
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       )
//     );
//   };

//   const removeItem = (id) => {
//     Alert.alert('Remove Item', 'Are you sure you want to remove this item?', [
//       { text: 'Cancel', style: 'cancel' },
//       {
//         text: 'Remove',
//         style: 'destructive',
//         onPress: () =>
//           setCartItems((prev) => prev.filter((item) => item.id !== id)),
//       },
//     ]);
//   };

//   const getTotal = () => {
//     return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   };

//   return (
//     <View className="flex-1 bg-gray-50">
//       <Text className="text-2xl font-bold text-gray-800 px-4 pt-6 mb-2">My Cart</Text>

//       <ScrollView showsVerticalScrollIndicator={false} className="px-4">
//         {cartItems.length === 0 ? (
//           <View className="flex-1 items-center justify-center mt-20">
//             <Ionicons name="cart-outline" size={60} color="#9CA3AF" />
//             <Text className="text-gray-500 text-lg mt-4">Your cart is empty</Text>
//           </View>
//         ) : (
//           cartItems.map((item) => (
//             <View
//               key={item.id}
//               className="flex-row bg-white rounded-2xl mb-4 p-4 shadow-sm items-center"
//             >
//               <Image source={item.image} className="w-16 h-16 mr-4" resizeMode="contain" />
//               <View className="flex-1">
//                 <Text className="font-semibold text-base text-gray-800">{item.name}</Text>
//                 <Text className="text-green-600 font-bold mt-1">₹{item.price} x {item.quantity}</Text>
//                 <View className="flex-row items-center mt-2">
//                   <TouchableOpacity
//                     className="w-8 h-8 rounded-full bg-green-100 items-center justify-center"
//                     onPress={() => decreaseQty(item.id)}
//                   >
//                     <Ionicons name="remove" size={16} color="#10B981" />
//                   </TouchableOpacity>
//                   <Text className="mx-3 font-medium text-gray-700">{item.quantity}</Text>
//                   <TouchableOpacity
//                     className="w-8 h-8 rounded-full bg-green-100 items-center justify-center"
//                     onPress={() => increaseQty(item.id)}
//                   >
//                     <Ionicons name="add" size={16} color="#10B981" />
//                   </TouchableOpacity>
//                 </View>
//               </View>
//               <TouchableOpacity
//                 className="ml-3"
//                 onPress={() => removeItem(item.id)}
//               >
//                 <Ionicons name="trash" size={20} color="#EF4444" />
//               </TouchableOpacity>
//             </View>
//           ))
//         )}
//         <View className="h-24" />
//       </ScrollView>

//       {/* Bottom Total + Place Order */}
//       {cartItems.length > 0 && (
//         <View className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 py-4">
//           <View className="flex-row justify-between items-center mb-3">
//             <Text className="text-lg font-semibold text-gray-800">Total</Text>
//             <Text className="text-lg font-bold text-green-600">₹{getTotal()}</Text>
//           </View>
//           <TouchableOpacity
//             className="bg-green-500 rounded-2xl py-4 items-center"
//             onPress={() => navigation.navigate('PlaceOrder')}
//           >
//             <Text className="text-white font-semibold text-base">Place Order</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </View>
//   );
// }
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAppContext } from '../context/AppContext';

export default function CartScreen({ navigation }) {
  const { cartItems, updateCartItems } = useAppContext();

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

  const getTotal = () =>
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <View className="flex-1 bg-gray-50">
      <Text className="text-2xl font-bold text-gray-800 px-4 pt-6 mb-2">My Cart</Text>
      <ScrollView showsVerticalScrollIndicator={false} className="px-4">
        {cartItems.length === 0 ? (
          <View className="flex-1 items-center justify-center mt-20">
            <Ionicons name="cart-outline" size={60} color="#9CA3AF" />
            <Text className="text-gray-500 text-lg mt-4">Your cart is empty</Text>
          </View>
        ) : (
          cartItems.map((item) => (
            <View
              key={item.id}
              className="flex-row bg-white rounded-2xl mb-4 p-4 shadow-sm items-center"
            >
              <Image source={item.image} className="w-16 h-16 mr-4" resizeMode="contain" />
              <View className="flex-1">
                <Text className="font-semibold text-base text-gray-800">{item.name}</Text>
                <Text className="text-green-600 font-bold mt-1">
                  ₹{item.price} x {item.quantity}
                </Text>
                <View className="flex-row items-center mt-2">
                  <TouchableOpacity
                    className="w-8 h-8 rounded-full bg-green-100 items-center justify-center"
                    onPress={() => decreaseQty(item.id)}
                  >
                    <Ionicons name="remove" size={16} color="#047857" />
                  </TouchableOpacity>
                  <Text className="mx-3 font-medium text-gray-700">{item.quantity}</Text>
                  <TouchableOpacity
                    className="w-8 h-8 rounded-full bg-green-100 items-center justify-center"
                    onPress={() => increaseQty(item.id)}
                  >
                    <Ionicons name="add" size={16} color="#047857" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))
        )}
        <View className="h-24" />
      </ScrollView>

      {cartItems.length > 0 && (
        <View className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 py-4">
          <View className="flex-row justify-between items-center mb-3">
            <Text className="text-lg font-semibold text-gray-800">Total</Text>
            <Text className="text-lg font-bold text-green-600">₹{getTotal()}</Text>
          </View>
          <TouchableOpacity
            className="bg-green-500 rounded-2xl py-4 items-center"
            onPress={() => navigation.navigate('PlaceOrder')}
          >
            <Text className="text-white font-semibold text-base">Place Order</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
