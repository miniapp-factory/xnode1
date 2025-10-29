import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export async function generateMetadata(): Promise<Metadata> {
  const title = "XnodeOS – No‑code, Secure NixOS";
  const description =
    "XnodeOS is a NixOS‑based operating system that focuses on no‑code deployment with maximum security built in by default.";
  const url = process.env.NEXT_PUBLIC_URL ?? "";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: `${url}/hero.png`,
          width: 1200,
          height: 630,
          alt: "XnodeOS Hero Image",
        },
      ],
    },
    other: {
      "fc:miniapp": JSON.stringify({
        version: "next",
        imageUrl: `${url}/icon.png`,
        ogTitle: title,
        ogDescription: description,
        ogImageUrl: `${url}/hero.png`,
        button: {
          text: "Download",
          url: `${url}/download`,
        },
      }),
    },
  };
}

export default function Home() {
  return (
    <main className="flex flex-col gap-12 px-4 py-8 min-h-screen bg-gradient-to-b from-purple-900 via-indigo-800 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight animate-fade-in">
            XnodeOS
          </h1>
          <p className="text-lg md:text-xl animate-fade-in delay-200">
            No‑code deployment with maximum security built in by default.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="animate-pulse"
            asChild
          >
            <Link href="/download">Download Now</Link>
          </Button>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="/hero.png"
            alt="XnodeOS Hero"
            className="w-full max-w-md rounded-xl shadow-2xl animate-slide-up"
          />
        </div>
      </section>

      {/* Highlights Section */}
      <section className="flex flex-col items-center gap-8">
        <h2 className="text-3xl md:text-4xl font-semibold animate-fade-in">
          Why XnodeOS?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300 animate-pulse">
            <h3 className="text-xl font-semibold mb-2">Zero‑Touch Security</h3>
            <p className="text-sm">
              Built on NixOS, every package is sandboxed and verified.
            </p>
          </div>
          <div className="bg-gradient-to-r from-pink-500 to-red-600 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300 animate-pulse">
            <h3 className="text-xl font-semibold mb-2">No‑Code Deployment</h3>
            <p className="text-sm">
              Deploy with a single click or a YAML file—no manual setup.
            </p>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300 animate-pulse">
            <h3 className="text-xl font-semibold mb-2">Fast & Reliable</h3>
            <p className="text-sm">
              Lightweight, fast boot times, and reliable updates.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="flex-1 flex justify-center">
          <img
            src="/features.png"
            alt="XnodeOS Features"
            className="w-full max-w-md rounded-xl shadow-2xl animate-slide-up"
          />
        </div>
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold animate-fade-in">
            Built for Security
          </h2>
          <p className="text-lg md:text-xl animate-fade-in delay-200">
            XnodeOS leverages NixOS’s declarative configuration and sandboxing to
            provide a secure, tamper‑proof environment out of the box.
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold animate-fade-in">
            No‑Code Deployment
          </h2>
          <p className="text-lg md:text-xl animate-fade-in delay-200">
            Deploy applications with a single click or a simple YAML file—no
            manual configuration required.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="flex flex-col items-center gap-6 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Ready to secure your infrastructure?
        </h2>
        <p className="text-lg md:text-xl text-center max-w-2xl">
          Join the community of developers who trust XnodeOS for their
          production workloads.
        </p>
        <Button
          variant="default"
          size="lg"
          asChild
          className="animate-bounce"
        >
          <Link href="/download">Get Started</Link>
        </Button>
        <img
          src="/cta.png"
          alt="XnodeOS Call to Action"
          className="w-full max-w-md rounded-xl shadow-2xl mt-8 animate-slide-up"
        />
      </section>

      {/* Footer */}
      <footer className="mt-12 text-center text-sm text-gray-300">
        <p>© 2025 XnodeOS. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-white transition-colors">
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.42 2.87 8.17 6.84 9.53.5.09.68-.22.68-.48 0-.24-.01-.88-.01-1.73-2.78.6-3.36-1.34-3.36-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.88 1.51 2.31 1.07 2.88.82.09-.64.35-1.07.63-1.32-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 012.5-.34c.85 0 1.71.12 2.5.34 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.02 1.59 1.02 2.68 0 3.84-2.34 4.68-4.57 4.92.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48 3.97-1.36 6.84-5.11 6.84-9.53 0-5.5-4.46-9.96-9.96-9.96z" />
            </svg>
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.42 2.87 8.17 6.84 9.53.5.09.68-.22.68-.48 0-.24-.01-.88-.01-1.73-2.78.6-3.36-1.34-3.36-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.88 1.51 2.31 1.07 2.88.82.09-.64.35-1.07.63-1.32-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 012.5-.34c.85 0 1.71.12 2.5.34 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.02 1.59 1.02 2.68 0 3.84-2.34 4.68-4.57 4.92.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48 3.97-1.36 6.84-5.11 6.84-9.53 0-5.5-4.46-9.96-9.96-9.96z" />
            </svg>
          </a>
        </div>
      </footer>
    </main>
  );
}
