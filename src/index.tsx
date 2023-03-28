import { createRoot } from "react-dom/client";
import { App } from "./App";

const appRootSelector = ".app";
const appRoot = document.querySelector(appRootSelector);

if (appRoot) {
    const reactRoot = createRoot(appRoot);
    reactRoot.render(<App />);
}
