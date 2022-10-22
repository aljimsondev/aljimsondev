import Head from "next/head";
import React from "react";

export default function Layout(props: any) {
  const { children } = props;

  return (
    <React.Fragment>
      <Head>
        <title>Al Jimson Megriño | Personal Portfolio</title>
        <link rel="icon" type="image/svg+xml" href="/Assets/favicon.svg" />
        <meta
          name="keywords"
          content="Al Jimson Megriño, al jimson megriño, aljimsondev, Al Jimson Megrino"
        />
        <meta name="author" content="Al Jimson Megriño" key="author" />
        <meta
          name="description"
          content="Al Jimson Megriño | Personal Portfolio | Web Developer | A passionate individual aiming to improve self."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="_root-container">{children}</main>
    </React.Fragment>
  );
}
