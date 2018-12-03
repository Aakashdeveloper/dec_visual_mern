import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Posts from './components/posts';
import Profile from './components/profile';

class App extends Component{
    render(){
        return (
                <div> Home</div>
            )
    }
}

ReactDOM.render(
        <BrowserRouter>
            <div>
                <Route exact path="/" component={App}></Route>
                <Route path="/posts" component={Posts}></Route>
                <Route path="/profile" component={Profile}></Route>
            </div>
        </BrowserRouter>, document.querySelector('#root'))