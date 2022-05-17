import React from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

//   console.log(session);
//   console.log(playlist);

//   console.log("setPlaylist ", setPlaylist);

export default async function getData(session) {
  // console.log(session.user.accessToken);
  const res = await axios.get("https://api.spotify.com/v1/search", {
    headers: {
      Authorization: `Bearer ${session.user.accessToken} `,
    },
    params: {
      q: "happy",
      type: "playlist",
    },
  });
  return res.data.playlists.items;

  //   console.log("data");
  //   console.log(playlist);
}
