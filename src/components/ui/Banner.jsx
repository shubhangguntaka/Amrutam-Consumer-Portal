import { FiPhone } from "react-icons/fi";

function Banner() {
  return (
    <div className="w-full bg-[#3A3A3A] text-white">
      <div className="mx-auto h-14 flex items-center justify-center px-8 relative">
        <p className="text-sm md:text-base">
          Your first 5 minutes instant call is free.
        </p>

        <button
          className="
            absolute right-8
            flex items-center justify-center gap-2
            bg-[#3A643B] hover:bg-[#2d4f2e]
            text-white
            w-56 h-11 px-6
            rounded-xl
            text-sm font-medium
            shadow-sm
          "
        >
          <FiPhone className="w-4 h-4" />
          <span>Try Instant Free Call Now</span>
        </button>
      </div>
    </div>
  );
}

export default Banner;
