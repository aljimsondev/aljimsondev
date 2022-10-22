import ServiceCard from "../Card/Services";
import React from "react";
import wevdevImg from "../../../../public/Assets/images/web-dev.png";
import restapiImg from "../../../../public/Assets/images/api.png";
import gamedevImg from "../../../../public/Assets/images/game-dev.png";
import uiImg from "../../../../public/Assets/images/social.png";
import seoImg from "../../../../public/Assets/images/seo.png";

function Offers() {
  const offers = [
    {
      image: wevdevImg,
      title: "Web Development",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero assumenda obcaecati harum fugit ducimus eveniet eos ab illo in nostrum.",
    },
    {
      image: restapiImg,
      title: "Restful API's",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero assumenda obcaecati harum fugit ducimus eveniet eos ab illo in nostrum.",
    },
    {
      image: gamedevImg,
      title: "JavaScript Game Development",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero assumenda obcaecati harum fugit ducimus eveniet eos ab illo in nostrum.",
    },
    {
      image: gamedevImg,
      title: "Android Apps Development",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero assumenda obcaecati harum fugit ducimus eveniet eos ab illo in nostrum.",
    },
    {
      image: uiImg,
      title: "UI/UX Design",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero assumenda obcaecati harum fugit ducimus eveniet eos ab illo in nostrum.",
    },
    {
      image: seoImg,
      title: "S.E.O",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero assumenda obcaecati harum fugit ducimus eveniet eos ab illo in nostrum.",
    },
  ];

  return (
    <section className="min-h-[90vh] mx-4 my-6 sm:mx-0">
      <h1 className="text-color-title text-center xs:text-start">
        Things that I do that might interest you
      </h1>
      <div className="grid gap-5 mt-[3rem]  grid-cols-1 xs:grid-cols-2 md:grid-cols-3 z-10">
        {offers.map((offer, index) => {
          return <ServiceCard key={index + offer.title} data={offer} />;
        })}
      </div>
    </section>
  );
}

export default React.memo(Offers);
