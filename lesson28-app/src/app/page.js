import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-7xl mx-auto mb-16 items-center justify-evenly py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-5xl leading-15 font-extrabold tracking-tight text-gray-800 dark:text-zinc-50">
            Build the Future with <span className="text-blue-900">NextDev</span>
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Master the art of modern web development with our comprehensive
            starter template and expert guides. Designed for high-performance
            teams.
          </p>
          <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
            <Link
              className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
              href="/features"
            >
              Get Started
            </Link>
            <Link
              className="flex h-12 w-full items-center justify-center rounded-lg border border-solid border-black/[.2] text-gray-800 px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
              href="/documentation"
            >
              Documentation
            </Link>
          </div>
        </div>
        <div>
          <Image
            className="w-140 h-auto rounded-lg"
            src="/laptop-coding.jpg"
            alt="A laptop displaying programming code in a dark-themed code editor."
            width={5184}
            height={3456}
          />
        </div>
      </main>
    </div>
  );
}
