import React, { useRef, useEffect } from 'react';

export const Features1 = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        // Attempt to play the video as soon as the component mounts
        if (videoRef.current) {
            
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
