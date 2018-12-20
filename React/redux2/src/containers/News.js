import React, { Component} from 'react';
import { connect } from 'react-redux';
import { selectedNews, clearselectedNews} from '../actions'
import { bindActionCreators} from 'redux';

class News extends Component{
    componentDidMount(){
        this.props.selectedNews(this.props.match.params.id)
    }

    componentWillUnmount(){
        this.props.clearselectedNews();
    }
    renderNews = ({selected}) =>{
        console.log(selected)
        if(selected){
            return selected.map((item)=>{
                return(
                    <div key={item.id}>
                        <div className="tags">
                                <span>
                                    <i className="fa fa-eye" aria-hidden="true"></i> {item.views}
                                </span>
                                <span>
                                    <i className="fa fa-thumbs-up" aria-hidden="true"></i> {item.likes[0]}
                                </span>
                                <span>
                                    <i className="fa fa-thumbs-down" aria-hidden="true"></i> {item.likes[1]}
                                </span>
                        </div>
                        <div className="top">
                            <h2>{item.title}</h2>
                            <span>Article by: <strong>{item.author}</strong></span>
                        </div>
                        <img alt={item.title} src={`/images/articles/${item.img}`}/>
                        <div className="body_news">
                            {item.body}
                        </div>
                    </div>
                )
            })
        }
    }
    render(){
        return(
            <div className="news_container">
                {this.renderNews(this.props.articles)}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        articles:state.articles
    }
}

function mapDispatchToProps(disptach){
    return bindActionCreators({selectedNews, clearselectedNews}, disptach)
}

export default connect(mapStateToProps, mapDispatchToProps)(News);