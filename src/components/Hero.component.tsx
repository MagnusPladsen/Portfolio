import React from "react";

export default function Hero({
  title,
  author,
}: {
  title: string;
  author: string;
}) {
  return (
    <div className="group">
      <h1 className="text-6xl font-header font-bold text-white text-center pt-20">
        {title}
      </h1>
      <h2 className="pt-3 text-xl font-header text-gray-600  font-bold text-center">
        by <a href="https://pladsen.dev" className="group-hover:text-gray-300 group-hover:underline underline-offset-2 transition-all hover:cursor-pointer">{author}</a>
      </h2>
    </div>
  );
}
