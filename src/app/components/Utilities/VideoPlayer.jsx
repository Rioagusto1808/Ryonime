"use client"

import React, { useState } from 'react'
import YouTube from 'react-youtube'
import { X } from '@phosphor-icons/react'

const VideoPlayer = ({youtubeId}) => {
    const [isOpen, setIsOpen] =useState(true)
    const handleVideoPlayer = () =>{
        setIsOpen(prevState => !prevState) 
    }
    const option = {
        width : "300",
        height : "250"
    }

    const Player = () => {
        return(
        <div className='fixed bottom-0 right-0'>
        <button className='text-color-primary float-right p-2 bg-color-secondary px-3 mb-1'
        onClick={handleVideoPlayer}><X size={15} /></button>
        <YouTube videoId={youtubeId} 
        onReady={(event) => event.target.pauseVideo()}
        opts={option}
        />
    </div>
        )
    }
    const Trailer = () => {
        return(
        <button onClick={handleVideoPlayer} className='fixed bottom-5 right-5 w-32 bg-color-primary text-color-dark text-xl hover:bg-color-accent transition-all shadow-xl rounded'>Tonton Trailer
</button>
        )
    }
  return isOpen ? <Player/> : <Trailer/>
}

export default VideoPlayer
// Readme
// untuk VideoPlayer Youtube install "npm i --save react-youtube" diterminal 
// "onReady={(event) => event.target.pauseVideo()" digunakan untuk mempause video ketika user memasuki page detail anime agar tidak menggangu
