import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'

import reducers from './reducers';

import App from './App';

const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App/>
    </Provider>
    , document.getElementById('root'));



    /*
    mul(2)(3)(4)

    function mul(a){
        return function (b){
            return function(c){
                return a*b*c
            }
        }
    }

    */