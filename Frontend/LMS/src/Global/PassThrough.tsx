import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
type props = {
  children: React.ReactNode;
};
const PassThrough: React.FC<props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default PassThrough;
