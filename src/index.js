import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import "./css/index.css";

ReactDOM.render(
  <BrowserRouter>
    <ChakraProvider resetCSS={false}>
      <App />
    </ChakraProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
