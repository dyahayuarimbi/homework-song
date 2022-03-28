import React from 'react';
import data from "../data/dataAlbum";

const Music= ()=> {
    return (
        <div className="Music">
            {data.map((data) => (
                <center>
                <div key= {data.id}>
                    <img className="music_img" id="albumImage" src={data.album.images[0].url} alt="albumImage"/>
                    <h1 className="music_album">{data.name}</h1>
                    <h2 className="music_artist">{data.artists[0].name}</h2>
                    <input type="submit" id="btn-submit" value="Select"/>
                    <hr align="center" width="auto" height="1px" color="black" size="2"></hr>
                </div>
                </center>
            ))}
      </div>
    )
};

export default Music;