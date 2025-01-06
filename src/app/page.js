import Image from "next/image";
import HeaderHome from "./(pages)/component/HeaderHome";

export default function Home() {
  return (
    <>
      {/* <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-indigo-400 text-3xl">
          Hello World! <i className="fab fa-apple"></i>{" "}
        </h1>
        co the Config them trong next.config.js
        <Image
          src={"https://apistore.cybersoft.edu.vn/images/vans-black-black.png"}
          width={300}
          height={300}
          alt=""
          crossOrigin="anonymous"
        />
      </div> */}
      <div>
        <HeaderHome />
      </div>
    </>
  );
}
