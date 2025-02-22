interface AboutProps {
  scroll: () => void;
}

export default function Section1({ scroll }: AboutProps) {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row md:justify-between text-xl h-full">
        <div className="w-full md:w-80 pt-8">
          a creative frontend developer, <br /> with a love for clean code, coffee and skateboarding.
        </div>
        <div className="flex flex-col justify-between h-full w-full md:w-[55%] md:pr-20 leading-relaxed">
          <div className="pt-8 md:pt-20 pb-4">
            After completing a full-stack developer bootcamp, I discovered my true passion for frontend development—building intuitive,
            component-based UIs and writing clean, scalable code. I specialize in modern frameworks like React, Next.js, and TypeScript, and enjoy
            transforming designs into functional, high-quality components. Whether it's integrating APIs, managing state, or optimizing data flow, I
            focus on delivering efficient solutions.
          </div>
          <div className="pt-3 pb-12">
            I’m also a strong advocate for cross-team collaboration, working closely with designers to bring their vision to life and partnering with
            backend developers to ensure everything works smoothly.
          </div>
          <div className="md:ml-auto">
            <div
              className="border border-brandblack font-semibold rounded-[91px] py-2 px-6 inline-block text-base cursor-pointer hover:border-brandblue hover:text-brandblue transition-all duration-500 ease-in-out"
              onClick={scroll}
            >
              SEE FUN FACTS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
