import Head from "next/head";

import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>samarithan | WhatsApp ChatBot</title>
        <meta name="description" content="Sam" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen flex flex-col overflow-hidden">
        {/* <BigHeader /> */}

        {/* hHomePage */}
        <HomePage />
        {/* main */}
        <Footer />
      </div>
    </div>
  );
}
