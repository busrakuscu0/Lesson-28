import Image from "next/image";
import Link from "next/link";

export default function Documentation() {
  return (
    <div className="w-full max-w-5xl mx-auto p-12 flex flex-col gap-16">
      <div className="flex flex-col gap-8">
        <h1 className="font-extrabold text-3xl text-blue-900">
          Introduction to NextDev Core
        </h1>
        <p className="text-sm leading-8 text-zinc-600 dark:text-zinc-400">
          Experience the next generation of cloud infrastructure orchestration.
          NextDev provides an authoritative suite of tools designed for
          high-value B2B scaling and professional precision engineering.
        </p>
        <Image
          className="w-full h-80 object-cover rounded-[1rem]"
          src="/documentation-image.png"
          alt="Cybersecurity and technology visualization"
          width={200}
          height={100}
        />
      </div>

      <h2 className="font-bold text-2xl text-gray-800">Getting Started</h2>
      <div>
        <h3 className="font-thin text-lg text-blue-900 mb-8">
          1. Environment Setup
        </h3>
        <p className="text-sm leading-8 text-zinc-600 dark:text-zinc-400 mb-8">
          Before initiating the NextDev deployment sequence, ensure your
          environment meets the minimum architectural requirements. We recommend
          a 64-bit Unix-based system for optimal performance during
          high-concurrency operations.
        </p>
        <Image
          className="w-full h-full object-cover rounded-[1rem]"
          src="/documentation-image-2.png"
          alt="Bash terminal code block for nextdev installation and setup."
          width={453}
          height={88}
        />
      </div>
      <div className="mb-16">
        <h3 className="font-thin text-lg text-blue-900 mb-8">
          2. Key Concepts
        </h3>
        <div className="flex flex-row gap-16 items-center">
          <div className="flex flex-col gap-4 leading-8 text-zinc-600 dark:text-zinc-400">
            <h4 className="font-bold">Neural Orchestration</h4>
            <p className="text-sm">
              Automated node management using AI-driven predictive scaling
              algorithms.
            </p>
          </div>
          <div className="flex flex-col gap-4 leading-8 text-zinc-600 dark:text-zinc-400">
            <h4 className="font-bold">Zero-Trust Security</h4>
            <p className="text-sm">
              Every request is validated via hardware-level encrypted tokens.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
