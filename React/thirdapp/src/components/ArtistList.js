import React, {Component} from 'react'
import { Link } from 'react-router-dom';

const ArtistList = (props) => {
    const list = ({allArtist}) => {
        if(allArtist){
            return allArtist.map((data, index) => {
                const style = {
                    background:`url('/images/covers/${data.cover}.jpg') no-repeat`
                }
                return(
                   <Link key={data.id} to={`/artist/${data.id}`} 
                        className="artist_item"
                        style={style}>

                        <div>{data.name}</div>
                        
                   </Link>
                )
            })
        }
    }

    return(
        <div className="artist_list">
            <h4>Browse The Artists</h4>
            {list(props)}
        </div>
    )
}

export default ArtistList;


/*
var a = 10
var b = "my age is "+ a
my age is 10

var b = `my age is ${a}`
*/
