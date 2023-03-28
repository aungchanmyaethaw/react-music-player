import React, { useCallback, useEffect, useRef } from "react";

const DisplayTrack = ({
  currentTrack,
  audioRef,
  isPlaying,
  setDuration,
  duration,
  setMax,
  setTimeProgress,
  progressBarRef,
  setValue,
  handleNextSong,
}) => {
  const playAnimationRef = useRef();

  const repeat = useCallback(() => {
    const currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime);
    setValue(currentTime);
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef]);

  const onLoadedMetaData = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
  };

  const onEnded = () => {
    audioRef.current.pause();
  };

  return (
    <div className="flex flex-col gap-4 items-center mb-4">
      <audio
        src={currentTrack.src}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetaData}
        onEnded={handleNextSong}
      />
      <img
        src={currentTrack.thumbnail}
        className="w-[6rem] h-[6rem] object-fill"
      />
      <div>
        <p className="text-white text-lg font-semibold">{currentTrack.title}</p>
      </div>
    </div>
  );
};

export default DisplayTrack;
