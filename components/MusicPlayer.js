import React from "react";
import SpotifyWebPlayer from "react-spotify-web-playback/lib";

export default function MusicPlayer({ accessToken, trackUri }) {
  return (
    <SpotifyWebPlayer
      token={accessToken}
      showSaveIcon
      uris={trackUri ? [trackUri] : []}
    />
  );
}
