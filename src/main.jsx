import { createRoot } from "react-dom/client"
import store from "./assets/redux/store/index.js"
import App from "./App.jsx"
import { Provider } from "react-redux"

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
