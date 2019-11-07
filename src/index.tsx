import React from 'react';
import ReactDOM from 'react-dom';
import 'react-notifications/lib/notifications.css';
import { AppInitializer } from './initializers/AppInitializer';
import App from './views/App';

(async () => {
	const appElement = document.getElementById('root');
	if (!!appElement) {
		AppInitializer.setup();
		const app = <App />;

		ReactDOM.render(app, appElement);
		await AppInitializer.init();
	}
})();
