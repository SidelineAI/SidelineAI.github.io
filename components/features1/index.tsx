import React, { useRef, useEffect, useState } from 'react';

export const Features1 = () => {
    const videoRef = useRef(null);
    const [showPlayButton, setShowPlayButton] = useState(false); // State to show play button if autoplay fails

   useEffect(() => {
      const playVideo = async () => {
         if (videoRef.current) {
            try {
               await (videoRef.current as HTMLVideoElement).play();
            } catch (err) {
               console.error("Autoplay failed: ", err);
               setShowPlayButton(true); // Show play button if autoplay fails
            }
         }
      };

      playVideo();
   }, []);

   const handleManualPlay = () => {
      if (videoRef.current) {
         (videoRef.current as HTMLVideoElement).play().catch(err => {
            console.error("Play failed on user interaction: ", err);
         });
         setShowPlayButton(false); // Assume the user can start the video, hide the button
      }
   };

    return (
        <div style={{ width: '100%', overflow: 'hidden' }}>
            <video
                ref={videoRef}
                style={{ width: '100%', height: 'auto' }}
                src="sideline_vid.mp4"
                controls
                autoPlay
                loop
                muted
            >
                Sorry, your browser does not support embedded videos.
            </video>
            {showPlayButton && (
                <button onClick={handleManualPlay} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    Play Video
                </button>
            )}
        </div>
    );
};
