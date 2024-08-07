import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/loading-animation.json';

const Loading = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className="loading-container">
            {/* <h2>Loading...</h2> */}
            <Lottie options={defaultOptions} height={400} width={400} />
        </div>
    );
};

export default Loading;