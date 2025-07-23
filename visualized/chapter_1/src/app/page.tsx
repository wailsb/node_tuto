"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const lessons = [
    "Introduction",
    "Commands",
    "Variables",
    "Architecture",
    "Event Loop",
    "Functions"
  ];

  const handleResize = () => {
    setIsDesktop(window.innerWidth > 768);
  };

  const animate = () => {
    const elements = document.querySelectorAll(".unvisibleview, .animate");
    elements.forEach((e) => {
      const rect = e.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      if (isVisible) {
        e.classList.remove("unvisibleview");
        e.classList.add("animate");
      } else if (loaded) {
        e.classList.add("unvisibleview");
        e.classList.remove("animate");
      }
    });
  };

  useEffect(() => {
    handleResize();
    requestAnimationFrame(() => {
      animate();
      setLoaded(true);
    });

    window.addEventListener("scroll", animate);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", animate);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        .unvisibleview {
          opacity: 0;
          transform: translateX(-50px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .animate {
          opacity: 1;
          transform: translateX(0);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
      `}</style>

      <main className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white flex flex-col justify-center items-center px-4 py-8">
        {/* Hero Section */}
        <section className="mb-10 text-center animate">
          <Image
            src="/images/wail.jpg"
            alt="Wail Sari Bey"
            width={isDesktop ? 150 : 100}
            height={isDesktop ? 150 : 100}
            className="mx-auto border-4 border-white rounded-full shadow-lg"
          />
          <h1 className="mt-4 text-3xl font-bold md:text-4xl">Ouweis Wail Sari Bey</h1>
          <p className="max-w-xl mx-auto mt-2 text-lg text-gray-300">
            Full Stack Developer | Passionate about clean code, performance, and developer-first design.
          </p>
          <p className="mt-1 text-sm italic text-blue-400">“Build fast. Learn faster. Never settle.”</p>
        </section>

        {/* Lesson Section */}
        <section className="w-full max-w-3xl">
          <h2 className="mb-6 text-2xl font-semibold text-center md:text-3xl">
            🚀 Start Learning JavaScript
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {lessons.map((lesson, i) => (
              <Link
                key={i}
                href={`/lesson${i + 1}`}
                className="block px-6 py-4 font-semibold transition-all duration-300 bg-white shadow-md text-slate-900 rounded-xl hover:bg-blue-100 unvisibleview"
              >
                {lesson}
              </Link>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Wail Sari Bey. All rights reserved.
        </footer>
      </main>
    </>
  );
}
