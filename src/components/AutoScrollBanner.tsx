import { useEffect, useRef } from "react";

interface AutoScrollBannerProps {
  items: string[];
  speed?: number;
}

const AutoScrollBanner = ({ items, speed = 30 }: AutoScrollBannerProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scroll = () => {
      scrollPosition += 1;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
    };

    const intervalId = setInterval(scroll, speed);
    return () => clearInterval(intervalId);
  }, [speed]);

  return (
    <div className="overflow-hidden">
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden whitespace-nowrap"
        style={{ scrollBehavior: "auto" }}
      >
        {/* Duplicamos los items para crear el efecto loop infinito */}
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="inline-flex items-center bg-background px-6 py-3 rounded-lg text-lg font-semibold border-2 border-primary/20 shadow-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AutoScrollBanner;
