import Github from "@/svg/Github";
import Linkedin from "@/svg/Linkedin";
import Resume from "@/svg/Resume";
import Link from "next/link";

export default async function Header() {
  return (
    <section className="h-screen">
      <div className="flex items-center h-full px-5">
        <div className="flex sm:justify-between items-center flex-col justify-center sm:flex-row w-full gap-10">
          <div className="font-medium text-white text-balance uppercase -tracking-tighter">
            <h1 className="text-5xl"> Hi! I&apos;m Lehri,</h1>
            <h1 className="mt-5 text-5xl">
              a Full-stack Developer
              <span className="animate-[ping_1.4s_infinite]">_</span>
            </h1>
            <div className="mt-10 grid grid-cols-3 w-fit">
              {/* <Link
                target="_blank"
                href="https://github.com/mhlehri"
                className="border border-x-0 flex items-center col-span-2 sm:col-span-1 gap-2 px-4 py-2 hover:bg-gray-50/10"
              >
                <Github className="size-5" />
              </Link>
              <Link
                target="_blank"
                href="https://linkedin.com/in/mahmud-hassan-lehri"
                className="border border-t-0 flex items-center col-span-2 sm:col-span-1 gap-2 px-4 py-2 hover:bg-gray-50/10 "
              >
                <Linkedin className="size-5" />
              </Link> */}
              <button className="border border-y-0 flex items-center col-span-2 ol-span-1 justify-center gap-2 px-4 py-2 hover:bg-gray-50/10 text-xl">
                <Resume className="size-5" /> resume
              </button>
            </div>
          </div>
          {/* <div className="absolute right-0">
            <p>Mahmud Hassan Lehri</p>
            <Image
              src="/me.png"
              width="500"
              height="600"
              alt=""
              className="border-b border-t bg-gray-700/20 max-w-[500px] w-full hadow-[0_0_10px_0_#fff]"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}
