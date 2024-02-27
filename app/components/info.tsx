import * as React from "react";

export const meta = () => {
  return [{ title: "Projects" }];
};

function Info({ title, date }: { title: string; date: string }) {
  return (
    <div>
      <h1 className="mb-0">{title}</h1>
      <p className="mt-0 mb-0  text-gray-700 dark:text-gray-300">
        {" "}
        {new Date(date).toLocaleDateString("en", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>
    </div>
  );
}

export default Info;
