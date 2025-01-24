import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import { store } from './redux/store/store.js';
import { Provider } from 'react-redux';

createRoot(document.getElementById("root")).render(
  
    <Provider store={store}>
      <App />
    </Provider>
 
);