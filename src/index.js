// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from "./component/app.component";

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<App />);

if (module.hot) {
    module.hot.accept();
}