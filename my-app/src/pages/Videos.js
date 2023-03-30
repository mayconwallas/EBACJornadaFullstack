import React, {useRef, useState} from 'react'
import "./videos.css"

function Videos() {

    const videoRef = useRef(null)
    const [play, setPlay] = useState(false)

    function handdleStart() {

        if (play) {
            videoRef.current.pause();
            setPlay(false);
        } else {
            videoRef.current.play();
            setPlay(true);
        }
       
    }

  return (
    <div className='videos'>
        <video 
            className='video__player'
            ref={videoRef}
            onClick={handdleStart}
            loop
            src="https://firebasestorage.googleapis.com/v0/b/jornada2-eb156.appspot.com/o/brecker2.mp4?alt=media&token=b7e3ebf7-89a0-47a0-8a34-66f1176a71e3"
        >
        </video>
    </div>
  )
}

export default Videos