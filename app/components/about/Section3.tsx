import Link from "next/link";
import LazyVideo from "./Video";

export default function Section3() {
  return (
    <div className="flex w-[85%] mx-auto justify-between mb-28">
      <div>
        <div className="flex gap-2 mb-14">
          <div className="pt-2">
            <svg width="12" height="12" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8.5" cy="8.5" r="8.5" transform="matrix(1 0 0 -1 0 17)" fill="#5769EF" />
            </svg>
          </div>
          <div className="font-semibold text-2xl">
            Trying not to break <br /> something at the skatepark
          </div>
        </div>
        <div>
          <LazyVideo />
        </div>
      </div>
      <div className="mt-auto">
        <Link href="/">
            <div className="border border-brandblack font-semibold rounded-[91px] py-2 px-6 hover:border-brandblue hover:text-brandblue transition-all duration-500 ease-in-out">
                BACK
            </div>
        </Link>
      </div>
    </div>
  );
}
