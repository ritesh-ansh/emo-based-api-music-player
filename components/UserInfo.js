import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

function UserInfo() {
  const { data: session, status } = useSession();

  return (
    <div className=" rounded-full p-2  bg-gray-300 flex justify-center items-center space-x-3">
      <div className="w-[8vh] h-[8vh] rounded-full overflow-hidden ">
        <Image
          src={session.user.image}
          width={"100%"}
          height={"100%"}
          layout={"responsive"}
        />
      </div>
      <div>
        <p className="text-xl text-[#8842ae] font-roboto">{session.user.name}</p>
      </div>
      <button
        onClick={() => signOut()}
        role={"button"}
        className={
          (session ? "" : " hidden ") + "   rounded-full px-4 py-2 bg-white "
        }
      >
        <p className="text-gray-600 text-xl ">Log Out</p>
      </button>
    </div>
  );
}

export default UserInfo;
