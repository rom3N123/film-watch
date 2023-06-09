import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { EnterFilmPage } from './enterFilmPage';
import { FilmPage } from './filmPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <EnterFilmPage />,
	},
	{
		path: '/:filmId',
		element: <FilmPage />,
	},
]);

export const Router = () => {
	return <RouterProvider router={router} />;
};
