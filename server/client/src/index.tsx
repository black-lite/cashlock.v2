import { createRoot } from "react-dom/client";
import { Main } from "./components/Main/Main";

import "./style/main.scss";
import App from "./components/App";
import {BrowserRouter, createBrowserRouter, Link} from "react-router-dom";

const root = document.getElementById('root');
if (!root) throw new Error('Root not found');

const container = createRoot(root);

// const router = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <App />,
// 		children: [
// 			{
// 				path: '/add',
// 				element: <h2>ADD</h2>,
// 			}
// 		]
// 	}
// ])

container.render(<App />);