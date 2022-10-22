import Image from "next/image";
import React from "react";

const ServiceCard: React.FC<{
  data: {
    title: string;
    image: any;
    content: string;
  };
}> = ({ data }) => {
  return (
    <div className="relative rounded-md shadow-md bg-linear-card backdrop-blur-md overflow-hidden">
      <div className="bg-purple-800 w-full p-2 h-[200px] w-full]  flex items-center justify-center  overflow-hidden">
        <span className="duration-1000 hover:scale-[1.1]">
          <Image src={data.image} layout="fixed" alt="seo" />
        </span>
      </div>
      <figure className="p-3 min-h-[200px] flex justify-between">
        <div className="grid grid-cols-1">
          <div className="col-span-full">
            <h1 className="text-gray-800 dark:text-gray-300 text-2xl font-semibold">
              {data.title}
            </h1>
          </div>
          <div className="col-span-full flex">
            <figcaption className="app-text-color text-base flex-1">
              {data.content}
            </figcaption>
          </div>
        </div>
      </figure>
    </div>
  );
};

export default ServiceCard;
