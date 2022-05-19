import Image from "next/image";
import React from "react";

export default function TrackDetails({ track, chooseTrack }) {
  function handleClick() {
    chooseTrack(track);
  }
  return (
    <div onClick={handleClick} className=" flex space-x-10  ">
      <div className=" cursor-pointer w-[5vw] h-[5vw] m-2 ml-5 ">
        <Image
          src={track.albumUrl}
          width={"100%"}
          height={"100%"}
          layout={"responsive"}
        />
      </div>
      <div className=" flex flex-col justify-center ">
        <p className="text-white  font-montserrat font-semibold cursor-pointer">
          {track.title}
        </p>

        <p className="text-gray-300 font-montserrat ">{track.artist}</p>
      </div>
    </div>
  );
}
