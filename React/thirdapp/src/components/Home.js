import React, {Component} from 'react';

import Banner from './Banner';
import ArtistList from './ArtistList'

const URL = 'http://localhost:8900/artists';

class Home extends Component {
    constructor(props){
        super(props)

        this.state = {
            artists: ''
        }
    }

    componentDidMount(){
        fetch(URL,{
            method: 'GET'
        })
        .then(response => response.json())
        .then(json =>
            this.setState({
                artists:json
            })
        )
    }

    render(){
        return(
            <div>
                <Banner/>
                <ArtistList allArtist={this.state.artists}></ArtistList>
            </div>
        )
    }
}

export default Home;