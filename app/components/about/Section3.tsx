import Image from "next/image";

export default function Section3() {
  return (
    <div className="flex flex-wrap gap-10 my-10 px-4">
      <div className="w-1/3">
        <div className="flex gap-2">
          <div className="pt-2">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8.5" cy="8.5" r="8.5" transform="matrix(1 0 0 -1 0 17)" fill="#5769EF" />
            </svg>
          </div>
          <div className="font-medium text-xl leading-tight tracking-tight pt-1">
            Cooking up a storm! I am pretty good at finding my way around the kitchen, and if you ask my wife, she will say, “His Thai yellow curry is
            the best I’ve ever had.”
          </div>
        </div>
      </div>
      <div>
        <div className="w-[80%]">
          <Image src="/Cooking.png" layout="responsive" width={44} height={44} alt="project image" className="rounded-md" />
        </div>
      </div>
    </div>
  );
}
