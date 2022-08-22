import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Intro from './components/Intro';
import Player from './components/Player';


function App() {

  const [songs] = useState( [
    {
      title: "Agent Tina",
      artist: "Anirudh Ravichander",
      img_src: "https://1480864561.rsc.cdn77.org/assets/news_images/kamal-haasan-in-vikram-movie-agent-tina-promo-video-lokesh-kanagaraj_1655633685.jpg",
      src: "./music/Agent-Tina.mp3"
    },
    {
      title: "Rolex",
      artist: "Anirudh Ravichander",
      img_src: "./images/rolex.jpg",
      src: "./music/Rolex-Theme.mp3"
    },
    {
      title: "Agent Vikram",
      artist: "Anirudh Ravichander",
      img_src: "./images/agent_vikram.jpg",
      src: "./music/Agent-Vikram.mp3"
    },
    {
      title: "Porkanda Singam",
      artist: "Anirudh Ravichander",
      img_src: "./images/porkandam_singam.jpg",
      src: "./music/Porkanda-Singam.mp3"            
    }, 
    {
      title: "Lokiverse",
      artist: "Anirudh Ravichander",
      img_src: "./images/lokiverse.jpg",
      src: "./music/Lokiverse.mp3"
    }
  ])

  const [currentSongIndex, setCurrentSongIndex ] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect ( () => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1){
        return 0;
      } else {
        return currentSongIndex + 1;
      } 
    })
  }, [currentSongIndex] );

  return (
    <Routes>
      <Route path='/' element={<Intro />} />
      <Route path='/Player' element={
      <Player 
        currentSongIndex = {currentSongIndex}
        setCurrentSongIndex = {setCurrentSongIndex}
        nextSongIndex = {nextSongIndex}
        songs = {songs}
      />} />
    </Routes>
  );
}

export default App;
