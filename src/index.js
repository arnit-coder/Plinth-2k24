import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import EventContextProvider from "./ContextApi/EventContextProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider
      clientId={process.env.REACT_APP_CLIENT_ID}
    >
      <EventContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<App />} />
          </Routes>
        </BrowserRouter>
      </EventContextProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
