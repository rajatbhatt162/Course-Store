"use client";
import React from "react";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

const courseData = {
  courses: [
    {
      id: 1,
      title: "React for Beginners",
      slug: "react-for-beginners",
      description: "Learn React from scratch!",
      price: 49.99,
      instructor: "John Doe",
      isFeatured: true,
    },
    {
      id: 2,
      title: "Advanced Next.js",
      slug: "advanced-nextjs",
      description: "Master Next.js with real-world projects.",
      price: 79.99,
      instructor: "Jane Smith",
      isFeatured: true,
    },
    {
      id: 3,
      title: "JavaScript Mastery",
      slug: "javascript-mastery",
      description: "Deep dive into JavaScript and modern ES6+ features.",
      price: 59.99,
      instructor: "Alex Johnson",
      isFeatured: true,
    },
    {
      id: 4,
      title: "Full-Stack Web Development",
      slug: "full-stack-web-dev",
      description: "Become a full-stack developer with hands-on projects.",
      price: 99.99,
      instructor: "Emily Davis",
      isFeatured: true,
    },
    {
      id: 5,
      title: "CSS for Designers",
      slug: "css-for-designers",
      description: "Master CSS and create stunning web designs.",
      price: 39.99,
      instructor: "Michael Lee",
      isFeatured: true,
    },
    {
      id: 6,
      title: "Python for Data Science",
      slug: "python-data-science",
      description: "Learn Python and its applications in data science.",
      price: 89.99,
      instructor: "Sarah Wilson",
      isFeatured: true,
    },
  ],
};

function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <>
      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          FEATURED COURSES
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Learn With the Best
        </p>
      </div>

      <div className="mt-2 grid gap-2 md:grid-cols-2 lg:grid-cols-3">
        {featuredCourses.map((course) => (
          <div
            key={course.id}
            className="p-6 rounded-lg shadow-md flex flex-col h-full"
          >
            <BackgroundGradient className="rounded-lg">
              <div className="h-full flex flex-col justify-between p-6 bg-gray-800 rounded-3xl">
                <h3 className="text-xl font-bold text-white">{course.title}</h3>
                <p className="mt-2 text-gray-300 flex-grow">
                  {course.description}
                </p>
                <p className="mt-2 text-teal-400 font-semibold">
                  ${course.price}
                </p>
              </div>
            </BackgroundGradient>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/courses"
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          View All Courses
        </Link>
      </div>
    </>
  );
}

export default FeaturedCourses;
