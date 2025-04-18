import { Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <div id="footer" className="flex flex-col md:flex-row gap-4 md:justify-between border-t border-grey-400 mx-4 md:m-10">
      <div>
        <div className="font-semibold text-4xl md:text-6xl leading-super-tight tracking-tighter mt-8 md:mt-14">
          Find me on <br /> socials
        </div>
      </div>
      <div className="flex w-full md:w-auto">
        <div className="bg-brandblue rounded-2xl w-full md:w-[825px] min-h-[16rem] md:h-64 mt-8 md:mt-32 text-grey-100 flex flex-col justify-between py-6 px-6 md:px-10">
          <div className="text-xl md:text-2xl leading-tight">
            Let's connect, I never say no <br /> to coffee
          </div>
          <div className="flex flex-col gap-6 md:gap-3 mt-8 md:mt-0">
            <div className="w-fit">
              <Link
                href="mailto:radyn00@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="group inline-flex gap-2 text-sm items-center transition-all duration-300 ease-in-out cursor-pointer"
              >
                <Mail className="text-grey-100 group-hover: transition-all duration-300 ease-in-out transform group-hover:scale-125" />
                <div>Send me an email</div>
              </Link>
            </div>
            <div className="w-fit">
              <Link
                href="https://github.com/RuanRoo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group inline-flex gap-2 text-sm items-center transition-all duration-300 ease-in-out cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-grey-100 group-hover: transition-all duration-300 ease-in-out transform group-hover:scale-125"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                <div>Check out some code on GitHub!</div>
              </Link>
            </div>
            <div className="w-fit">
              <Link
                href="https://www.linkedin.com/in/ruan-radyn-2998971a4/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group inline-flex gap-2 text-sm items-center transition-all duration-300 ease-in-out cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-grey-100 group-hover: transition-all duration-300 ease-in-out transform group-hover:scale-125"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <div className="pt-1">Connect on LinkedIn</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}