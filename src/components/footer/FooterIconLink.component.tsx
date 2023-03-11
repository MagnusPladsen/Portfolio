import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FooterIconLink({
  url,
  icon,
  alt,
}: {
  url: string;
  icon: string;
  alt: string;
}) {
  return (
    <Link href={url} target="_blank">
      <motion.div
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.2 }}
        className=""
      >
        <Image
          src={icon}
          width={30}
          height={30}
          alt={alt}
          className=" hover:cursor-pointer "
        />
      </motion.div>
    </Link>
  );
}
