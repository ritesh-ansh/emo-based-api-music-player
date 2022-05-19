import Image from "next/image";
import React from "react";

export default function TrackDetails({ track, chooseTrack }) {
  function handleClick() {
    chooseTrack(track);
  }
  return (
    <div onClick={handleClick} className=" flex space-x-16  ">
      <div className=" cursor-pointer w-[5vw] h-[5vw] m-2 ml-5 ">
        <Image
          src={track.albumUrl}
          width={"100%"}
          height={"100%"}
          layout={"responsive"}
        />
      </div>
      <div className=" ">
        <p className="text-gray-200   cursor-pointer">{track.title}</p>

        <p className="text-gray-500 ">{track.artist}</p>
      </div>
    </div>
  );
}
