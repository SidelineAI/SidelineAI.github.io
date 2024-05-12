import React, { useRef, useEffect } from 'react';

export const Features1 = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        // Attempt to play the video as soon as the component mounts
        if (videoRef.current) {
            videoRef.current.play().catch(err => {
                // Handle the case where the user hasn't interacted yet
                console.log("Autoplay was prevented: ", err);
            });
        }
    }, []);

    const handlePlayAndUnmute = () => {
        if (videoRef.current) {
            videoRef.current.muted = false; // Unmute the video
            videoRef.current.play().catch(err => {
                console.log("Play was prevented on unmute: ", err);
            });
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
                muted // Start muted to allow for autoplay
            >
                Sorry, your browser does not support embedded videos.
            </video>
            
        </div>
    );
};
