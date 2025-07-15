// import React, { createContext, useContext, useState } from 'react';

// const AppContext = createContext();

// export const AppProvider = ({ children }) => {
//   const [cartCount, setCartCount] = useState(0);
//   const [wishlistCount, setWishlistCount] = useState(0);
//   const [cartItems, setCartItems] = useState([]);
//   const [wishlistItems, setWishlistItems] = useState([]);

//   const addToCart = (item) => {
//     if (!cartItems.find((i) => i.id === item.id)) {
//       const updated = [...cartItems, { ...item, quantity: 1 }];
//       setCartItems(updated);
//       setCartCount(updated.length);
//     }
//   };

//   const addToWishlist = (item) => {
//     if (!wishlistItems.find((i) => i.id === item.id)) {
//       const updated = [...wishlistItems, item];
//       setWishlistItems(updated);
//       setWishlistCount(updated.length);
//     }
//   };

//   const removeFromWishlist = (id) => {
//     const updated = wishlistItems.filter((item) => item.id !== id);
//     setWishlistItems(updated);
//     setWishlistCount(updated.length);
//   };

//   const updateCartItems = (items) => {
//     setCartItems(items);
//     setCartCount(items.length);
//   };

//   return (
//     <AppContext.Provider
//       value={{
//         cartCount,
//         setCartCount,
//         wishlistCount,
//         setWishlistCount,
//         cartItems,
//         wishlistItems,
//         addToCart,
//         addToWishlist,
//         removeFromWishlist,
//         updateCartItems,
//       }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// };

// export const useAppContext = () => useContext(AppContext);





// import React, { createContext, useContext, useState } from 'react';

// const AppContext = createContext();

// export const AppProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);
//   const [wishlistItems, setWishlistItems] = useState([]);

//   const addToCart = (product) => {
//     if (!cartItems.find(item => item.id === product.id)) {
//       setCartItems([...cartItems, { ...product, quantity: 1 }]);
//     }
//   };

//   const removeFromCart = (id) => {
//     setCartItems(cartItems.filter(item => item.id !== id));
//   };

//   const addToWishlist = (product) => {
//     if (!wishlistItems.find(item => item.id === product.id)) {
//       setWishlistItems([...wishlistItems, product]);
//     }
//   };

//   const removeFromWishlist = (id) => {
//     setWishlistItems(wishlistItems.filter(item => item.id !== id));
//   };

//   return (
//     <AppContext.Provider
//       value={{
//         cartItems,
//         wishlistItems,
//         addToCart,
//         removeFromCart,
//         addToWishlist,
//         removeFromWishlist,
//         cartCount: cartItems.length,
//         wishlistCount: wishlistItems.length
//       }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// };

// export const useAppContext = () => useContext(AppContext);






// context/AppContext.js
import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const updateCartItems = (items) => {
    setCartItems(items);
  };

  const updateWishlistItems = (items) => {
    setWishlistItems(items);
  };

  return (
    <AppContext.Provider
      value={{
        cartItems,
        wishlistItems,
        updateCartItems,
        updateWishlistItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};