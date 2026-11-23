"use client";

import { useRef } from "react";
import { Play, X } from "lucide-react";
import { videos } from "@/data/media";

/** "Watch Overview" button that opens the lifestyle video in a native <dialog>. */
export function WatchOverviewButton({ light = false }: { light?: boolean }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const v = videos.wearableLifestyle;

  const open = () => {
    dialogRef.current?.showModal();
    videoRef.current?.play().catch(() => {});
  };
  const close = () => dialogRef.current?.close();

  return (
    <>
      <button type="button" onClick={open} className={`group inline-flex min-h-12 items-center gap-3 rounded-full pr-4 text-[15px] font-semibold ${light ? "text-white" : "text-forest"}`}>
        <span className={`grid size-12 place-items-center rounded-full border-2 transition ${light ? "border-gold-light/80 text-gold-light group-hover:bg-gold-light group-hover:text-forest" : "border-forest/80 bg-white group-hover:bg-forest group-hover:text-white"}`}>
          <Play className="ml-0.5 size-4 fill-current" aria-hidden />
        </span>
        Watch Overview
      </button>

      <dialog
        ref={dialogRef}
        aria-label={v.title}
        onClose={() => videoRef.current?.pause()}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        className="m-auto w-[min(92vw,1100px)] max-w-none bg-transparent p-0 backdrop:bg-[#0a1a14]/85 backdrop:backdrop-blur-sm"
      >
        <div className="relative">
          <button
            type="button"
            onClick={close}
            aria-label="Close video"
            className="absolute -top-14 right-0 grid size-11 place-items-center rounded-full bg-white text-forest shadow-lg transition hover:bg-gold-light"
          >
            <X className="size-5" aria-hidden />
          </button>
          <video
            ref={videoRef}
            controls
            playsInline
            preload="none"
            poster={v.poster}
            width={v.width}
            height={v.height}
            className="block h-auto w-full rounded-2xl bg-black"
          >
            <source src={v.src} type="video/mp4" />
          </video>
        </div>
      </dialog>
    </>
  );
}
