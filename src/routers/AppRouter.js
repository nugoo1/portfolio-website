import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import MyWork from '../components/MyWork';
import Notes from '../components/Notes';


const AppRouter = () => (
        <BrowserRouter> 
            <Switch>
                <Route path="/" component={App} exact={true}/>
                <Route path="/work" component={MyWork}/>
                <Route path="/notes" component={Notes}/>
            </Switch>
        </BrowserRouter>
    
);

export default AppRouter;


