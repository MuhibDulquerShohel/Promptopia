// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <div>Hi</div>
//       <div><appkit-button /></div>
//     </div>
//   );
// }


// import Feed from "@components/Feed";

const home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          Prompts In Web 3.0 World
        </span>
      </h1>
      <p className="desc text-center">
        CryptoPrompt is a open source Decentralized prompting tool for modern
        world to Discover, create & share prompts{" "}
      </p>
      {/* <Feed /> */}
    </section>
  );
};

export default home;
