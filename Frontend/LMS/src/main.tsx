import React from "react";
import PassThrough from "./Global/PassThrough";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <PassThrough>
    <App />
  </PassThrough>
);
