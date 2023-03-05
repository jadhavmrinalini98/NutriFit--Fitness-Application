// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./index.css";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //   <Auth0Provider
  //   domain="login-test123.us.auth0.com"
  //   clientId="31LboWg03nk3ReWOEWjWsJbv8mi01rkp"
  //   redirectUri={window.location.origin}
  // >
  //   <App />
  // </Auth0Provider>
  <React.StrictMode>
    <App />,
  </React.StrictMode>
);

