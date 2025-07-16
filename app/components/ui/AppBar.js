// import React from 'react';
// import { View, Text, Image } from 'react-native';
// import { Bell, User, MapPin } from 'lucide-react-native';
// import { useAppContext } from '../../context/AppContext'; // ✅ Corrected path

// const AppBar = () => {
//   const { cartItems } = useAppContext();

//   return (
//     <View
//       style={{
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: 16,
//         backgroundColor: 'white',
//         borderBottomWidth: 1,
//         borderBottomColor: '#e5e7eb',
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 1 },
//         shadowOpacity: 0.1,
//         shadowRadius: 1,
//         marginTop: 2, // Replace `mt-8`
//       }}
//     >
//       {/* Left: Logo + Address */}
//       <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//         <View
//           style={{
//             width: 48,
//             height: 48,
//             borderRadius: 12,
//             backgroundColor: '#4b5563',
//             justifyContent: 'center',
//             alignItems: 'center',
//             marginRight: 12,
//             overflow: 'hidden',
//           }}
//         >
//           <Image
//             source={{
//               uri: 'https://cdn.dribbble.com/userupload/13059119/file/original-b9ef38b6d36a6cdff474156872acdaaa.jpg?format=webp&resize=400x300&vertical=center',
//             }}
//             style={{ width: '100%', height: '100%' }}
//             resizeMode="cover"
//           />
//         </View>
//         <View>
//           <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#1f2937' }}>FarmFerry</Text>
//           <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//             <MapPin width={12} height={12} color="#16a34a" />
//             <Text style={{ fontSize: 12, color: '#16a34a', fontWeight: '500', marginLeft: 4 }}>
//               Nagpur, Maharashtra
//             </Text>
//           </View>
//         </View>
//       </View>

//       {/* Right: Cart and User Icons */}
//       <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//         <View
//           style={{
//             width: 48,
//             height: 48,
//             borderRadius: 14,
//             backgroundColor: '#f0fdf4',
//             justifyContent: 'center',
//             alignItems: 'center',
//             marginLeft: 12,
//             position: 'relative',
//             borderWidth: 1,
//             borderColor: '#dcfce7',
//           }}
//         >
//           {cartItems.length > 0 && (
//             <View
//               style={{
//                 position: 'absolute',
//                 top: -6,
//                 right: -6,
//                 width: 22,
//                 height: 22,
//                 borderRadius: 11,
//                 backgroundColor: 'red',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 zIndex: 10,
//                 borderWidth: 2,
//                 borderColor: '#f0fdf4',
//               }}
//             >
//               <Text style={{ color: 'white', fontSize: 11, fontWeight: '800' }}>
//                 {cartItems.length}
//               </Text>
//             </View>
//           )}
//           <Bell width={22} height={22} color="#16a34a" />
//         </View>
//         <View
//           style={{
//             width: 48,
//             height: 48,
//             borderRadius: 14,
//             backgroundColor: '#f0fdf4',
//             justifyContent: 'center',
//             alignItems: 'center',
//             marginLeft: 12,
//             borderWidth: 1,
//             borderColor: '#dcfce7',
//           }}
//         >
//           <User width={22} height={22} color="#16a34a" />
//         </View>
//       </View>
//     </View>
//   );
// };

// export default AppBar;
// app/components/ui/AppBar.js
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { MapPin, Bell, User, ArrowLeft } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { useAppContext } from '../../context/AppContext';

export default function AppBar({ showBack = false, title = "FarmFerry", subtitle = "Nagpur, Maharashtra" }) {
  const navigation = useNavigation();
  const { cartItems } = useAppContext();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#e5e7eb',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 3,
      }}
      className="mt-2"
    >
      {/* Left: Logo or Back Arrow */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {showBack ? (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              marginRight: 12,
              backgroundColor: '#f0fdf4',
              borderRadius: 9999,
              padding: 8,
            }}
          >
            <ArrowLeft size={20} color="#16a34a" />
          </TouchableOpacity>
        ) : (
          <View
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              backgroundColor: '#4b5563',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 12,
              overflow: 'hidden',
            }}
          >
            <Image
              source={{
                uri: 'https://cdn.dribbble.com/userupload/13059119/file/original-b9ef38b6d36a6cdff474156872acdaaa.jpg?format=webp&resize=400x300&vertical=center',
              }}
              style={{ width: '100%', height: '100%' }}
              resizeMode="cover"
            />
          </View>
        )}
        <View>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#1f2937' }}>{title}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MapPin width={12} height={12} color="#16a34a" />
            <Text style={{ fontSize: 12, color: '#16a34a', fontWeight: '500', marginLeft: 4 }}>
              {subtitle}
            </Text>
          </View>
        </View>
      </View>

      {/* Right: Icons */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View
          style={{
            width: 48,
            height: 48,
            borderRadius: 14,
            backgroundColor: '#f0fdf4',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 12,
            position: 'relative',
            borderWidth: 1,
            borderColor: '#dcfce7',
          }}
        >
          {cartItems.length > 0 && (
            <View
              style={{
                position: 'absolute',
                top: -6,
                right: -6,
                width: 22,
                height: 22,
                borderRadius: 11,
                backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 10,
                borderWidth: 2,
                borderColor: '#f0fdf4',
              }}
            >
              <Text style={{ color: 'white', fontSize: 11, fontWeight: '800' }}>
                {cartItems.length}
              </Text>
            </View>
          )}
          <Bell width={22} height={22} color="#16a34a" />
        </View>

        <View
          style={{
            width: 48,
            height: 48,
            borderRadius: 14,
            backgroundColor: '#f0fdf4',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 12,
            borderWidth: 1,
            borderColor: '#dcfce7',
          }}
        >
          <User width={22} height={22} color="#16a34a" />
        </View>
      </View>
    </View>
  );
}
