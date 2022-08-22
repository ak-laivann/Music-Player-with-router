import React from "react";
import './Details.css';

const Details = (props) => {

    return (
        <div>
            <div className="image">
                <img src={props.song.img_src} alt="" />
            </div>
            <br />
            <br />
            <br />
            <h3 className="details">{props.song.title} by {props.song.artist}</h3>
        </div>
    );
}

export default Details; 