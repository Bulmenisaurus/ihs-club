import React from "react";

import { createRoot } from "react-dom/client";
import { App } from "./Pages/App";

import "./Styles/App.css";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
