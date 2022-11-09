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
import ReachOut from "../src/client/Components/Sections/ReachOut";

//tODO programmable slider navbar
//TODO FIXED MENU AND BURGER ICON SIZE, NAVBAR SIZE IN MOBILE VIEW
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
        <div className="w-full max-w-full min-h-[80vh] relative flex items-center justify-start flex-col py-5">
          <ReachOut />
          <div className="absolute bottom-0 pointer-events-none z-[1]">
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
