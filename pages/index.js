import Head from "next/head";
import Image from "next/image";
import App from "../components/App";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Music</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&family=Roboto+Flex:opsz,wght@8..144,300&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <App />
    </div>
  );
}
