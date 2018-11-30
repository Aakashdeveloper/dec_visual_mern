import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import NewsList from './components/News_list';
import JSON from './db.json'

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            news: JSON
        }
    }
    render(){
        return (
            <div>
                <Header/>
                 <NewsList sendNews={this.state.news}></NewsList>
            </div>
        )
    }
    
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
