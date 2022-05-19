import React from "react";
import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";
import Head from "next/head";
import SpotifyWebApi from "spotify-web-api-node";

function login({ providers }) {
  // console.log(providers);
  return (
    <div className="flex  flex-col items-center justify-center min-h-screen w-full space-y-5 ">
      <Head>
        <title>Music</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&family=Roboto+Flex:opsz,wght@8..144,300&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className=" w-[15vh] h-[15vh] mb- ">
        <Image
          src="https://links.papareact.com/9xl"
          width={"100%"}
          height={"100%"}
          layout="responsive"
        />
      </div>
      <div>
        <button
          onClick={() => signIn("spotify")}
          role={"button"}
          className={"   rounded-full px-4 py-2 bg-green-500 "}
        >
          <p className="text-white">Login with spotify</p>
        </button>
      </div>
    </div>
  );
}

export default login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
  // console.log("providers", providers);
}
