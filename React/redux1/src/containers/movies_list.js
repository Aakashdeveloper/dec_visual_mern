import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
 
class MoviesList extends Component{

  componentWillMount(){
    this.props.moviesList()
  }
  renderList = (movies) => {
      if(movies){
        return movies.map((item, index) => {
          return(
            <div key={index}>{item.name}</div>
          )
        })
      }
      
  }

  render(){
    return(
      <div>
        <div>{this.renderList(this.props.movies)}</div>
      </div>
    )
  }
}

function mapStateToProps(state){
  console.log(state)
  return{
    movies:state.movies
  }
}
export default connect(mapStateToProps,actions)(MoviesList);