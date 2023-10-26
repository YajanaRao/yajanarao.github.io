import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteMetadata } from "../config";

const Hero = () => {
  const { author, title } = siteMetadata;

  return (
    <div className="flex flex-col sm:flex-row my-10">
      <div className="justify-center items-center flex">
        <Image
          src={"/assets/profile-pic.jpg"}
          alt={author.name}
          height={"100"}
          width={"100"}
          className="mr-4"
          style={{
            marginBottom: 0,
            minWidth: 100,
            borderRadius: `50%`,
          }}
        />
      </div>

      <div className="justify-center items-center flex flex-col">
        <Link
          style={{
            boxShadow: `none`,
          }}
          href={`/`}
        >
          <h1 className="mb-0 mt-2 text-green-600">{title}</h1>
        </Link>
        <p className="text-black dark:text-white mb-0 mt-0">{author.summary}</p>
      </div>
    </div>
  );
};

export default Hero;
