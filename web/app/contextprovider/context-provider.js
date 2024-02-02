// // ContextProvider.js
// import React, { createContext, useContext, useState } from 'react';

// const MyContext = createContext();

// export const MyContextProvider = ({ children }) => {
//   const [contextValue, setContextValue] = useState({
//     basename: 'example', // Your actual context state and logic go here
//   });

//   return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>;
// };

// export const useMyContext = () => {
//   return useContext(MyContext);
// };
