import React from "react";
import { Link } from "@remix-run/react";
import ProfilePic from "../assets/images/profile-pic.jpg";
import { siteMetadata } from "../constants";

const Hero = () => {
  const { author, title } = siteMetadata;

  return (
    <div className="flex flex-col sm:flex-row mt-10">
      <div className="justify-center items-center flex">
        <img
          src={ProfilePic}
          alt={author.name}
          height={100}
          width={100}
          className="mr-4"
          style={{
            minWidth: 100,
            borderRadius: `50%`,
          }}
        />
      </div>

      <div className="justify-center items-center flex flex-col">
        <h1 className="font-black mb-0 mt-2 text-green-700">
          <Link className="text-4xl font-black no-underline" to={`/`}>
            {title}
          </Link>
        </h1>
        <p className="text-black dark:text-white mb-0 mt-0">{author.summary}</p>
      </div>
    </div>
  );
};

export default Hero;
