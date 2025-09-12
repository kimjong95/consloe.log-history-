"use client";

import { useEffect, useState, ReactNode } from "react";

interface IntroAnimationProps {
  theme?: "light" | "dark";
  title?: string;
  children?: ReactNode;
}

export default function IntroAnimation({ 
  theme = "dark", 
  title = "history",
  children 
}: IntroAnimationProps) {
  const [isAnimating, setIsAnimating] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = `console.log(${title})`;

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    const animationTimer = setTimeout(() => {
      setIsAnimating(false);

      setTimeout(() => {
        setShowContent(true);
      }, 500);
    }, 3000);

    return () => {
      clearInterval(typingInterval);
      clearTimeout(animationTimer);
    };
  }, [fullText]);

  const bgColor = theme === "dark" ? "bg-black" : "bg-white";
  const textColor = theme === "dark" ? "text-white" : "text-black";

  return (
    <>
      <div
        className={`fixed inset-0 transition-all duration-1000 ease-in-out ${bgColor} ${
          showContent ? "opacity-0 pointer-events-none delay-500" : ""
        }`}
      />

      <div
        className={`fixed transition-all duration-[2000ms] ease-in-out font-mono z-50 whitespace-nowrap ${
          isAnimating
            ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl md:text-7xl"
            : "top-8 left-8 text-xl md:text-2xl"
        } ${textColor}`}
      >
        {typedText.includes(title) ? (
          <>
            {typedText.substring(0, typedText.indexOf(title))}
            <span className="text-green-500">{title}</span>
            {typedText.substring(typedText.indexOf(title) + title.length)}
          </>
        ) : (
          typedText
        )}
        {typedText.length < fullText.length && (
          <span className="inline-block w-1 h-12 bg-current ml-1 animate-pulse" />
        )}
      </div>

      {showContent && (
        <div className="animate-fadeIn">
          {children || <DefaultContent theme={theme} />}
        </div>
      )}
    </>
  );
}

function DefaultContent({ theme }: { theme: "light" | "dark" }) {
  const bgColor = theme === "dark" ? "bg-black" : "bg-white";
  const textColor = theme === "dark" ? "text-white" : "text-black";
  
  return (
    <div className={`min-h-screen ${bgColor} ${textColor} p-8 pt-24`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="space-y-6"></div>
          WELCOME!
          <div className="space-y-4"></div>
        </div>
      </div>
    </div>
  );
}
