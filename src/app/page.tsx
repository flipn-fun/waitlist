import Bar from "@/sections/home/bar";
import BottomBg from "@/sections/home/bottom-bg";
import Telegram from "@/sections/home/telegram";
import Title from "@/sections/home/title";
import TopBg from "@/sections/home/top-bg";
import Twitter from "@/sections/home/twitter";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full overflow-hidden home-bg">
      <div className="w-full h-full bg-[#000000a8] flex items-center justify-center">
        <div className="w-[347px] relative">
          <div className="w-full h-[272px] relative">
            <div className="absolute left-0 top-0 w-full h-full flex flex-col items-center justify-center">
              <Title />
              <div className="text-[14px] mt-[10px] text-center w-[298px]">
                Launch & trade memecoins as easy as scrolling through socials
                media
              </div>
              <div className="mt-[26px] font-semibold">
                <span className="text-[16px]">Waitlist</span>{" "}
                <span className="text-[26px]">6.9k +</span>
              </div>
              <Image
                src="/images/projects.png"
                alt="Projects"
                width={162}
                height={32}
                className="mt-[20px]"
              />
            </div>
            <TopBg />
          </div>
          <div className="ml-[-6px] w-full h-[171px] relative">
            <div className="absolute left-0 top-0 w-full h-full flex flex-col items-center justify-center">
              <a
                href="https://forms.gle/aig6s8fQKYSXa8yu7"
                rel="preload"
                className="hover:opacity-80 active:opacity-60 duration-300 cursor-pointer w-[259px] h-[50px] flex justify-center items-center rotate-[3deg] rounded-[100px] bg-[#C9FF5D] border-black border-[2px] text-[16px] font-semibold"
              >
                Join The Waitlist
              </a>
              <a
                href="https://stage.flipn.fun"
                rel="preload"
                className="hover:opacity-80 active:opacity-60 duration-300 cursor-pointer text-[#FBCA04] rotate-[3deg] mt-[10px] underline"
              >
                Go to FlipN
              </a>
            </div>
            <BottomBg />
          </div>
          <div className="absolute md:top-[-69px] md:left-[-61px] top-[-100px] left-[0px] rotate-[180deg]">
            <Bar />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full flex item-center justify-center p-[5px]">
        <a
          href="https://x.com/flipndotfun"
          target="_blank"
          className="hover:opacity-80 active:opacity-60 duration-300 p-[10px]"
        >
          <Twitter />
        </a>
        <a
          href="https://t.me/Flip_N"
          target="_blank"
          className="hover:opacity-80 active:opacity-60 duration-300 p-[10px]"
        >
          <Telegram />
        </a>
      </div>
    </div>
  );
}
