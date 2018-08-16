import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './Work.css';
import './Notes.css';
import './App.css';
import registerServiceWorker from './registerServiceWorker';
import AppRouter from './routers/AppRouter';



ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();


