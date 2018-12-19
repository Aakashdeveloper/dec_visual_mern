import React, {Component} from 'react';
import { connect } from 'react-redux';
import { latestNews, otherNews } from '../actions';
import { bindActionCreators } from 'redux';

import LatestNews from '../components/home/Latest';
import OtherNews from '../components/home/Other'

class Home extends Component {

    componentDidMount(){
        this.props.latestNews()
        this.props.otherNews();
    }

    render(){
        return(
            <div>
                <LatestNews latest={this.props.articles.latest}/>
                <OtherNews otherNews={this.props.articles.other}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        articles: state.articles
    }
}

function mapDispatchProps(disptach){
    return bindActionCreators({latestNews, otherNews}, disptach)
}

export default connect(mapStateToProps, mapDispatchProps) (Home);