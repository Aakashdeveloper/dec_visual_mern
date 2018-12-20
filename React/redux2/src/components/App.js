import React, {Component} from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from '../containers/Home'
import Header from './Header';
import Footer from './Footer';

import Galleries from '../containers/Galleries';
import News from '../containers/News';


class App extends Component {
  render(){
    return (
     <BrowserRouter>
        <div>
          <Header/>
          <Switch>
            <Route path="/news/:id" component={News}/>
            <Route path="/galleries/:id" component={Galleries}/>
            <Route exact path="/" component={Home}/>
          </Switch>

        </div>
     </BrowserRouter>
    )
  }
  
}

export default App;
