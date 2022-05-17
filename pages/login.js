import React from "react";
import { getProviders, signIn } from "next-auth/react";

function login({ providers }) {
  // console.log(providers);
  return (
    <div>
      <img src="https://links.papareact.com/9xl" className=" w-52 mb-5 " />
      <div>
        <button onClick={() => signIn("spotify", { callback: "/" })}>
          test
        </button>
      </div>
      ;
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
  // console.log(providers);
}
