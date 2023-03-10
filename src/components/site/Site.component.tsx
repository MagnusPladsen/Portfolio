import { Site } from "@/models/sites";
import { motion } from "framer-motion";
import Link from "next/link";
import SiteHeader from "./SiteHeader.component";
import SiteStack from "./SiteStack.component";

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
        className="font-text tracking-wider flex flex-col gap-2 text-white"
      >
        <SiteHeader url={site.url} name={site.name} image={site.image} />
        <SiteStack stack={site.stack} />
        <div className="flex gap-3">
          <p className="text-white ">Description: </p>
          <p className="text-gray-500 group-hover:text-white transition-all">{site.description}</p>
        </div>

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
