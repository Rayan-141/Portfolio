"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/retroui/Dialog";

interface CertificateImageDialogProps {
  src: string;
  alt: string;
}

export function CertificateImageDialog({ src, alt }: CertificateImageDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="relative w-full h-full cursor-pointer hover:opacity-90 transition-opacity">
          <Image 
            src={src} 
            alt={alt} 
            fill 
            className="object-cover"
          />
        </button>
      </DialogTrigger>
      <DialogContent size="4xl" className="p-0 border-4 border-black overflow-hidden bg-white max-h-[90vh] h-auto aspect-video">
        <div className="relative w-full h-full min-h-[50vh]">
          <Image 
            src={src} 
            alt={alt} 
            fill 
            className="object-contain p-4"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
