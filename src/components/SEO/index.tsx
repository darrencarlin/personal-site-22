import Head from "next/head";
import React from "react";

const SEO = () => {
  // get current day of the week
  const day = new Date().getDay();

  const data = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <Head>
      <title>{`It's ${data[day]}`}</title>
      <meta
        name="description"
        content="Personal website of web engineer Darren Carlin"
      />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;
