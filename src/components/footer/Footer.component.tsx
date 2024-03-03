import React from "react";
import FooterIconLink from "./FooterIconLink.component";

export default function Footer() {
  return (
    <footer className="w-full fixed bg-gray-900 shadow-md bottom-0 py-5 border-t border-gray-600">
      <div className="flex flex-col  items-center gap-5 justify-center w-[500px] mx-auto">
        <div className="flex gap-10">
          <FooterIconLink
            url="https://github.com/MagnusPladsen"
            icon="/icons/GitHub.png"
            alt="GitHub Logo"
          />
          <FooterIconLink
            url="https://www.linkedin.com/in/magnus-pladsen-1a2738226/"
            icon="/icons/LinkedIn.png"
            alt="LinkedIn Logo"
          />
          <FooterIconLink
            url="https://pladsen.dev"
            icon="/icons/HomePage.png"
            alt="House Icon"
          />
        </div>
        <p className="text-white">&copy; Magnus Pladsen 2024</p>
      </div>
    </footer>
  );
}
