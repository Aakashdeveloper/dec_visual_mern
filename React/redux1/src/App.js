import React, { Component } from 'react';
import  Header  from './components/Header';
import MoviesList from './containers/movies_list'
 
class App extends Component{


  render(){
    return(
      <div>
        <Header/>
        <MoviesList/>
      </div>
    )
  }
}


export default App;
