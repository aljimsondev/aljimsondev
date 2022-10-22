import React from "react";
import Footer from "../../src/client/Components/Footer";
import Navbar from "../../src/client/Components/Navbar";
import Layout from "../../src/client/Layout";
import bg1 from "../../public/Assets/bg-poly.svg";
import bgcode from "../../public/Assets/bg-code.svg";
import LayoutWithBackground from "../../src/client/Components/Sections/LayoutWithBackground";
import Octagon from "../../src/client/Components/Octagon";

/**
 * About myself
 * Tools and tech that i used in development
 * education
 *
 *
 */

const About: React.FC = () => {
  return (
    <Layout>
      <div className="root">
        <Navbar />
        <LayoutWithBackground source={bg1} imagePosition="right">
          <section className="grid min-h-[90vh] grid-cols-3 ">
            <div className="col-span-3 sm:col-span-2 flex items-start justify-center flex-col">
              <div className="bg-[#ffffff59] dark:bg-[#24202059] p-5 rounded-sm backdrop-blur-lg ">
                <h1 className="text-[#99009C] text-4xl">More about me?</h1>
                <p className="app-text-color text-xl mt-10">
                  I am a <b className="text-4xl md:text-5xl ">Web Developer</b>{" "}
                  based in <b className="text-2xl md:text-4xl ">Philippines</b>,
                  with more than <b className="text-xl md:text-3xl ">2 years</b>{" "}
                  of experience in exploring{" "}
                  <b className="text-2xl md:text-4xl ">Frontend</b> development
                  tools and <b className="text-2xl md:text-4xl ">building</b>{" "}
                  something with it. I build{" "}
                  <b className="text-2xl md:text-4xl ">websites</b> and{" "}
                  <b className="text-2xl md:text-4xl ">web application</b> using
                  <b className="text-2xl md:text-4xl ">JavaScript</b> frameworks
                  and libraries. I also build{" "}
                  <b className="text-2xl md:text-4xl ">hybrid</b> android
                  application using{" "}
                  <b className="text-2xl md:text-4xl ">React Native.</b>
                </p>
                <Octagon strokeWidth={10} width={50} height={50} />
                <Octagon />
                <Octagon />
              </div>
            </div>
          </section>
        </LayoutWithBackground>
        <LayoutWithBackground source={bgcode}>
          <section className="grid min-h-[90vh] grid-cols-3 "></section>
        </LayoutWithBackground>
      </div>
    </Layout>
  );
};

export default About;
