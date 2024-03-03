import Footer from "@/components/footer/Footer.component";
import Hero from "@/components/hero/Hero.component";
import SiteComponent from "@/components/site/Site.component";
import { Repo } from "@/models/sites";
import Head from "next/head";

export async function getServerSideProps() {
  const repos: Repo[] = await (
    await fetch("https://api.github.com/users/MagnusPladsen/repos")
  ).json();
  return {
    props: { repos },
  };
}

export default function Home({ repos }: { repos: Repo[] }) {
  return (
    <>
      <Head>
        <title>Magnus Pladsen - Repositories</title>
        <meta name="description" content="List over my repositories" />
        <meta name="author" content="Magnus Pladsen" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={`bg-gray-900 pb-20`}>
        <Hero title="My repositories" author="Magnus Pladsen" />
        <div className="py-20 mx-auto items-center flex flex-col gap-20">
          {repos.map((repo) => (
            <SiteComponent key={repo.name} repo={repo} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
