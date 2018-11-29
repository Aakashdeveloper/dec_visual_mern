import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import NewsList from './components/News_list';

const App = () => {
    return (
        <div>
            <Header/>
           <NewsList></NewsList>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))









/*

functional (stateless)
light in weight and less functionality

function add(a,b){
    return a+b
}

let add = (a,b) => {
    return a+b
}
Class based(stateful)
bit heavy as compare to functional but more functionality

state & props

JSX
*/
