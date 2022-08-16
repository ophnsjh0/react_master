//Typescript 설치 Default -> npx create-react-app my-app --template typescript
//Typescript 설치 React 설치후 npm install --save typescript @types/node @types/react @types/react-dom @types/jest

import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { Theme } from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);