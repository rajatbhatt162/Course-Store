"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
const content = [
  {
    title: "Seamless Music Collaboration",
    description:
      "Create, edit, and share music tracks with your band, producers, and collaborators in real time. Work on your projects together no matter where you are, ensuring seamless workflow and creative synergy.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] flex items-center justify-center text-white">
        Seamless Music Collaboration
      </div>
    ),
  },
  {
    title: "Live Track Editing",
    description:
      "Make real-time changes to your music tracks as you compose. Hear updates instantly and fine-tune every note to perfection without the hassle of saving multiple versions.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
       Live Track Editing
      </div>
    ),
  },
  {
    title: "Version Control for Tracks",
    description:
      "Keep track of every modification in your music projects effortlessly. Our platform saves every edit, so you can revisit previous versions, compare changes, and ensure your music evolves just as you envision.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--green-500))] flex items-center justify-center text-white">
        Version Control for Tracks
      </div>
    ),
  },
  {
    title: "Never Run Out of Inspiration",
    description:
      "With our AI-powered music suggestion engine, you'll never face writer's block again. Get chord progressions, melody recommendations, and rhythm patterns tailored to your style, helping you stay creative and productive.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--indigo-500),var(--violet-500))] flex items-center justify-center text-white">
        Never Run Out of Inspiration
      </div>
    ),
  },
  {
    title: "High-Quality Audio Mixing",
    description:
      "Enhance your music with professional-grade mixing tools. Adjust levels, apply effects, and achieve the perfect balance to make your tracks sound polished and industry-ready.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--red-500),var(--yellow-500))] flex items-center justify-center text-white">
        High-Quality Audio Mixing
      </div>
    ),
  },
  {
    title: "Collaborate with Session Musicians",
    description:
      "Connect with talented session musicians worldwide. Find the perfect vocalist, guitarist, or drummer to bring your music to life, all within our platform.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborate with Session Musicians
      </div>
    ),
  },
  {
    title: "Distribute Your Music Effortlessly",
    description:
      "Publish your music directly to streaming platforms like Spotify, Apple Music, and YouTube. Manage your releases and reach a global audience with just a few clicks.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--pink-500))] flex items-center justify-center text-white">
        Distribute Your Music Effortlessly
      </div>
    ),
  },
];

function WhychooseUs() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}

export default WhychooseUs;
