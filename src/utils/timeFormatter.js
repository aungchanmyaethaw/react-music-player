export const timeFormatter = (time) => {
  if (time && !isNaN(time)) {
    const minutes = Math.floor(time / 60);
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(time % 60);
    const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${formattedMinutes}:${formattedSeconds}`;
  }

  return "00:00";
};
