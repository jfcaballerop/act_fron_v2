import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createHistory, useBasename } from 'history'
import createBrowserHistory from 'history/createBrowserHistory'



// Routes
import App from "./containers/App";

import registerServiceWorker from './registerServiceWorker';

// const history = useRouterHistory(createHistory)({
// 	basename: '/'
// })
const history = createBrowserHistory({
	basename: '/'
})

ReactDOM.render(

	<Router history={history}>
		<App />
	</Router>,
	document.getElementById('root')
);

registerServiceWorker();