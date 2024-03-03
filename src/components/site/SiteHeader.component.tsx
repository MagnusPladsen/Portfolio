import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter";
import Link from "next/link";

export default function SiteHeader({
  url,
  name,
}: {
  url: string;
  name: string;
}) {
  return (
    <Link target="_blank" href={url}>
      <h2 className="pb-4 text-2xl font-bold group-hover:underline underline-offset-2">
        {capitalizeFirstLetter(name)}
      </h2>
    </Link>
  );
}
