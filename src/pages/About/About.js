import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-7 ">
          <span className="text-primeColor font-semibold text-lg">
            Wearme is your ultimate destination for authentic t-shirts from a
            diverse range of renowned brands. We take pride in offering
            high-quality clothing, ensuring each product is genuine and crafted
            with meticulous attention to detail. Our mission is to provide you
            with premium apparel at an affordable price, without compromising on
            style or quality. With WearMe, you can shop confidently, knowing
            you're getting the best value for your money while staying true to
            your unique sense of style.
          </span>{" "}
        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
