import React, {Component} from 'react';
import { connect } from 'react-redux';
import { latestNews, otherNews, latestGallery } from '../actions';
import { bindActionCreators } from 'redux';

import LatestNews from '../components/home/Latest';
import OtherNews from '../components/home/Other';
import Gallery from '../components/home/Gallery';

class Home extends Component {

    componentDidMount(){
        this.props.latestNews();
        this.props.otherNews();
        this.props.latestGallery();
    }

    render(){
        return(
            <div>
                <LatestNews latest={this.props.articles.latest}/>
                <OtherNews otherNews={this.props.articles.other}/>
                <Gallery gallery={this.props.gallery.latestGallery}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        articles: state.articles,
        gallery: state.gallery
    }
}

function mapDispatchProps(disptach){
    return bindActionCreators({latestNews, otherNews, latestGallery}, disptach)
}

export default connect(mapStateToProps, mapDispatchProps) (Home);