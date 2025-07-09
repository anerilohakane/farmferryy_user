// // import React, { createContext, useContext, useState } from 'react';

// // const AppContext = createContext();

// // export const AppProvider = ({ children }) => {
// //   const [cartCount, setCartCount] = useState(0);
// //   const [wishlistCount, setWishlistCount] = useState(0);

// //   return (
// //     <AppContext.Provider value={{ cartCount, setCartCount, wishlistCount, setWishlistCount }}>
// //       {children}
// //     </AppContext.Provider>
// //   );
// // };

// // export const useAppContext = () => useContext(AppContext);



// import React, { createContext, useContext, useState } from 'react';

// const AppContext = createContext();

// export const AppProvider = ({ children }) => {
//   const [cartCount, setCartCount] = useState(0);
//   const [wishlistCount, setWishlistCount] = useState(0);
//   const [cartItems, setCartItems] = useState([]);
//   const [wishlistItems, setWishlistItems] = useState([]);

//   const addToCart = (item) => {
//     const exists = cartItems.find(i => i.id === item.id);
//     if (!exists) {
//       const updated = [...cartItems, { ...item, quantity: 1 }];
//       setCartItems(updated);
//       setCartCount(updated.length);
//     }
//   };

//   const addToWishlist = (item) => {
//     const exists = wishlistItems.find(i => i.id === item.id);
//     if (!exists) {
//       const updated = [...wishlistItems, item];
//       setWishlistItems(updated);
//       setWishlistCount(updated.length);
//     }
//   };

//   const removeFromWishlist = (id) => {
//     const updated = wishlistItems.filter(item => item.id !== id);
//     setWishlistItems(updated);
//     setWishlistCount(updated.length);
//   };

//   const removeFromCart = (id) => {
//     const updated = cartItems.filter(item => item.id !== id);
//     setCartItems(updated);
//     setCartCount(updated.length);
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
//         removeFromCart,
//         removeFromWishlist,
//         setCartItems
//       }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// };

// export const useAppContext = () => useContext(AppContext);
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToCart = (item) => {
    if (!cartItems.find((i) => i.id === item.id)) {
      const updated = [...cartItems, { ...item, quantity: 1 }];
      setCartItems(updated);
      setCartCount(updated.length);
    }
  };

  const addToWishlist = (item) => {
    if (!wishlistItems.find((i) => i.id === item.id)) {
      const updated = [...wishlistItems, item];
      setWishlistItems(updated);
      setWishlistCount(updated.length);
    }
  };

  const removeFromWishlist = (id) => {
    const updated = wishlistItems.filter((item) => item.id !== id);
    setWishlistItems(updated);
    setWishlistCount(updated.length);
  };

  const updateCartItems = (items) => {
    setCartItems(items);
    setCartCount(items.length);
  };

  return (
    <AppContext.Provider
      value={{
        cartCount,
        setCartCount,
        wishlistCount,
        setWishlistCount,
        cartItems,
        wishlistItems,
        addToCart,
        addToWishlist,
        removeFromWishlist,
        updateCartItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
