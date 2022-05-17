import { useSession } from "next-auth/react";
import React from "react";
4;
import GetPlaylist from "./GetPlaylist";

function Player() {
  // const spotifyApi = useSpotifyApi();
  const { data: session, status } = useSession();
  return (
    <div>
      <div>
        <GetPlaylist />
      </div>
    </div>
  );
}

export default Player;
