import { createRoot } from "react-dom/client";
import { Main } from "@/components/Main/Main";

const root = document.getElementById('root');
if (!root) throw new Error('Root not found');

const container = createRoot(root);

// const router = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <Main.tsx />,
// 		children: [
// 			{
// 				path: '/about',
// 				element: <Suspense fallback={'Loading...'}><LazyAbout/></Suspense>,
// 			},
// 			{
// 				path: '/shop',
// 				element: <Suspense fallback={'Loading...'}><LazyShop /></Suspense>,
// 			}
// 		]
// 	}
// ])

container.render(<Main />);