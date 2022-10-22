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
//! folder structure pages must be similar when using nextjs for cleaner structure
/**
 * intro
 * what i do
 * programming skills
 * self projects
 * about self education
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
          <Image src={abs1} layout="fixed" priority />
        </div>
        <Navbar />
        <div className="container min-w-screen-md max-w-screen-md">
          <Intro />
          <Offers />
        </div>
        <div className="w-full max-w-full min-h-[80vh] relative flex items-center justify-start flex-col">
          <div className="absolute bottom-0 pointer-events-none">
            <Image src={footerWorld} layout="fixed" alt="world" />
          </div>
          <div className="container min-w-screen-md max-w-screen-md min-h-full bg-slate-400">
            <h1 className="text-lg">What's next?</h1>
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
