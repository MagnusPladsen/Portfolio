import React from "react";

export default function Hero({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div>
      <h1 className="text-5xl text-white font-bold text-center pt-20 ">
        {title}
      </h1>
      <h2 className="pt-5 text-xl text-white font-bold text-center">
        {subtitle}
      </h2>
    </div>
  );
}
