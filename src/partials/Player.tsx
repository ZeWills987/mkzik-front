import { useEffect, useRef, useState } from 'react';
import ReactHowler from 'react-howler';

import audioFile1 from '../assets/audio/YOU • PNM [ REMIX ] 🎧.mp3';
import audioFile2 from '../assets/audio/ALWAYS BEEN YOU.mp3';
import audioFile3 from '../assets/audio/PNM - IDFC.mp3';
import audioFile4 from '../assets/audio/J trace Mon Badada - (HMK REMIX) 2024.mp3';
import audioFile5 from '../assets/audio/Lets Go.mp3';
import audioFile6 from '../assets/audio/The Weeknd – Timeless with Playboi Carti (Official Music Video).mp3';
import audioFile7 from '../assets/audio/Un dernier sourire.mp3';

import image from "../assets/image/image.jpg";
import { usePlayerLogic } from './UsePlayerLogic';

function Player() {

    // Ziks lists for test
    const listZiks = [
        {
            title: "YOU • PNM [ REMIX ] 🎧",
            author: "PNM",
            src: audioFile1
        },
        {
            title: "ALWAYS BEEN YOU",
            author: "PNM",
            src: audioFile2
        },
        {
            title: "PNM - IDFC",
            author: "PNM",
            src: audioFile3
        }
        , {
            title: "J trace Mon Badada - (HMK REMIX) 2024.mp3",
            author: "HMK",
            src: audioFile4
        }, {
            title: "Lets Go",
            author: "Inconnu",
            src: audioFile5
        }, {
            title: "The Weeknd – Timeless with Playboi Carti (Official Music Video)",
            author: "The Weekend",
            src: audioFile6
        }, {
            title: "Un dernier sourire",
            author: "Inconnue",
            src: audioFile7
        }
    ];

    // Player
    const playerRef = useRef<any>(null);

    // States vars
    const {
        isRepeat,
        isRunning,
        currentTrackIndex,
        volumePercent,
        duration, currentTime,
        fillPercent, fullRef,
        handleStarStop,
        handleNext,
        handlePrevious, handleOnLoad, handleOnEnd,
        handleClick, handleMouseDown, handleRepeatClick,
        handleVolumeClick, handleVolumeMouseDown, formatTime
    } = usePlayerLogic(listZiks, playerRef);


    // Audio data
    const volumeFullRef = useRef<HTMLDivElement>(null);

    const audioTitle = listZiks[currentTrackIndex].title;
    const audioAuhtor = listZiks[currentTrackIndex].author;

    return (
        <>
            <ReactHowler
                src={listZiks[currentTrackIndex].src}
                playing={isRunning}
                onEnd={handleOnEnd}
                onLoad={handleOnLoad}
                html5={true}
                volume={volumePercent}
                loop={false}
                ref={playerRef}
            />
            <div className="player">
                <div className="current-zik flex align-items-center gap-10">
                    <img src={image} alt="" />
                    <div className="flex flex-col gap-5">
                        <a href=""><h4 className="title">{audioTitle}</h4></a>
                        <a href=""><p>{audioAuhtor}</p></a>
                    </div>
                </div>
                <div className="control-player">
                    <div className="control">
                        <button className="previous" onClick={handlePrevious}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M19 20L9 12L19 4V20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M5 19V5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </button>
                        <button className="play-pause" onClick={handleStarStop}>
                            {isRunning ?
                                <div className="pause">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" id="pause-icon">
                                        <path d="M6 4H10V20H6V4Z" fill="currentColor"></path>
                                        <path d="M14 4H18V20H14V4Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                                :
                                <div className="play">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" id="play-icon">
                                        <path d="M8 5V19L19 12L8 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </div>
                            }
                        </button>
                        <button className="next" onClick={handleNext}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M5 4L15 12L5 20V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M19 5V19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="duration">
                        <p className="current-time">{formatTime(currentTime)}</p>
                        <div className="range-time" onMouseDown={handleMouseDown} onClick={handleClick} ref={fullRef}>
                            <div className="current" style={{ width: `${fillPercent * 100}%`, }}></div>
                        </div>
                        <p className="end-time">{formatTime(duration)}</p>
                    </div>
                </div>
                <div className="more-controls">
                    <button className={isRepeat ? "active " + "reapat" : "reapat"} onClick={handleRepeatClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="20" height="20" x="0" y="0" viewBox="0 0 512 512">
                            <g>
                                <path d="M20 346.912a20 20 0 0 1-20-20V185.088A102 102 0 0 1 101.887 83.2h268.78l-28.961-28.959a20 20 0 0 1 28.285-28.284l63.1 63.1a20 20 0 0 1 0 28.284l-64.975 64.975a20 20 0 1 1-28.285-28.285l30.836-30.831h-268.78A61.957 61.957 0 0 0 40 185.088v141.824a20 20 0 0 1-20 20zm472-181.824a20 20 0 0 0-20 20v141.824a61.957 61.957 0 0 1-61.887 61.888h-268.78l30.833-30.832a20 20 0 1 0-28.285-28.285l-64.975 64.973a20 20 0 0 0 0 28.285l63.1 63.1a20 20 0 0 0 28.285-28.285L141.333 428.8h268.78A102 102 0 0 0 512 326.912V185.088a20 20 0 0 0-20-20z" fill="#000000" opacity="1" data-original="#000000"></path>
                            </g>
                        </svg>
                    </button>
                    <button className="random">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="20" height="20" x="0" y="0" viewBox="0 0 128 128">
                            <g>
                                <path d="M31.648 40H12a4 4 0 0 1 0-8h19.648a28.058 28.058 0 0 1 22.785 11.725l4.651 6.511-4.916 6.882-6.245-8.743A20.038 20.038 0 0 0 31.648 40zm87.18 49.172-16-16c-1.563-1.563-4.094-1.563-5.656 0s-1.563 4.094 0 5.656L106.344 88h-9.992a20.04 20.04 0 0 1-16.275-8.375l-6.245-8.743-4.916 6.882 4.651 6.511A28.056 28.056 0 0 0 96.352 96h9.992l-9.172 9.172a3.997 3.997 0 0 0 0 5.656c.781.781 1.805 1.172 2.828 1.172s2.047-.391 2.828-1.172l16-16a3.997 3.997 0 0 0 0-5.656zm0-56-16-16c-1.563-1.563-4.094-1.563-5.656 0s-1.563 4.094 0 5.656L106.344 32h-9.992a28.06 28.06 0 0 0-22.787 11.727L47.926 79.623A20.044 20.044 0 0 1 31.648 88H12a4 4 0 0 0 0 8h19.648a28.06 28.06 0 0 0 22.787-11.727l25.639-35.896A20.044 20.044 0 0 1 96.352 40h9.992l-9.172 9.172a3.997 3.997 0 0 0 0 5.656C97.953 55.609 98.977 56 100 56s2.047-.391 2.828-1.172l16-16a3.997 3.997 0 0 0 0-5.656z" fill="#000000" opacity="1" data-original="#000000"></path>
                            </g>
                        </svg>
                    </button>
                </div>
                <div className="volume-control">
                    <button className="mute">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M19.07 4.93C20.9447 6.80528 21.9979 9.34836 21.9979 12C21.9979 14.6516 20.9447 17.1947 19.07 19.07M15.54 8.46C16.4774 9.39764 17.0039 10.6692 17.0039 12C17.0039 13.3308 16.4774 14.6024 15.54 15.54" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </button>
                    <div className="padding-vol">
                        <div className="volume-range" onMouseDown={handleVolumeMouseDown}
                            ref={volumeFullRef} onClick={handleVolumeClick}>
                            <div className="current" style={{
                                width: `${volumePercent * 100}%`,
                            }}>
                            </div>
                            <div className="full">
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Player;

