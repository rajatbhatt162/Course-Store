'use client'
import { HoverEffect } from "./ui/card-hover-effect";

export function CardHover() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Classical Symphony",
    description:
      "Experience the timeless beauty of classical symphonies that have shaped the music world.",
    link: "https://www.youtube.com/watch?v=9E6b3swbnWg",
  },
  {
    title: "Jazz Grooves",
    description:
      "Dive into the smooth and soulful world of jazz music with legendary performances.",
    link: "https://www.youtube.com/watch?v=vmDDOFXSgAs",
  },
  {
    title: "Rock Legends",
    description:
      "Relive the greatest rock performances from legendary bands that defined generations.",
    link: "https://www.youtube.com/watch?v=fJ9rUzIMcZQ",
  },
  {
    title: "Electronic Beats",
    description:
      "Get lost in the hypnotic rhythms and deep basslines of electronic dance music.",
    link: "https://www.youtube.com/watch?v=3tUh-x-fp8Q",
  },
  {
    title: "Acoustic Sessions",
    description:
      "Enjoy the raw and intimate sound of unplugged performances from various artists.",
    link: "https://www.youtube.com/watch?v=2vjPBrBU-TM",
  },
  {
    title: "Hip-Hop Classics",
    description:
      "Celebrate the greatest hip-hop tracks and artists that revolutionized the genre.",
    link: "https://www.youtube.com/watch?v=ktvTqknDobU",
  },
];
