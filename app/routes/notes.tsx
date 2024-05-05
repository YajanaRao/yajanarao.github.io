import React from "react";
import { Link } from "@remix-run/react";
import CProgramming from "../assets/images/topics/c-program.png";
import Javascript from "../assets/images/topics/javascript.png";
import Sdlc from "../assets/images/topics/sdlc.png";

const Courses = ({}) => {
  const categories = [
    {
      key: "c-programming",
      title: "C Programming",
      description: "Beginer concepts related to c programming language",
      link: "c-programming",
      image: CProgramming,
    },
    {
      key: "javascript",
      title: "Javascript",
      description: "Fundamental programming concepts in JavaScript.",
      link: "javascript",
      image: Javascript,
    },
    {
      key: "sdlc",
      title: "SDLC",
      description: "Software development life cycle",
      link: "sdlc",
      image: Sdlc,
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {categories.map((category, index) => {
          return (
            <article key={index}>
              <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg flex flex-col">
                <div className="">
                  <img
                    className="rounded-t-lg mb-0 min-h-60"
                    src={category.image}
                    alt={category.title}
                    style={{ width: "100%" }}
                    width={"0"}
                    height={"100"}
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
                    to={`/notes/${category.link}`}
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
