import React from "react";
import Image from "next/Image";
import Link from "next/link";

function MainScreen() {
  return (
    <div>
      <div className="flex justify-end items-center mt-4 p-2 mr-[2vw] ">
        <div
          role={"button"}
          className="   rounded-full px-4 py-2 bg-green-500 "
        >
          <p className="text-white">Login with spotify</p>
        </div>
      </div>
      <div className="flex ">
        <div className=" w-[45vw] h-[95vh] ">
          <Image
            src={"/images/phone.png"}
            width="100%"
            height="100%"
            layout="responsive"
          />
        </div>
        <div className="flex flex-col mt-[8%]  space-y-24">
          <p className="text-6xl font-montserrat text-white ">
            Play songs that fits your <span className="ml-[30%]">mood</span>
          </p>
          <button className="bg-[#35858B] ml-[15%]  w-[45%] flex justify-center items-center align-middle rounded-full p-3 text-white  ">
            <Link href="/">
              <p className="text-xl  ">Detect Your Mood 😉</p>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainScreen;
