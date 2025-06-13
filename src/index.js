import React from "react";
import ReactDOM from "react-dom/client";
import "@mantine/core/styles.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MantineProvider } from "@mantine/core";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <MantineProvider
    defaultColorScheme="light"
    theme={{
      colors: {
        // Adding custom colors
        accent: Array(10).fill("#E3405F"),
        accentBright: Array(10).fill("#FC1056"),
        secondaryText: Array(10).fill("#7F8DAA").with(7, "#8D8D8D"),
        avatarMisc: Array(10).fill("#e9ecf2").with(7, "#212121"),
        avatarShoes: Array(10).fill("#ccd2e3").with(7, "#2B2B2B"),
        imageDark: Array(10).fill("#dce4f2").with(7, "#292A2D"),
        imageClothes: Array(10).fill("#F7B799").with(7, "#000000"),
        skinColor: Array(10).fill("#F7B799"),
      },
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MantineProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
