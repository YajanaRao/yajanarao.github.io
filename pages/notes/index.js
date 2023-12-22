import React from "react";
import Link from "next/link";

import SEO from "@/components/seo";
import Image from "next/image";

const Courses = ({}) => {
  const categories = [
    {
      key: "c-programming",
      title: "C Programming",
      description: "Beginer concepts related to c programming language",
      link: "c-programming",
      image: "/assets/topics/c-program.png",
    },
    {
      key: "javascript",
      title: "Javascript",
      description: "Fundamental programming concepts in JavaScript.",
      link: "javascript",
      image: "/assets/topics/javascript.png",
    },
    {
      key: "sdlc",
      title: "SDLC",
      description: "Software development life cycle",
      link: "sdlc",
      image: "/assets/topics/sdlc.png",
    },
  ];

  return (
    <div>
      <SEO title="Courses" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {categories.map((category, index) => {
          return (
            <article key={index}>
              <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg flex flex-col">
                <div className="">
                  <Image
                    className="rounded-t-lg mb-0 min-h-60"
                    src={category.image}
                    alt={category.title}
                    style={{ width: "100%" }}
                    width={"0"}
                    height={"100"}
                    quality={75}
                  />
                </div>
                <div className="px-4 py-6">
                  <h3 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer mt-0">
                    {category.title}
                  </h3>
                  <p className="text-gray-700 tracking-wide mb-2">
                    {category.description}
                  </p>
                  <Link
                    className="bg-green-600 hover:shadow-lg transition duration-300 text-white font-bold py-2 px-4 rounded-lg shadow-md "
                    href={`/notes/${category.link}`}
                  >
                    Visit
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
