import { css } from "@emotion/react";
import React, { useEffect, useRef, useState } from "react";
import { tracks } from "../data/db";
import Controls from "./Controls";
import DisplayTrack from "./DisplayTrack";
import ProgressBar from "./ProgressBar";

const AudioPlayer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeProgress, setTimeProgress] = useState(0);
  const [value, setValue] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(50);

  const audioRef = useRef();

  const handleFastForward = () => {
    audioRef.current.currentTime += 10;
  };

  const handleFastRewind = () => {
    audioRef.current.currentTime -= 10;
  };

  const handleNextSong = () => {
    if (currentIndex >= tracks.length - 1) {
      setCurrentIndex(0);
      setCurrentTrack(tracks[0]);
    } else {
      setCurrentIndex((prev) => prev + 1);
      setCurrentTrack(tracks[currentIndex + 1]);
    }
    setIsPlaying(false);
  };

  const handlePrevSong = () => {
    if (currentIndex <= 0) {
      setCurrentIndex(tracks.length - 1);
      setCurrentTrack(tracks[tracks.length - 1]);
    } else {
      setCurrentIndex((prev) => prev - 1);
      setCurrentTrack(tracks[currentIndex - 1]);
    }
    setIsPlaying(false);
  };

  return (
    <section css={styles.playercontainer}>
      <DisplayTrack
        currentTrack={currentTrack}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setDuration={setDuration}
        setTimeProgress={setTimeProgress}
        duration={duration}
        setValue={setValue}
        handleNextSong={handleNextSong}
      />
      <Controls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        handleNextSong={handleNextSong}
        handlePrevSong={handlePrevSong}
        handleFastForward={handleFastForward}
        handleFastRewind={handleFastRewind}
      />
      <ProgressBar
        audioRef={audioRef}
        timeProgress={timeProgress}
        setValue={setValue}
        value={value}
        duration={duration}
        volume={volume}
        setVolume={setVolume}
      />
    </section>
  );
};

export default AudioPlayer;

const styles = {
  playercontainer: css`
    padding: 1rem;
    border-radius: 8px;
    background-color: #1e293b;
  `,
};
