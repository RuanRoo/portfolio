import Image from "next/image";

export default function Section2() {
  return (
    <div className="flex justify-between gap-2 my-20 pr-16">
      <div className="flex gap-2">
        <div className="pt-2">
          <svg width="12" height="12" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8.5" cy="8.5" r="8.5" transform="matrix(1 0 0 -1 0 17)" fill="#5769EF" />
          </svg>
        </div>
        <div className="font-semibold text-2xl">
          Spending time <br /> with my family
        </div>
      </div>
      <div className="flex gap-6">
        <div className="pt-7">
          <Image src="/about1.png" layout="responsive" width={391} height={469} alt="project image" className="rounded-md" />
          <div className="flex items-center w-80 gap-4 bg-[#ededf6] rounded-2xl mt-6 ml-auto p-4">
            <Image src="/index-finger.png" width={44} height={44} alt="pointer" />
            <div className="leading-tight">That is my son, Skylar, he has a serious ball obsession</div>
          </div>
        </div>
        <div>
          <div className="flex items-center w-80 gap-4 bg-[#ededf6] rounded-2xl mt-11 mb-6 p-4">
            <Image src="/index-finger.png" width={44} height={44} alt="pointer" className="scale-x-[-1]" />
            <div className="leading-tight">This is my wife, we have been married for 12 years.</div>
          </div>
          <div>
            <Image src="/about2.png" layout="responsive" width={16} height={14} alt="project image" className="rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}
