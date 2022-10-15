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

  // get current weather via free weather api
  const weather = async () => {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=YOUR_API_KEY"
    );
    const data = await response.json();
    return data;
  };

  return (
    <Head>
      <title>It&apos;s {data[day].toString()}</title>
      <meta
        name="description"
        content="Personal website of web engineer Darren Carlin"
      />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;
