import React from "react";

export default function SiteStack({ stack }: { stack: string[] }) {
  return (
    <div className="flex gap-3">
      <p className="text-sm text-white">Stack:</p>
      <div className="flex gap-3">
        {stack.map((tag) => (
          <div key={tag} className="flex text-gray-500 text-sm ">
            <p className="group-hover:underline group-hover:text-white underline-offset-2 transition-all">
              {tag}
            </p>
            {stack.indexOf(tag) !== stack.length - 1 ? (
              <p className="group-hover:text-white transition-all">, </p>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
