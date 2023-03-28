import React from "react";
import Slider from "@mui/material/Slider";
import { timeFormatter } from "../utils/timeFormatter";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
const ProgressBar = ({
  audioRef,
  timeProgress,
  duration,
  setValue,
  value,
  volume,
  setVolume,
}) => {
  const handleProgressChange = (_, value) => {
    audioRef.current.currentTime = value;
    setValue(value);
  };

  const handleVolumeChange = (_, value) => {
    audioRef.current.volume = value / 100;
    setVolume(value);
  };

  return (
    <>
      <div className="flex items-center text-white gap-4">
        <span className="text-xs">{timeFormatter(timeProgress)}</span>
        <Slider
          defaultValue={0}
          max={duration}
          onChange={handleProgressChange}
          size="small"
          value={value}
        />
        <span className="text-xs">{timeFormatter(duration)}</span>
      </div>
      <div className="ml-auto flex items-center text-white gap-4 w-1/2">
        <VolumeOffIcon />
        <Slider
          min={0}
          max={100}
          onChange={handleVolumeChange}
          value={volume}
        />
        <VolumeUpIcon />
      </div>
    </>
  );
};

export default ProgressBar;
