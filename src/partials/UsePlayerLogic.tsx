import { useEffect, useRef, useState, type RefObject } from "react";


export function usePlayerLogic(listZiks: any[], playerRef: RefObject<any>) {
    const [isRunning, setIsRunning] = useState(false);
    const [isRepeat, setIsRepeat] = useState(false);

    const [isDragging, setIsDragging] = useState(false);
    const [isVolumeDragging, setIsVolumeDragging] = useState(false);
    const [volumePercent, setVolumePercent] = useState(1);
    const [fillPercent, setFillPercent] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

    const volumeFullRef = useRef<HTMLDivElement>(null);
    const fullRef = useRef<HTMLDivElement>(null);
    const rectRef = useRef<DOMRect | null>(null);


    /** Calculate percentage with mouse position + rect utilities */
    const calculatePercentFromEvent = (
        event: MouseEvent | React.MouseEvent<HTMLDivElement>,
        rect: DOMRect
    ) => {
        const offsetX = event.clientX - rect.left;
        return Math.min(Math.max(offsetX / rect.width, 0), 1);
    };

    /** Play / Pause toggle */
    const handleStarStop = () => setIsRunning(p => !p);
    /** Zik next/prev */
    const handleNext = () => setCurrentTrackIndex(p => (p + 1) % listZiks.length);
    const handlePrevious = () =>
        setCurrentTrackIndex(p => (p === 0 ? listZiks.length - 1 : p - 1));


    /** Audio load */
    const handleOnLoad = () => {
        if (playerRef.current?.duration) {
            setDuration(playerRef.current.duration());
        }
    };

    /** When zik is end */
    const handleOnEnd = () => {
        if (isRepeat) {
            if (playerRef.current) {
                playerRef.current.seek(0);
                setIsRunning(true);
            }
        } else {
            handleNext();
        }
    };

    /** Upadte progression bar */
    const updateProgress = () => {
        if (!playerRef.current) return;
        const seek = playerRef.current.seek() || 0;
        const dur = playerRef.current.duration() || 0;
        setFillPercent(dur ? seek / dur : 0);
        setCurrentTime(seek);
    };

    /** Upadate resize */
    useEffect(() => {
        const updateRect = () => {
            if (fullRef.current) {
                rectRef.current = fullRef.current.getBoundingClientRect();
            }
        };
        updateRect();
        window.addEventListener("resize", updateRect);
        return () => window.removeEventListener("resize", updateRect);
    }, []);

    /** Click sur la barre de progression */
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!playerRef.current || !rectRef.current) return;
        const dur = playerRef.current.duration?.();
        if (!dur) return;
        const percent = calculatePercentFromEvent(event, rectRef.current);
        playerRef.current.seek(percent * dur);
        updateProgress();
    };

    /** Regular upadte of progress bar */
    useEffect(() => {
        if (!isRunning) return;
        const interval = setInterval(updateProgress, 250);
        return () => clearInterval(interval);
    }, [isRunning]);

    /** Volume click */
    const handleVolumeClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const percent = calculatePercentFromEvent(event, rect);
        setVolumePercent(percent);
        playerRef.current?.volume?.(percent);
    };

    /** Drag volume */
    const handleVolumeMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
        setIsVolumeDragging(true);
        handleVolumeMove(event);
    };
    const handleVolumeMove = (event: MouseEvent | React.MouseEvent<HTMLDivElement>) => {
        if (isVolumeDragging && volumeFullRef.current) {
            const rect = volumeFullRef.current.getBoundingClientRect();
            const percent = calculatePercentFromEvent(event, rect);
            setVolumePercent(percent);
            playerRef.current?.volume?.(percent);
        }
    };
    const handleVolumeMouseUp = () => setIsVolumeDragging(false);

    /** Global progression drag listener */
    const handleMouseDown = () => setIsDragging(true);
    const handleMouseMove = (event: MouseEvent) => {
        if (isDragging && fullRef.current) {
            const rect = fullRef.current.getBoundingClientRect();
            const percent = calculatePercentFromEvent(event, rect);
            playerRef.current?.seek?.(percent * playerRef.current.duration());
            updateProgress();
        }
    };
    const handleMouseUp = () => setIsDragging(false);

    /** Volume and progression bar listeners */
    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isDragging]);

    useEffect(() => {
        window.addEventListener("mousemove", handleVolumeMove);
        window.addEventListener("mouseup", handleVolumeMouseUp);
        return () => {
            window.removeEventListener("mousemove", handleVolumeMove);
            window.removeEventListener("mouseup", handleVolumeMouseUp);
        };
    }, [isVolumeDragging]);

    /** Bouton repeat */
    const handleRepeatClick = () => setIsRepeat(p => !p);

    /** Time format */
    const formatTime = (timeInSeconds: any) => {
        if (typeof timeInSeconds !== "number" || isNaN(timeInSeconds))
            return "0:00";
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };

    /** Session API  Media */
    useEffect(() => {
        if (!("mediaSession" in navigator) || !playerRef.current) return;
        navigator.mediaSession.setActionHandler("play", () => {
            setIsRunning(true);
            playerRef.current.play();
        });
        navigator.mediaSession.setActionHandler("pause", () => {
            setIsRunning(false);
            playerRef.current.pause();
        });
        navigator.mediaSession.setActionHandler("stop", () => {
            setIsRunning(false);
            playerRef.current.stop();
        });
        navigator.mediaSession.setActionHandler("seekbackward", (d: any) => {
            const c = playerRef.current.seek() || 0;
            playerRef.current.seek(Math.max(c - (d.seekOffset || 10), 0));
        });
        navigator.mediaSession.setActionHandler("seekforward", (d: any) => {
            const c = playerRef.current.seek() || 0;
            const dur = playerRef.current.duration() || 0;
            playerRef.current.seek(Math.min(c + (d.seekOffset || 10), dur));
        });
        navigator.mediaSession.setActionHandler("previoustrack", handlePrevious);
        navigator.mediaSession.setActionHandler("nexttrack", handleNext);
    }, [listZiks]); // dépendances utiles

    return {
        isRepeat, isRunning, currentTrackIndex,
        volumePercent, duration, currentTime, fillPercent,
        fullRef, volumeFullRef,
        handleStarStop, handleNext, handlePrevious,
        handleOnLoad, handleOnEnd, handleClick, handleMouseDown,
        handleRepeatClick, handleVolumeClick, handleVolumeMouseDown,
        formatTime
    };
}
