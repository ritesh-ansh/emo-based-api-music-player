import React from "react";
import Image from "next/Image";
import Link from "next/link";
import { getProviders, signIn, signOut, useSession } from "next-auth/react";
import UserInfo from "./UserInfo";

function MainScreen({ providers }) {
  const { data: session, status } = useSession();

  return (
    <div>
      <div className="flex justify-end items-center mt-4 p-2 mr-[2vw] ">
        {session && <UserInfo />}
      </div>
      <div className="flex ">
        <div className=" ml-24 mr-14 w-[25vw] h-full ">
          <Image
            src={"/images/phone.png"}
            width="60%"
            height="97%"
            layout="responsive"
          />
        </div>
        <div className="flex flex-col mt-[8%]  space-y-24">
          <p className="text-6xl font-montserrat text-white ">
            Play songs that fit your <span className="ml-[30%]">mood</span>
          </p>
          <Link href="/musicplayer">
            <button className="bg-[#35858B] ml-[15%]  w-[45%] flex justify-center items-center align-middle rounded-full p-3 text-white  ">
              <p className="text-3xl  ">Detect Your Mood 😉</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainScreen;
export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
  // console.log(providers);
}
