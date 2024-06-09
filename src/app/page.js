"use client";
import Header from "@/c/Header";
import Portfolio from "@/c/Portfolio";
import Skill from "@/c/Skill";
import Lenis from "lenis";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <main className="mx-auto max-w-6xl  relative">
      <Header />
      <Skill />
      <Portfolio />
    </main>
  );
}

{
  /* <svg
  className="size-14 inline-block"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  stroke="#ffffff"
>
  <path
    d="M4 21V18.5C4 15.4624 6.46243 13 9.5 13H12.8513C15.307 13 17.4651 11.3721 18.1397 9.01097L18.7454 6.89097C18.8961 6.3636 19.3781 6 19.9266 6C20.7258 6 21.3122 6.75106 21.1184 7.5264L19.3638 14.5448C19.15 15.4 18.3816 16 17.5 16M8 21V18M16 6.5C16 8.70914 14.2091 10.5 12 10.5C9.79086 10.5 8 8.70914 8 6.5C8 4.29086 9.79086 2.5 12 2.5C14.2091 2.5 16 4.29086 16 6.5Z"
    stroke="#ffffff"
    stroke-linecap="round"
    stroke-width="1.4"
  ></path>
</svg>{" "} */
}