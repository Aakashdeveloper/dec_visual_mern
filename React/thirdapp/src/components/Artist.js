import React, { Component } from 'react';

import Header from './Header';
import AlbumList from './albumList';

const URL = 'http://localhost:8900/artists';

class Artist extends Component {
    constructor(props){
        super(props);

        this.state = {
            artist:''
        }
    }
    componentDidMount(){
        console.log(this.props.match.params.artistid)
        fetch(`${URL}/${this.props.match.params.artistid}`,{
            method:'GET'
        })
        .then(response => response.json())
        .then(json => {
            this.setState({
                artist:json
            })
        })
    }
    render(){
        return(
            <div>
                <Header></Header>
                <div className="artist_bio">
                    <div className="artist_image">
                        <span style={{background:`url('/images/covers/${this.state.artist.cover}.jpg') no-repeat`}}></span>
                    </div>
                    <div className="bio">
                        <h3>{this.state.artist.name}</h3>
                        <div className="bio_text">
                            {this.state.artist.bio}
                        </div>
                    </div>
                    <AlbumList albumList={this.state.artist.albums}/>
                </div>
            </div>
        )
    }
}

export default Artist;