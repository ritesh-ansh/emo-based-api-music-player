import { useSession } from "next-auth/react";
import React from "react";
import { useState, useEffect } from "react";
import useSpotify from "../hooks/useSpotify";
import TrackDetails from "./TrackDetails";
import SpotifyWebPlayer from "react-spotify-web-playback";

function Player() {
  // const spotifyApi = useSpotifyApi();
  const spotifyApi = useSpotify();
  const [songList, setSongList] = useState([]);
  const { data: session, status } = useSession();
  const [playing, setPlaying] = useState();

  // const getSongList = async () => {
  //   const res = await axios
  //     .get(
  //       "	https://api.spotify.com/v1/playlists/${playlists[" +
  //         {} +
  //         "].id}/tracks",
  //       {
  //         headers: {
  //           Authorization: `Bearer ${session.user.accessToken} `,
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       setSongList(res.data.items);
  //     });
  //   console.log("song list", res.data.items[5].track.external_urls.spotify);
  //   // console.log("song list", res);
  // };
  // useEffect(() => {
  //   // if (session) {
  //   //   getData(session).then((data) => {
  //   //     setPlaylists(data);
  //   //   });

  //   if (spotifyApi.getAccessToken()) {
  //     getData(session).then((data) => {
  //       setPlaylists(data);
  //     });
  //     // const getSongList = async () => {
  //     //   const res = await spotifyApi.getPlaylistTracks(`${playlists[0].id}`, {
  //     //     limit: 20,
  //     //   });
  //     //   console.log(res.items);
  //     // };

  //     // console.log();
  //   }
  // }, [session, spotifyApi]);
  useEffect(() => {
    spotifyApi.searchTracks("happy", { limit: 30 }).then((data) => {
      setSongList(
        data.body.tracks.items.map((track) => {
          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: track.album.images[0].url,
          };
        })
      );
    });
    console.log(songList);
  }, [session, spotifyApi]);

  // console.log(songList);
  // const chooseSong = (song) => {
  //   setPlaying(song);
  //   console.log("playing set", song);
  // };

  const handleSongClick = (track) => {
    setPlaying(track.uri);
    console.log("playing set", track);
  };

  spotifyApi.getMyCurrentPlaybackState().then(
    function (data) {
      // Output items
      if (data.body && data.body.is_playing) {
        console.log("User is currently playing something!");
      } else {
        console.log("User is not playing anything, or doing so in private.");
      }
    },
    function (err) {
      console.log("Something went wrong!", err);
    }
  );
  return (
    <>
      <div className="flex flex-col ml-[30vw] ">
        {songList.map((song) => {
          return (
            <div key={song.uri}>
              <TrackDetails chooseSong={handleSongClick} song={song} />
            </div>
          );
        })}
      </div>
      <div className="sticky bottom-0 ">
        <SpotifyWebPlayer
          autoplay={true}
          token={spotifyApi.getAccessToken()}
          uri={[playing ? playing?.uri : []]}
        />
      </div>
    </>
  );
}

export default Player;
