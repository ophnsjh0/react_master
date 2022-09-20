//Typescript 설치 Default -> npx create-react-app my-app --template typescript
//Typescript 설치 React 설치후 npm install --save typescript @types/node @types/react @types/react-dom @types/jest

import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { QueryClient, QueryClientProvider, } from "react-query";

const queryClient = new QueryClient()


ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);