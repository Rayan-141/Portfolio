import type { Metadata } from "next";
import { CertificateImageDialog } from "@/components/portfolio/certificate-image-dialog";

export const metadata: Metadata = {
  title: "Certifications",
  description: "My certifications and achievements.",
  alternates: {
    canonical: "/certifications",
  },
};

export default function CertificationsPage() {
  return (
    <div className="space-y-6 pb-16">
      <section className="border-4 border-black bg-card p-4 shadow-retro-lg sm:p-6 md:p-8">
        <h1 className="font-pixel text-3xl uppercase sm:text-4xl md:text-5xl">
          Certifications
        </h1>
        <p className="mt-3 max-w-3xl text-sm font-medium leading-relaxed sm:text-base">
          The certifications I've earned along the way.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-2xl uppercase sm:text-3xl">
          Licenses & Certifications
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {/* Machine Learning Stanford */}
          <div className="border-4 border-black bg-card p-4 shadow-retro-sm md:p-6 relative transition-transform hover:-translate-y-1 hover:shadow-retro-md">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="shrink-0 border-4 border-black overflow-hidden bg-white w-full sm:w-32 aspect-video flex items-center justify-center relative">
                <CertificateImageDialog 
                  src="/ml-certification.jpeg" 
                  alt="Machine Learning Stanford Certificate" 
                />
              </div>
              <div className="flex-1 space-y-2">
                <div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-black dark:text-white sm:text-2xl">
                    Machine Learning
                  </h3>
                  <p className="font-pixel text-xs sm:text-sm text-primary font-bold mt-1">
                    Stanford University
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Introduction To Networking NVIDIA */}
          <div className="border-4 border-black bg-card p-4 shadow-retro-sm md:p-6 relative transition-transform hover:-translate-y-1 hover:shadow-retro-md">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="shrink-0 border-4 border-black overflow-hidden bg-white w-full sm:w-32 aspect-video flex items-center justify-center relative">
                <CertificateImageDialog 
                  src="/intro-to-networking-nvidia.jpeg" 
                  alt="Introduction To Networking NVIDIA Certificate" 
                />
              </div>
              <div className="flex-1 space-y-2">
                <div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-black dark:text-white sm:text-2xl">
                    Introduction To Networking
                  </h3>
                  <p className="font-pixel text-xs sm:text-sm text-primary font-bold mt-1">
                    NVIDIA
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Python UDEMY */}
          <div className="border-4 border-black bg-card p-4 shadow-retro-sm md:p-6 relative transition-transform hover:-translate-y-1 hover:shadow-retro-md">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="shrink-0 border-4 border-black overflow-hidden bg-white w-full sm:w-32 aspect-video flex items-center justify-center relative">
                <CertificateImageDialog 
                  src="/python-udemy.jpg" 
                  alt="Python Udemy Certificate" 
                />
              </div>
              <div className="flex-1 space-y-2">
                <div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-black dark:text-white sm:text-2xl">
                    Python
                  </h3>
                  <p className="font-pixel text-xs sm:text-sm text-primary font-bold mt-1">
                    Udemy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
