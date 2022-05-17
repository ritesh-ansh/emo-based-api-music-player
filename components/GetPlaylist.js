import React from "react";
import axios from "axios";
import { signIn, useSession } from "next-auth/react";
import { useState, useEffect } from "react";

function GetPlaylist() {
  const [playlist, setPlaylist] = useState([]);
  const { data: session, status } = useSession();

  //   console.log(session);
  //   console.log(playlist);

  //   console.log("setPlaylist ", setPlaylist);

  const getData = async () => {
    // console.log(session.user.accessToken);
    if (session) {
      const res = await axios
        .get("https://api.spotify.com/v1/search", {
          headers: {
            Authorization: `Bearer ${session.user.accessToken} `,
          },
          params: {
            q: "happy",
            type: "artist",
          },
        })
        .then((res) => setPlaylist(res.data.artists.items));

      console.log("data");
      console.log(playlist);
    } else {
      signIn("spotify", { callback: "/" });
    }
  };

  useEffect(() => {
    getData();
  }, [session]);

  return <div></div>;
}

export default GetPlaylist;
