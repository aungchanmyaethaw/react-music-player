import React from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import FastForwardIcon from "@mui/icons-material/FastForward";
import FastRewindIcon from "@mui/icons-material/FastRewind";
const Controls = ({
  isPlaying,
  setIsPlaying,
  handleFastForward,
  handleFastRewind,
  handleNextSong,
  handlePrevSong,
}) => {
  return (
    <div className="flex items-center gap-8 mb-4">
      <button onClick={handlePrevSong}>
        <SkipPreviousIcon color="primary" fontSize="large" />
      </button>
      <button onClick={handleFastRewind}>
        <FastRewindIcon color="primary" fontSize="large" />
      </button>
      <button onClick={() => setIsPlaying((prev) => !prev)}>
        {isPlaying ? (
          <PauseCircleIcon color="primary" fontSize="large" />
        ) : (
          <PlayCircleIcon color="primary" fontSize="large" />
        )}
      </button>
      <button onClick={handleFastForward}>
        <FastForwardIcon color="primary" fontSize="large" />
      </button>
      <button onClick={handleNextSong}>
        <SkipNextIcon color="primary" fontSize="large" />
      </button>
    </div>
  );
};

export default Controls;
