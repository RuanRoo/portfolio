import { ArrowRight } from "lucide-react";
import Heading from "./Heading";
import Intro from "./Intro";
import Link from "next/link";

interface LandingProps {
  onExploreClick: () => void;
}

export default function Landing({ onExploreClick }: LandingProps) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Ruan_CV.pdf";
    link.download = "Ruan_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <Heading />
      <div>
        <Intro />
      </div>
      <div className="w-2/3 mx-auto flex justify-end mt-6">
        <div
          className="hidden md:inline-block border border-brandblack font-semibold rounded-[91px] leading-none py-3 px-6 text-base cursor-pointer hover:border-brandblue hover:text-brandblue transition-all duration-500 ease-in-out"
          onClick={onExploreClick}
        >
          LEARN MORE
        </div>
      </div>
      <div className="flex flex-col gap-3 md:flex-row md:justify-between p-4 md:mt-24 md:mx-28 font-medium text-base">
        <div className="group flex items-center transition-all duration-300 ease-in-out cursor-pointer" onClick={handleDownload}>
          <div className="text-gray-600 group-hover:text-blue-600 mr-1 transition-colors duration-300">Here for my CV</div>
          <ArrowRight
            className="text-gray-600 group-hover:text-blue-600 transition-all duration-300 ease-in-out group-hover:translate-x-1"
            width={20}
          />
        </div>
        <Link href="https://github.com/RuanRoo" target="blank" className="group flex items-center transition-all duration-300 ease-in-out">
          <div className="text-gray-600 group-hover:text-brandblue mr-1 transition-colors duration-300">Go to my GitHub</div>
          <ArrowRight
            className="text-gray-600 group-hover:text-brandblue transition-all duration-300 ease-in-out group-hover:translate-x-1"
            width={20}
          />
        </Link>
      </div>
    </div>
  );
}
