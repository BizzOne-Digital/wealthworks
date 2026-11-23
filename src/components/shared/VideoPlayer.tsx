import type { VideoItem } from "@/data/media";
import { cn } from "@/lib/utils";

/**
 * Native video with a poster. preload="none" means nothing downloads until the
 * visitor presses play, so large client videos don't slow the page.
 */
export function VideoPlayer({ video, className }: { video: VideoItem; className?: string }) {
  return (
    <div className={cn("overflow-hidden rounded-[1.75rem] bg-[#0a1a14] shadow-[0_40px_80px_-40px_rgba(15,42,32,0.6)]", className)}>
      <video
        controls
        playsInline
        preload="none"
        poster={video.poster}
        width={video.width}
        height={video.height}
        aria-label={video.title}
        className="block h-auto w-full"
      >
        <source src={video.src} type="video/mp4" />
        Your browser does not support embedded video.
      </video>
    </div>
  );
}
