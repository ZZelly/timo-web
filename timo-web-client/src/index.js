import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import "bootstrap/dist/css/bootstrap.css";

// babel compile
// hot module reloading -> unchanged -> show in window
ReactDOM.render(<App />, document.getElementById("app"));

// module.hot.accept();

// import React from "react";
// import ReactDOM from "react-dom";

// import App from "./App";

// const title = "My Minimal React Webpack Babel Setup";

// ReactDOM.render(<App title={title} />, document.getElementById("app"));

// module.hot.accept();
