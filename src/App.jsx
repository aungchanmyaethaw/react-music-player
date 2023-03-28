import React, { useState } from "react";
import { css } from "@emotion/react";

import AudioPlayer from "./components/AudioPlayer";

const App = () => {
  return (
    <main css={styles.mainContainer}>
      <AudioPlayer />
    </main>
  );
};

export default App;

const styles = {
  mainContainer: css`
    max-width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    display: grid;
    place-items: center;
    background-color: #f5f5f5;
  `,
};
