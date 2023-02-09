import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

//import App from "./App";
import App from "./emlchk/App";

const rootElement = document.getElementById("root");
if (null !== rootElement) {
  const root = ReactDOMClient.createRoot(rootElement);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
