import { createContext } from 'react';

// Create the context
export const AppContext = createContext();

// Create the provider component
export const AppContextProvider = (props) => {
  const value = {
    // Put shared state or functions here
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};
