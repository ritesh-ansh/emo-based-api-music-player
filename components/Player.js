import { useSession } from "next-auth/react";
import React from "react";
import { useState, useEffect } from "react";
import getData from "../lib/getPlaylist";

function Player() {
  // const spotifyApi = useSpotifyApi();
  const [playlist, setPlaylist] = useState([]);
  const { data: session, status } = useSession();
  useEffect(() => {
    if (session) {
      getData(session).then((data) => {
        setPlaylist(data);
      });
    }
  }, [session]);
  console.log(playlist);
  return (
    <>
      <div>
        <p>hello</p>
        {playlist.map((item) => {
          <div key={item.id}>
            <p>{item.name}</p>
          </div>;
        })}
      </div>
    </>
  );
}

export default Player;
