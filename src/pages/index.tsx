import Head from "next/head";
import Image from "next/image";
import sites from "@/data/sites";
import { Site } from "@/models/sites";
import Link from "next/link";
import SiteComponent from "@/components/Site.component";

export default function Home() {
  return (
    <>
      <Head>
        <title>Magnus Pladsen - Portfolio</title>
        <meta name="description" content="Portfolio of school projects" />
        <meta name="author" content="Magnus Pladsen" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`bg-black`}>
        <div className="py-20 mx-auto items-center flex flex-col gap-20">
          {Object.values(sites).map((site: Site) => (
            <SiteComponent site={site} key={site.name} />
          ))}
        </div>
      </main>
    </>
  );
}
