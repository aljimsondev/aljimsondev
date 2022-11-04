import type { NextPage } from "next";
import React from "react";
import Layout from "../src/client/Layout";
import Navbar from "../src/client/Components/Navbar";
import abs1 from "../public/Assets/abs-1.svg";
import Sidebar from "../src/client/Components/Sidebar";
import footerWorld from "../public/Assets/footer.svg";
import { Portal } from "../src/client/Components/Portal";
import Menu from "../src/client/Components/Menu";
import Intro from "../src/client/Components/Sections/Intro";
import Offers from "../src/client/Components/Sections/Offers";
import Image from "next/image";
import { Context } from "../src/client/Context/Store";
import Footer from "../src/client/Components/Footer";

//tODO programmable slider navbar
//sidebar
//game animation
//add right side navigation for sections
//create
//sections
/**
 * intro
 * what i do
 * programming skills
 * self projects
 * resume
 * blogs and links
 *
 */

const Home: NextPage = () => {
  const { openMenu } = React.useContext(Context);

  return (
    <Layout>
      <div className="root">
        <div className="abs-card">
          {/**absolute card 1 */}
          <Image src={abs1} alt="abs-card" layout="fixed" priority />
        </div>
        <Navbar />
        <div className="container min-w-screen-md max-w-screen-md">
          <Intro />
          <Offers />
        </div>
        <div className="w-full max-w-full min-h-[80vh] relative flex items-center justify-start flex-col">
          <div className="container min-w-screen-md max-w-screen-md min-h-full">
            <h1 className="text-4xl app-text-color">What&apos;s next?</h1>
            <div className="bg-blue-700 p-5 rounded-lg mt-5">
              <h1 className="app-text-color rounded-lg text-2xl font-semibold my-2">
                Start a project
              </h1>
              <p className="app-text-color text-xl">
                Interesting in creating wonderful things?
              </p>
              <p className="app-text-color text-xl">
                Don&apos;t be a stranger and hit me with these contact links.
                I&apos;d like to hear from you and discuss things out.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 pointer-events-none">
            <Image src={footerWorld} layout="fixed" alt="world" />
          </div>
          <Footer />
        </div>
        <Sidebar />
        {openMenu && (
          <Portal>
            <Menu />
          </Portal>
        )}
      </div>
    </Layout>
  );
};

export default Home;
