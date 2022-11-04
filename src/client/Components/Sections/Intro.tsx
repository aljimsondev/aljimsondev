import Image from "next/image";
import React from "react";

function Intro() {
  return (
    <div className="grid gap-5 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 min-h-[90vh] backdrop-blur-lg md:backdrop-blur-none">
      <div className="col-span-full text-center flex items-center justify-center md:items-end md:justify-start">
        <h1 className="text-2xl xs:text-5xl md:text-6xl  text-linear font-bold">
          Build something passionately
        </h1>
      </div>
      <div className="col-span-full md:col-span-2">
        <div className="text-center md:text-start">
          <p className="app-text-color text-xl">
            I am <b className="text-4xl md:text-6xl ">Al Jimson A. Megrino,</b>
          </p>
          <p className="app-text-color text-xl">
            from the <b className="app-text-color text-3xl">Philippines</b>. I
            am a <b className="text-2xl">Web Developer</b> and{" "}
            <b className="text-2xl">Visual Artist</b> who loved his work.
          </p>
          <p className="app-text-color text-xl">
            I create websites and web applications using{" "}
            <b className="text-4xl">JavaScript</b>
          </p>
          <p className="app-text-color text-xl">
            and
            <b className="text-4xl"> React.</b> I create 2D games using
            JavaScript. I love to explore in the world of programming and build
            something with it.
          </p>
          <button className="intro-btn select-none">Explore Projects</button>
        </div>
      </div>
      <div className="flex items-end justify-center md:items-start col-span-full md:col-span-1 order-first md:order-last">
        <div className="profile-picture-base">
          <Image className="flex" src="" alt="profile-picture" />
        </div>
      </div>
    </div>
  );
}

export default Intro;
