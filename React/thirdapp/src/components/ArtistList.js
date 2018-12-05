import React, {Component} from 'react'

const ArtistList = (props) => {
    const list = ({allArtist}) => {
        if(allArtist){
            return allArtist.map((data) => {
                return(
                    <div>Hii</div>
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