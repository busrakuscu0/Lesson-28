import Image from "next/image";
import Link from "next/link";

export default function Features() {
  return (
    <main className="w-full flex justify-center py-8 px-4 mb-16">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-16 text-center">
        <div className=" flex flex-col items-center gap-4 ">
          <h1 className="text-2xl font-extrabold leading-10 tracking-tight text-gray-800 dark:text-zinc-50">
            Engineered for Performance
          </h1>
          <p className="max-w-md text-sm leading-8 text-zinc-600 dark:text-zinc-400">
            We've optimized every detail of the development workflow so you can
            focus on building what matters most to your users.
          </p>
        </div>
        <div className="flex flex-row gap-12">
          <div className="max-w-sm flex flex-col gap-4 items-center justify-center text-base font-medium p-8 rounded-[2rem] border-t-4 border-sky-700  shadow-sm">
            <Image
              src="/bolt-icon.svg"
              alt="Bolt Icon"
              width={30}
              height={30}
            />
            <h2 className="text-xl text-gray-800 font-extrabold">
              Lightning Fast
            </h2>
            <p className="text-sm leading-8 text-zinc-600 dark:text-zinc-400">
              Optimized for performance with Next.js App Router. Experience
              sub-second load times and unmatched SEO right out of the box.
            </p>
          </div>
          <div className="max-w-sm flex flex-col gap-4 items-center justify-center text-base font-medium p-8 rounded-[2rem] border-t-4 border-sky-700  shadow-sm">
            <Image
              src="/palette-icon.svg"
              alt="Palette Icon"
              width={30}
              height={30}
            />
            <h2 className="text-xl text-gray-800 font-extrabold">
              Tailwind Powered
            </h2>
            <p className="text-sm leading-8 text-zinc-600 dark:text-zinc-400">
              Beautifully styled with utility-first CSS. Our design system
              tokens ensure consistency and rapid UI iteration for your
              enterprise apps.
            </p>
          </div>
          <div className="max-w-sm flex flex-col gap-4 items-center justify-center text-base font-medium p-8 rounded-[2rem] border-t-4 border-sky-700  shadow-sm">
            <Image
              src="/domain-icon.svg"
              alt="Domain Icon"
              width={30}
              height={30}
            />
            <h2 className="text-xl text-gray-800 font-extrabold">
              Fully Responsive
            </h2>
            <p className="text-sm leading-8 text-zinc-600 dark:text-zinc-400">
              Works seamlessly across all device sizes. Mobile-first
              architecture ensures a premium experience whether on desktop,
              tablet, or mobile.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
