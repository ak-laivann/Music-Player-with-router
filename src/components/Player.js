import React, { useState, useRef, useEffect } from 'react';
import './Player.css';
import Details from './Details';
import Controls from './Controls'; 

const Player = (props) => {
  
    const audioEl = useRef(null)
    
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect ( () => {
        if (isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    })

    const SkipEl = ( forwards = true) => {
        if (forwards) {
            props.setCurrentSongIndex( () => {
                let temp = props.currentSongIndex;
                temp++;

                if (temp > props.songs.length - 1) {
                    temp = 0
                }
                return temp;
            })
        } else {
            props.setCurrentSongIndex( () => {
                let temp = props.currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = props.songs.length -1
                }
                return temp;
            })
        }
    }

    return (
        <div className='player'>
            <audio src={props.songs[props.currentSongIndex].src} ref={audioEl} ></audio>
            <h2> Playing Now </h2>
            <Details 
                song={props.songs[props.currentSongIndex]}
            />
            <Controls 
                isPlaying = {isPlaying}
                setIsPlaying = {setIsPlaying}
                SkipEl = {SkipEl}  
            />
            <p><strong>Next Up: &emsp;</strong> {props.songs[props.nextSongIndex].title} by  {props.songs[props.nextSongIndex].artist}</p>
        </div>
  )
}

export default Player;