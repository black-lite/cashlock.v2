import { createRoot } from "react-dom/client";

import "./style/main.scss";
import App from "./components/App";
import {params} from "./params/Params";

console.log(params);

params.call('xhr/a/', (data) => console.log(data), (data) => console.error(data));

const root = document.getElementById('root');
if (!root) throw new Error('Root not found');

const container = createRoot(root);

container.render(<App />);