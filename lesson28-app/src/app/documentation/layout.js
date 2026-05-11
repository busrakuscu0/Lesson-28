import Link from "next/link";
import Image from "next/image";

export default function DocumentationLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <div className="w-64 pt-12 text-slate-600 bg-gray-100 p-6">
        <nav className="flex flex-col gap-8">
          <Link href="/documentation" className="hover:text-blue-600">
            Introduction
          </Link>
          <Link
            href="/documentation/quickstart"
            className="hover:text-blue-600"
          >
            Quickstart
          </Link>
          <Link
            href="/documentation/architecture"
            className="hover:text-blue-600"
          >
            Architecture
          </Link>
          <Link
            href="/documentation/api-reference"
            className="hover:text-blue-600"
          >
            API Reference
          </Link>
        </nav>
      </div>
      <main>{children}</main>
    </div>
  );
}
