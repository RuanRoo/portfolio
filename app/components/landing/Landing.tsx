import Link from "next/link";
import { ArrowRight } from 'lucide-react';
import Heading from "./Heading";
import Intro from "./Intro";
import ScrollButton from "./ScrollButton";


export default function Landing() {
  return (
    <div>
      <Heading />
      <div>
        <Intro />
      </div>
      <div className="w-2/3 mx-auto flex justify-end mt-6">
        <ScrollButton />
      </div>
      <div className="flex justify-between mt-12 mx-28 font-medium text-base">
  <Link
    href="https://www.github.com"
    className="group flex items-center transition-all duration-300 ease-in-out"
  >
    <div className="text-gray-600 group-hover:text-blue-600 mr-1 transition-colors duration-300">
      Here for my CV
    </div>
    <ArrowRight
      className="text-gray-600 group-hover:text-blue-600 transition-all duration-300 ease-in-out group-hover:translate-x-1"
      width={20}
    />
  </Link>
  <Link
    href="https://www.github.com"
    className="group flex items-center transition-all duration-300 ease-in-out"
  >
    <div className="text-gray-600 group-hover:text-brandblue mr-1 transition-colors duration-300">
      Here for my CV
    </div>
    <ArrowRight
      className="text-gray-600 group-hover:text-brandblue transition-all duration-300 ease-in-out group-hover:translate-x-1"
      width={20}
    />
  </Link>
</div>

    </div>
  );
}
