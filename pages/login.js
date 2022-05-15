import React from "react";
import { getProviders, signIn } from "next-auth/react";

function login({ providers }) {
  return (
    <div>
      <p1>image</p1>
      {Object.values(providers).map((provider) => {
        <div>
          <button>Login with {provider.name}</button>
        </div>;
      })}
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
}
