import { ArrowRight } from "lucide-react";
import Heading from "./Heading";
import Intro from "./Intro";

interface LandingProps {
  onExploreClick: () => void;
}

export default function Landing({ onExploreClick }: LandingProps) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/document.pdf";
    link.download = "document.pdf";
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
      <div className="border border-brandblack font-semibold rounded-[91px] py-2 px-6 inline-block text-base cursor-pointer hover:border-brandblue hover:text-brandblue transition-all duration-500 ease-in-out" onClick={onExploreClick}>
              Scroll for funfacts
            </div>
      </div>
      <div className="flex justify-between mt-12 mx-28 font-medium text-base">
        <div className="group flex items-center transition-all duration-300 ease-in-out cursor-pointer" onClick={handleDownload}>
          <div className="text-gray-600 group-hover:text-blue-600 mr-1 transition-colors duration-300">Here for my CV</div>
          <ArrowRight
            className="text-gray-600 group-hover:text-blue-600 transition-all duration-300 ease-in-out group-hover:translate-x-1"
            width={20}
          />
        </div>
        <a href="https://github.com/RuanRoo" target="blank" className="group flex items-center transition-all duration-300 ease-in-out">
          <div className="text-gray-600 group-hover:text-brandblue mr-1 transition-colors duration-300">Go to my GitHub</div>
          <ArrowRight
            className="text-gray-600 group-hover:text-brandblue transition-all duration-300 ease-in-out group-hover:translate-x-1"
            width={20}
          />
        </a>
      </div>
    </div>
  );
}
