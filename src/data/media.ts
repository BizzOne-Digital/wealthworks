/** Client-provided videos. Posters are frames extracted from each video. */
export const videos = {
  wearableLifestyle: {
    src: "/videos/ai-wearable-lifestyle.mp4",
    poster: "/videos/posters/ai-wearable-lifestyle.webp",
    title: "AI wearable technology in everyday life",
    width: 1280,
    height: 720,
  },
  onTheRoad: {
    src: "/videos/ai-on-the-road.mp4",
    poster: "/videos/posters/ai-on-the-road.webp",
    title: "Smart AI technology on the road",
    width: 1280,
    height: 720,
  },
  businessSystem: {
    src: "/videos/metaterra-business-system.mp4",
    poster: "/videos/posters/metaterra-business-system.webp",
    title: "Metaterra AI One — The Business System",
    width: 720,
    height: 1280,
  },
} as const;

export type VideoItem = (typeof videos)[keyof typeof videos];
