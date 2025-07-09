// import React, { useState } from 'react';
// import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

// const wishlist = [
//   {
//     id: '1',
//     name: 'Fresh Apples',
//     price: '₹120/kg',
//     image: require('../../assets/images/apple.png'),
//   },
//   {
//     id: '2',
//     name: 'Brown Rice',
//     price: '₹90/kg',
//     image: require('../../assets/images/grains.jpg'),
//   },
// ];


// export default function WishlistScreen() {
//   const [items, setItems] = useState(wishlist);

//   const removeItem = (id) => {
//     setItems(items.filter((item) => item.id !== id));
//   };

//   return (
//     <View className="flex-1 bg-gray-50 p-5">
//       <Text className="text-2xl font-bold text-gray-800 mb-4">My Wishlist</Text>

//       <FlatList
//         data={items}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View className="bg-white p-4 rounded-2xl mb-3 flex-row items-center">
//             <Image source={item.image} className="w-14 h-14 mr-4" />
//             <View className="flex-1">
//               <Text className="font-semibold text-gray-800">{item.name}</Text>
//               <Text className="text-sm text-green-600">{item.price}</Text>
//             </View>
//             <TouchableOpacity
//               onPress={() => removeItem(item.id)}
//               className="bg-red-100 px-3 py-1 rounded-full"
//             >
//               <Text className="text-red-500 text-sm font-semibold">Remove</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       />
//     </View>
//   );
// }
import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useAppContext } from '../context/AppContext';

export default function WishlistScreen() {
  const { wishlistItems, removeFromWishlist } = useAppContext();

  return (
    <View className="flex-1 bg-gray-50 p-5">
      <Text className="text-2xl font-bold text-gray-800 mb-4">My Wishlist</Text>

      <FlatList
        data={wishlistItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className="bg-white p-4 rounded-2xl mb-3 flex-row items-center">
            <Image source={item.image} className="w-14 h-14 mr-4" />
            <View className="flex-1">
              <Text className="font-semibold text-gray-800">{item.name}</Text>
              <Text className="text-sm text-green-600">₹{item.price}/kg</Text>
            </View>
            <TouchableOpacity
              onPress={() => removeFromWishlist(item.id)}
              className="bg-red-100 px-3 py-1 rounded-full"
            >
              <Text className="text-red-500 text-sm font-semibold">Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
