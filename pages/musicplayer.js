import Head from "next/head";
import React from "react";
import Player from "../components/Player";
function MusicPlayer() {
  return (
    <div>
      <Head>
        <title>Music Player</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&family=Roboto+Flex:opsz,wght@8..144,300&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      ;
      <Player />
    </div>
  );
}

export default MusicPlayer;
