import React from 'react';

const Music=({title,artist,img})=> {
    return (
        <div className="Music">
            <center>
            <div className='music-wrapper'>
                <img src={img} all={title} className="music_img"/>

                <h3 className="music_album">{title}</h3>
                <h3 className="music_artist">{artist}</h3>
            </div>
            <div className='btn_wrapper'>
                <input type="submit" id="btn-submit" value="Select" />
            </div>
            </center>
        </div>
    )
}

export default Music;