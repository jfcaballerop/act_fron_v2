import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createHistory } from 'history'

const history = useRouterHistory(createHistory)({
	basename: '/'
})

// Routes
import App from "./containers/App";

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
	<Router history={history}>
		<App />
	</Router>,
	document.getElementById('root')
);

registerServiceWorker();