import Image from "next/image";

export default function Section2() {
  return (
    <div className="mt-20 md:mt-36">
      <div className="font-semibold tracking-tighter text-4xl md:text-5xl">
        When I'm not coding <br /> you will find me
      </div>
      <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-2 my-10 md:my-20 md:pr-16 pt-7">
        <div className="flex gap-2">
          <div className="pt-2">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8.5" cy="8.5" r="8.5" transform="matrix(1 0 0 -1 0 17)" fill="#5769EF" />
            </svg>
          </div>
          <div className="font-medium text-xl leading-tight tracking-tight pt-1">
            Spending time <br /> with my family
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-6">
          <div className="w-full">
            <Image src="/about1.png" layout="responsive" width={391} height={469} alt="project image" className="rounded-md" />
            <div className="hidden md:flex items-center w-full md:w-80 gap-4 bg-[#ededf6] rounded-md mt-6 md:ml-auto p-4">
              <Image src="/index-finger.svg" width={44} height={44} alt="pointer" />
              <div className="leading-tight">That is my son, Skylar, he has a serious ball obsession</div>
            </div>
            <div className="md:hidden flex items-center w-full md:w-80 gap-4 bg-[#ededf6] rounded-md mt-6 md:mt-11 mb-2 p-4">
              <div className="leading-tight">This is my wife, we have been married for 12 years.</div>
              <Image src="/index-finger.svg" width={44} height={44} alt="pointer" className="transform -rotate-90" />
            </div>
          </div>
          <div className="w-full">
            <div className="md:hidden flex items-center w-full md:w-80 gap-4 bg-[#ededf6] rounded-md mt-6 md:ml-auto p-4 mb-4">
              <Image src="/index-finger.svg" width={44} height={44} alt="pointer" className="transform rotate-90" />
              <div className="leading-tight">That is my son, Skylar, he has a serious ball obsession</div>
            </div>
            <div className="hidden md:flex items-center w-full md:w-80 gap-4 bg-[#ededf6] rounded-md mt-6 md:mt-11 mb-6 p-4">
              <Image src="/index-finger.svg" width={44} height={44} alt="pointer" className="scale-x-[-1]" />
              <div className="leading-tight">This is my wife, we have been married for 12 years.</div>
            </div>
            <div>
              <Image src="/about2.png" layout="responsive" width={16} height={14} alt="project image" className="rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
