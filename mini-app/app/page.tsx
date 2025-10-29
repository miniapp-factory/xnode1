import { Metadata } from "next";
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
    <main className="flex flex-col gap-12 px-4 py-8 min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
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
            href="/download"
          >
            Download Now
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
          href="/download"
          className="animate-bounce"
        >
          Get Started
        </Button>
        <img
          src="/cta.png"
          alt="XnodeOS Call to Action"
          className="w-full max-w-md rounded-xl shadow-2xl mt-8 animate-slide-up"
        />
      </section>
    </main>
  );
}
