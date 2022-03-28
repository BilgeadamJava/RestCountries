import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Detail from './Detail'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import {applyMiddleware, createStore} from 'redux'
import { Provider } from 'react-redux';
import {reducer} from "./reducers"
import thunk from "redux-thunk"

const store = createStore(reducer,applyMiddleware(thunk))


const router = 
<Provider store={store}>
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/detail/:name' element={<Detail />} />
    </Routes>
  </Router>
  </Provider>
ReactDOM.render(router,
  document.getElementById('root')
);

reportWebVitals();
