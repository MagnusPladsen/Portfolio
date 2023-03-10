import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function SiteHeader({
  url,
  name,
  image,
}: {
  url: string;
  name: string;
  image: string;
}) {
  return (
    <Link target="_blank" href={url}>
      <h2 className="pb-4 text-2xl font-bold group-hover:underline underline-offset-2">
        {name}
      </h2>
      <Image
        src={image}
        alt={name}
        width={500}
        height={500}
        className="rounded"
      />{" "}
    </Link>
  );
}
