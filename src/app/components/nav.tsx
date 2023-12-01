"use client";

import { Suspense } from "react";

const navItems = {
  "/": {
    name: "home",
  },
  "/projects": {
    name: "projects",
  },
  "/resume": {
    name: "resume",
  },
  "/contact": {
    name: "contact",
  },
};

export default function Nav() {
  return (
    <nav>
      <div className="py-4 sm:py-4">
        <h1>Home | Projects | Resume | Contact</h1>
      </div>
    </nav>
  );
}
