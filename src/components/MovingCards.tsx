"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote: "Music can change the world because it can change people.",
    name: "Bono",
    title: "Lead Singer of U2",
  },
  {
    quote: "Where words fail, music speaks.",
    name: "Hans Christian Andersen",
    title: "Danish Author & Poet",
  },
  {
    quote: "Without music, life would be a mistake.",
    name: "Friedrich Nietzsche",
    title: "Philosopher & Composer",
  },
  {
    quote: "Music is the strongest form of magic.",
    name: "Marilyn Manson",
    title: "Musician & Songwriter",
  },
  {
    quote: "One good thing about music, when it hits you, you feel no pain.",
    name: "Bob Marley",
    title: "Reggae Legend",
  },
  {
    quote:
      "Music expresses that which cannot be put into words and that which cannot remain silent.",
    name: "Victor Hugo",
    title: "French Writer & Poet",
  },
];

function MovingCards() {
  return (
    <div className="h-[40rem] w-full bg-black bg-grid-white/[0.1] dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center px-4 md:px-8 lg:px-16">
      <h2
        className="
      text-3xl font-bold text-center mb-8 text-white"
      >
        Hear Our Harmony: Voice of Success
      </h2>
      <div className="w-full max-w-5xl">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}

export default MovingCards;
