import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Switch,Route} from 'react-router-dom'
import './index.css';
import App from './App';
import Login from './view/login'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <HashRouter>
        <Switch>
          <Route path="/App" component={App}  / >
          <Route path="/" component={Login} exact / >
        </Switch>
    </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
