import ReactDOM from "react-dom/client";
import App from "./App"
import "./style.css"

/**
 * @file index.js
 * @author 0xChristopher
 * @brief This file simply retrieves the root element in the index.html file, and then renders the main
 *      'App' component.
 */

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)