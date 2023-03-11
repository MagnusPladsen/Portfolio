import Footer from "@/components/footer/Footer.component";
import Hero from "@/components/hero/Hero.component";
import SiteComponent from "@/components/site/Site.component";
import sites from "@/data/sites";
import { Site } from "@/models/sites";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Magnus Pladsen - Portfolio</title>
        <meta name="description" content="Portfolio of school projects" />
        <meta name="author" content="Magnus Pladsen" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={`bg-black pb-20`}>
        <Hero title="School Portfolio" author="Magnus Pladsen" />
        <div className="py-20 mx-auto items-center flex flex-col gap-20">
          {Object.values(sites).map((site: Site) => (
            <SiteComponent site={site} key={site.name} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
