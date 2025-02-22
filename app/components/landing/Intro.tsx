import Image from "next/image";

export default function Intro() {
  return (
    <div className="text-grey-600 text-xl p-4 md:w-3/5 pr-20 mx-auto mt-8 md:mt-16 4xl:w-[65%] leading-relaxed">
      Hello <span><Image src="/waving-hand.gif" alt="Waving hand" width={24} height={24} className="inline" /></span> I am Ruan, I also go by Roo. Currently I spend my days 
      drinking a lot of coffee while building the UI of a cutting-edge solar platform as a frontend engineer at 7SecondSolar. Excited to learn more? Let's connect!
    </div>
  );
}
