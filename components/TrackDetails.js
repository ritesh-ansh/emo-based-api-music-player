import Image from "next/image";
import React from "react";

export default function TrackDetails({ song, chooseSong }) {
  return (
    <div
      onClick={() => chooseSong(song)}
      className=" flex space-x-16  "
      role={"banner"}
    >
      <div className=" cursor-pointer w-[5vw] h-[5vw] m-2 ml-5 ">
        <Image
          src={song.albumUrl}
          width={"100%"}
          height={"100%"}
          layout={"responsive"}
        />
      </div>
      <div className=" ">
        <p className="text-gray-200   cursor-pointer">{song.title}</p>

        <p className="text-gray-500 ">{song.artist}</p>
      </div>
    </div>
  );
}
