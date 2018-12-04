import React, {Component} from 'react';

class PostsDetail extends Component{
    constructor(props){
        super(props)
    }
    render(){

        console.log(this.props)
        return (
            <div class="panel panel-danger">
                <div class="panel-heading">PostsDetail</div>
                <div class="panel-body">
                    PostsDetail Panel Content for {this.props.match.params.name}
                </div>
            </div>
        )
    }
}

export default PostsDetail;