import Image from "next/image";

export default function Intro() {
  return (
    <div className="text-grey-600 text-2xl p-4 md:w-3/5 pr-20 mx-auto mt-16 4xl:w-[65%]">
      Hello <span><Image src="/waving-hand.gif" alt="Waving hand" width={24} height={24} className="inline" /></span> I am Ruan, I also go by Roo. Currently my days are spent
      drinking a lot of coffee while building out the frontend of a next generation solar platform as a frontend developer at 7SecondSolar. Keen
      to learn more?
    </div>
  );
}
