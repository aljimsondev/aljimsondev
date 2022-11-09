import React from "react";
import Links from "./Links";
import { FaLinkedinIn, FaGithub, FaFacebookF, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Sidebar: React.FC<{}> = ({}) => {
  const data = [
    {
      icon: <FaLinkedinIn />,
      label: "LinkedIn",
      type: "link",
      value: "www.linkedin.com/in/al-jimson-megrino",
    },
    {
      icon: <SiGmail />,
      label: "GMail",
      type: "text",
      value: "aljimson.megrino@gmail.com",
    },
    {
      icon: <FaGithub />,
      label: "Github",
      type: "link",
      value: "https://github.com/aljimsondev",
    },
    {
      icon: <FaFacebookF />,
      label: "Facebook",
      type: "link",
      value: "https://facebook.com/alnstien",
    },
    {
      icon: <FaTwitter />,
      label: "Twitter",
      type: "link",
      value: "https://twitter.com/aljimsondev",
    },
  ];
  return (
    <aside className="hidden xs:flex fixed left-0 h-[100vh] items-center justify-center z-20">
      <div className="sidebar">
        {data.map((data, index) => {
          return (
            <Links
              icon={data.icon}
              label={data.label}
              type={data.type}
              value={data.value}
              key={data.value + index}
            />
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
