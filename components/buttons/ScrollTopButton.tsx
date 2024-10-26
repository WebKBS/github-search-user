"use client";
import { ArrowUpToLine } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setShowButton(true);
      } else {
        setShowButton(false);
        console.log("ScrollTopButton");
      }
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!showButton) return null;

  return (
    <button
      className="fixed bottom-4 right-4 xl:bottom-8 xl:right-8 z-10 bg-gray-300 px-2 py-2 rounded-full hover:bg-white transition-colors"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      aria-label="상단으로 이동"
    >
      <ArrowUpToLine color="#000" size={20} />
    </button>
  );
};

export default ScrollTopButton;
