import * as React from "react";
import dayjs from "dayjs";

function Info({ title, date }: { title: string; date: string }) {
  return (
    <div>
      <h1 className="mb-0">{title}</h1>
      <p className="mt-0 mb-0  text-gray-700 dark:text-gray-300">
        {" "}
        {dayjs(date).format("MMMM D, YYYY")}
      </p>
    </div>
  );
}

export default Info;
