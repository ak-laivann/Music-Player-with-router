import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faForward, faBackward } from "@fortawesome/free-solid-svg-icons";
import './Controls.css';


const Controls = (props) => {

    return (
        <div className="buttons">
            <button className="skip-btn" onClick={() => props.SkipEl(false)}>
                <FontAwesomeIcon icon={faBackward} />
            </button>
            <button className="play-btn" onClick={() => props.setIsPlaying(!props.isPlaying)} >
                <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay } />
            </button>
            <button className="skip-btn" onClick={() => props.SkipEl()}>
                <FontAwesomeIcon icon={faForward} />
            </button>
        </div>
    );
}

export default Controls;