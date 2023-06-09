import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Film = () => {
	const { filmId } = useParams<{ filmId: string }>();

	useEffect(() => {
		const script = document.createElement('script');
		script.src = 'https://yohoho.cc/yo.js';
		document.body.appendChild(script);
		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return (
		<>
			<div
				style={{ width: '100%', height: '100%' }}
				id="yohoho"
				data-kinopoisk={filmId}></div>
		</>
	);
};
