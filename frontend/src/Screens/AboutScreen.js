import { Link } from "react-router-dom";

import React from "react";

const About = (props) => {
  return (
    <div>
      {" "}
      <h1>Milliyar Origins </h1>
      <h2 className="center-text"> WHO WE ARE </h2>
      <img
        className="center-img"
        src="https://i.imgur.com/tIFtS2Tl.png"
        width="100%"
        height="500px"
      />
      <p className="center-text">
        {" "}
        Milliyar is an international word for the meaning billion . Specializing
        in Hats , Hoodies , Shirts and soon socks . The rise of milliyar came
        from realizing the market for clothing is limited with luxury brands and
        overpriced fabrics which makes it hard for everyday millinials to get a
        bang for their buck . This brand was created from honesty and integrety
        , we overlook the amount charged the customer by other brands for profit
        , rather we provide high quality clothing for reasonable pricing. Our
        goal is to create a heritage for spending a fraction of what you pay for
        a gaurunteed fit , Milliyar will stand you out .{" "}
      </p>
      <h2>ADINFINITUM ADNASEUM </h2>
      <h2 className="center-text">Mission </h2>
      <p className="center-text">
        {" "}
        We aim to be a lifestyle brand exclusivley for street wear inspired by
        generations of musical & martial arts, influenced by west coast street
        wear and arabian culture, established in Orange County , Califronia to
        reach the rest of the world . On the 25th of every month , we curate a
        collection of streetwear that is eyecatch{" "}
      </p>
      <h2>ADINFINITUM ADNASEUM </h2>
      <h2 className="center-text">
        Still have unanswered questions? Contact us below{" "}
      </h2>
      <div className="center-text">
        <button>
          <Link to="/help" style={{ color: "red" }}>
            Contact Us
          </Link>
        </button>
      </div>
    </div>
  );
};
export default About;
