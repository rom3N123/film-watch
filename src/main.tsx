import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { Router } from './pages/index.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
		<Router />
	</MantineProvider>,
);
