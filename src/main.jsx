import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "rsuite/dist/rsuite-no-reset.css";
import { HelmetProvider } from "react-helmet-async";
import { ProductsProvider } from "./context/ProductsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </HelmetProvider>
);
