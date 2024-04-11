import React from "react";
import { persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from "./store";
import { Provider } from "react-redux";
type props = {
  children: React.ReactNode;
};
const PassThrough: React.FC<props> = ({ children }) => {
  return <Provider store={store}>
    <PersistGate loading={<>Loading...</>} persistor={persistor}>{children}</PersistGate>
  </Provider>;
};

export default PassThrough;
