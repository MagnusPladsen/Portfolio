import React from "react";
import { Site } from "@/models/sites";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SiteComponent({ site }: { site: Site }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, backgroundColor: "#1a202c" }}
      transition={{
        type: "spring",
        damping: 10,
        stiffness: 125,
        duration: 0.1,
      }}
      whileTap={{ scale: 0.95 }}
      className="rounded-xl py-8 px-8 border border-black group"
    >
      <div
        key={site.name}
        className="font-header tracking-wider flex flex-col gap-2 text-white"
      >
        <Link target="_blank" href={site.url}>
          <h2 className="pb-4 text-xl font-bold ">{site.name}</h2>
          <Image
            src={site.image}
            alt={site.name}
            width={500}
            height={500}
            className="rounded"
          />{" "}
        </Link>
        <div className=" flex gap-3">
          <p className="text-sm text-gray-500">Stack:</p>
          {site.stack.map((tag) => (
            <p key={tag} className="text-sm text-gray-500">
              {tag}
            </p>
          ))}
        </div>
        <p className="">{site.description}</p>
        <div className="flex justify-between pt-4">
          <Link target="_blank" href={site.url}>
            <motion.p
              whileHover={{}}
              className="text-sm text-gray-600 group-hover:text-white transition-all hover:underline underline-offset-2"
            >
              Click to open website
            </motion.p>
          </Link>
          <Link target="_blank" href={site.repoUrl}>
            <motion.p
              whileHover={{}}
              className="text-sm text-gray-600 group-hover:text-white transition-all hover:underline underline-offset-2"
            >
              Repository
            </motion.p>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
