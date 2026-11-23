import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { VideoPlayer } from "@/components/shared/VideoPlayer";
import { videos } from "@/data/media";

const items = [
  {
    video: videos.wearableLifestyle,
    title: "AI that goes where you go",
    text: "Wearable AI designed to fit naturally into everyday life — at work, at home and on the move.",
  },
  {
    video: videos.onTheRoad,
    title: "Smart technology on the road",
    text: "Intelligent devices that stay with you wherever the day takes you.",
  },
];

export function VideoShowcase() {
  return (
    <section className="section bg-soft" aria-labelledby="video-title">
      <div className="container-x">
        <SectionHeading
          eyebrow="See It in Action"
          title={<span id="video-title">The future of technology, <span className="text-gold-gradient">in motion</span></span>}
          description="Watch how next-generation AI devices are becoming part of everyday life."
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {items.map(({ video, title, text }, i) => (
            <Reveal key={video.src} delay={i * 0.1}>
              <VideoPlayer video={video} />
              <h3 className="mt-6 text-xl font-extrabold">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
