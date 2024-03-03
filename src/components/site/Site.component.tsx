import { Repo } from "@/models/sites";
import { motion } from "framer-motion";
import Link from "next/link";
import SiteHeader from "./SiteHeader.component";

export default function SiteComponent({ repo }: { repo: Repo }) {
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
      className="rounded-xl py-8 px-8 border bg-gray-800 border-black group w-[90vw] lg:w-[600px]"
    >
      <div
        key={repo.name}
        className="font-text tracking-wider flex flex-col gap-2 text-white"
      >
        <SiteHeader url={repo.homepage || repo.html_url} name={repo.name} />
        <div className="flex flex-col gap-3">
          <p className="text-gray-400 group-hover:text-white transition-all">
            {repo.description || "No description"}
          </p>
        </div>

        <div className="flex justify-between pt-4">
          {repo.homepage && (
            <Link target="_blank" href={repo.homepage}>
              <motion.p
                whileHover={{}}
                className="text-sm text-gray-600 group-hover:text-white transition-all hover:underline underline-offset-2"
              >
                Click to open website
              </motion.p>
            </Link>
          )}
          <Link target="_blank" href={repo.html_url}>
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
