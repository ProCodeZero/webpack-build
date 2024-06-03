import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './components/App';
import { LazyAbout } from './pages/About/About.lazy';
import { LazyShop } from './pages/Shop/Shop.lazy';

const root = document.getElementById('root');

if (!root) {
	throw new Error('root element not found');
}

const container = createRoot(root);

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/about',
				element: (
					<Suspense>
						<LazyAbout />
					</Suspense>
				),
			},
			{
				path: '/shop',
				element: (
					<Suspense>
						<LazyShop />
					</Suspense>
				),
			},
		],
	},
]);

container.render(<RouterProvider router={router} />);
