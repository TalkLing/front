import React, { createContext } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "./index.css";

firebase.initializeApp({
  apiKey: "AIzaSyA5FMRjhLYY8E7nQqtHdynzBSwio2MG71U",
  authDomain: "talkling-e646b.firebaseapp.com",
  projectId: "talkling-e646b",
  storageBucket: "talkling-e646b.appspot.com",
  messagingSenderId: "407799669837",
  appId: "1:407799669837:web:396c7ec2e1c539fbdc6804",
});

export const Context = createContext(null);
const auth = firebase.auth();
const firestore = firebase.firestore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/*<PersistGate loading={null} persistor={persistor}>*/}
    <BrowserRouter>
      <Context.Provider value={{ firestore, auth, firebase }}>
        <App />
      </Context.Provider>
    </BrowserRouter>
    {/*</PersistGate>*/}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
