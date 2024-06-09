import Express from "@/svg/Express";
import JS from "@/svg/JS";
import MongoDB from "@/svg/MongoDB";
import NextJS from "@/svg/NextJS";
import PostGresql from "@/svg/PostGresql";
import Prisma from "@/svg/Prisma";

export default async function Skill() {
  return (
    <section className="h-screen flex items-center px-5">
      <div>
        <h1 className="text-5xl font-medium text-white text-balance uppercase">
          Work with<span className="animate-[ping_1s_infinite]">_</span>
        </h1>
        <div className="mt-5 gap-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-collapse w-fit">
          <span className="border size-32 flex justify-center items-center">
            <JS className="size-20" />
          </span>
          <span className="border size-32 flex justify-center items-center">
            <NextJS className="size-20" />
          </span>
          <span className="border size-32 flex justify-center items-center">
            <MongoDB className="size-20" />
          </span>
          <span className="border size-32 flex justify-center items-center">
            <Express className="size-20" />
          </span>
          <span className="border size-32 flex justify-center items-center">
            <PostGresql className="size-20" />
          </span>
          <span className="border size-32 flex justify-center items-center">
            <Prisma className="size-20" />
          </span>
        </div>
      </div>
    </section>
  );
}
