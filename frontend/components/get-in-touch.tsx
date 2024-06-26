import { useState, useEffect } from "react";
import { TypewriterEffect } from "../pages/typewriter-effect";

export function TypewriterEffectDemo() {

  const words = [
    {
      text: "Let's",
    },
    {
      text: "Get",
    },
    {
      text: "In",
    },
    {
      text: "Touch.",
    },
  ];

  const [isAnimating, setIsAnimating] = useState(false);
  // const observerRef = useRef<IntersectionObserver | null>
  // Detect when the section is in view
  useEffect(() => {
    const section = document.querySelector(".typewriter-demo");
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsAnimating(entry.isIntersecting);
    });

if(section){
  observer.observe(section);
}else{
  console.error("element not found ");
}

    return () => observer.disconnect(); // Cleanup on unmount
  }, []);

  return (
    <div id="contact" className="flex flex-col items-center justify-center h-[40rem] typewriter-demo">
      <p className="text-neutral-600 dark:text-neutral-200 text-lg  mb-10">
        We are just a click Apart !
      </p>
      {isAnimating && <TypewriterEffect words={words} />}{" "}
      {/* Render only when animating */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span
            onClick={() =>
              (window.location.href = "mailto:work.crevo@gmail.com")
            }
            className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl"
          >
            CLick Here
          </span>
        </button>
      </div>
    </div>
  );
}
