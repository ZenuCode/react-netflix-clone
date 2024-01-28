import React from "react";

const HomeInfo = ({ id, topText, botText, mediaImg, mediaVideo }) => {
    const isOdd = id % 2 === 1;
    const hasVideo = !!mediaVideo;

    return (
        <div className="mid-element">
            <div className="mid-text" style={{ order: isOdd ? 0 : 1 }}>
                <p className="mid-top-text">{topText}</p>
                <p className="mid-bot-text">{botText}</p>
            </div>
            <div className="mid-media" style={{ order: isOdd ? 1 : 0 }}>
                <img className="mid-img" alt="" src={mediaImg} />
                {hasVideo && (
                    <video className={isOdd ? "mid-video" : "mid-video-two"} autoPlay={true} playsInline muted loop>
                        <source src={mediaVideo} type="video/mp4" />
                    </video>
                )}
            </div>
        </div>
    );
};

export default HomeInfo;
