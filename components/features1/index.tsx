import React, { useRef, useEffect } from 'react';

export const Features1 = () => {
   const videoRef = useRef<HTMLVideoElement | null>(null);

   useEffect(() => {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

      if (isMobile && videoRef.current) {
         videoRef.current.play();
         videoRef.current.requestFullscreen().catch(err => {
            console.log('Error attempting to enable full-screen mode:', err);
         });
      }
   }, []);

    return (
        <div style={{ width: '100%', overflow: 'hidden' }}>
            <video
                ref={videoRef}
                style={{ width: '100%', height: 'auto' }}
                src="sideline_vid.mp4"
                controls
                autoPlay
                loop
                muted // Start muted to allow for autoplay
            >
                Sorry, your browser does not support embedded videos.
            </video>
        </div>
    );
};
