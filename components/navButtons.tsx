interface NavigationButtonsProps {
    onPrevious: () => void;
    onNext: () => void;
  }
  
  export function NavigationButtons({ onPrevious, onNext }: NavigationButtonsProps) {
    return (
      <div className="flex gap-2">
        {/* Previous Button */}
        <div onClick={onPrevious} aria-label="Previous card" className="group cursor-pointer">
          <svg
            className="w-10 h-10 stroke-gray-500 group-hover:stroke-[#5355FF] transition-colors duration-200"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="-0.5" y="0.5" width="27" height="27" rx="13.5" transform="matrix(-1 0 0 1 27 0)" className="stroke-inherit" />
            <rect x="-0.5" y="0.5" width="27" height="27" rx="13.5" transform="matrix(-1 0 0 1 27 0)" className="stroke-inherit" />
            <path
              d="M19.834 14.0002L8.16732 14.0002M8.16732 14.0002L14.0007 8.16683M8.16732 14.0002L14.0007 19.8335"
              className="stroke-inherit"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
  
        {/* Next Button */}
        <div onClick={onNext} aria-label="Next card" className="group cursor-pointer">
          <svg
            className="w-10 h-10 stroke-gray-500 group-hover:stroke-[#5355FF] transition-colors duration-200"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.5" y="0.5" width="27" height="27" rx="13.5" className="stroke-inherit" />
            <rect x="0.5" y="0.5" width="27" height="27" rx="13.5" className="stroke-inherit" />
            <path
              d="M8.16602 14.0002L19.8327 14.0002M19.8327 14.0002L13.9993 8.16683M19.8327 14.0002L13.9993 19.8335"
              className="stroke-inherit"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    );
  }