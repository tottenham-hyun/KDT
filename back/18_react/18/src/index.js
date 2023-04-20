import React from "react";
import App from "./App";
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

setInterval(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
