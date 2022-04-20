import React from "react";
import ReactDOM from "react-dom/client";

// STYLESHEETS
import "./styles/styles.css";
import "./styles/index.css";

// MAIN APP COMPONENT
import App from "./App";

// CHAKRA UI
import { ChakraProvider } from "@chakra-ui/react";

// REACT ROUTER
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
