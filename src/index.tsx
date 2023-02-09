import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

import App2 from "./App";
import App from "./emlchk/App";

const rootElement = document.getElementById("root");
if (null !== rootElement) {
  const root = ReactDOMClient.createRoot(rootElement);

  root.render(
    <StrictMode>
      <div>
        <App2 />
        <App />
      </div>
    </StrictMode>
  );
}
