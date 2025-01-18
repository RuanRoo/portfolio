interface AboutProps {
  scroll: () => void;
}

export default function Section1({ scroll }: AboutProps) {
  return (
    <div className="h-[450px]">
      <div className="flex justify-between text-xl h-full">
        <div className="w-80 pt-8">
          a creative frontend developer, <br /> with a love for clean code, coffee and skateboarding.
        </div>
        <div className="flex flex-col justify-between h-full text-lg">
          <div className="w-[750px] pt-20 pr-28 ">
            After completing a full-stack developer bootcamp, I discovered my true passion lies in frontend development—perfecting component-based UIs
            with pixel-perfect precision while writing clean, scalable code. I specialize in modern frameworks like React, Next.js, and TypeScript,
            and I thrive on bringing designs to life, whether it's crafting reusable components, handling complex API integrations, or managing state
            and data flow seamlessly.
          </div>
          <div className="w-[600px] pt-3 pr-28 ">
            Im a big fan of cross-team collaboration, working closely with designers to match their vision 100% and teaming up with backend developers to ensure
            everything runs like clockwork. When I'm not coding you will find me...
          </div>
          <div>
            <div className="border border-brandblack font-semibold rounded-[91px] py-2 px-6 inline-block text-base cursor-pointer hover:border-brandblue hover:text-brandblue transition-all duration-500 ease-in-out" onClick={scroll}>
              Scroll for funfacts
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
