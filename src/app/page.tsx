"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
// import { VelocityScroll } from "@/registry/magicui/scroll-based-velocity";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#18230F] relative z-50">
      <div className="min-h-screen  w-full p-0 m-0">
        {/* Header/Navigation */}
        <header className="container mx-auto pt-4 pb-2 border-gray-50/30 px-6 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center gap-2">
              <p className="text-white font-bold text-2xl pb-1">wa.</p>
              <p className="text-white">Waseem Akram.</p>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 ">
              <Link
                href="/"
                className="text-white hover:text-[#1F7D53] transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-[#1F7D53] transition-colors"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-white hover:text-[#1F7D53] transition-colors"
              >
                Visa Types
              </Link>
              <Link
                href="/testimonials"
                className="text-white hover:text-[#1F7D53] transition-colors"
              >
                Testimonials
              </Link>
              {/* <div className="relative inline-flex items-center">
              <Link
                href="/live"
                className="text-white hover:text-[#1F7D53] transition-colors"
              >
                Live
              </Link>
              <span className="absolute -top-2 -right-2 bg-red-500 text-[10px] text-white px-1 rounded-sm">
                LIVE
              </span>
            </div> */}
              <Link
                href="/blog"
                className="text-white hover:text-[#1F7D53] transition-colors"
              >
                Help Center
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>

            <div className="hidden md:flex items-center gap-3">
              <Button className="bg-[#1F7D53] hover:bg-[#255F38] text-white rounded-full">
                Book a call
              </Button>
              <Button
                variant="outline"
                className="text-white border-gray-600 bg-transparent hover:bg-white rounded-full"
              >
                Get In Touch <span className="ml-1">→</span>
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 p-4 bg-[#27391C] rounded-lg">
              <nav className="flex flex-col gap-4">
                <Link
                  href="/"
                  className="text-white hover:text-[#1F7D53] transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-white hover:text-[#1F7D53] transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="/services"
                  className="text-white hover:text-[#1F7D53] transition-colors"
                >
                  Visa Types
                </Link>
                <Link
                  href="/testimonials"
                  className="text-white hover:text-[#1F7D53] transition-colors"
                >
                  Testimonials
                </Link>
                {/* <div className="relative inline-flex items-center">
                <Link
                  href="/live"
                  className="text-white hover:text-[#1F7D53] transition-colors"
                >
                  Live
                </Link>
                <span className="absolute top-0 -right-6 bg-red-500 text-[10px] text-white px-1 rounded-sm">
                  LIVE
                </span>
              </div> */}
                <Link
                  href="/blog"
                  className="text-white hover:text-[#1F7D53] transition-colors"
                >
                  Help Center
                </Link>
                <div className="flex flex-col gap-2 mt-2">
                  <Button className="bg-[#1F7D53] hover:bg-[#255F38] text-white rounded-full">
                    Get Consultation
                  </Button>
                  <Button
                    variant="outline"
                    className="text-white border-white hover:bg-white/10 rounded-full"
                  >
                    Get In Touch <span className="ml-1">→</span>
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <h2 className="absolute "></h2>
        <section className="container mx-auto py-12 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            Start your journey <span className="text-[#1F7D53]">abroad</span>.
          </h1>

          <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-center">
            Trusted visa help
          </h2>
          <h4 className="text-3xl md:text-xl lg:text-2xl text-white/50 mb-8 text-center max-w-[580px] mx-auto">
            With years of experience and hundreds of successful clients, I am
            here to guide your journey abroad.
          </h4>
          <Button className="bg-[#1F7D53] hover:bg-[#255F38] text-white text-lg px-8 py-6 rounded-full">
            Start Your Journey
          </Button>

          <div className="flex items-center justify-center mt-8 gap-1">
            <div className="flex -space-x-3">
              <div className="w-9 h-9 object-cover border-1  rounded-full  overflow-hidden">
                <Image
                  src="/images/testimonial1.jpeg"
                  alt="Team member"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div className="w-9 h-9 object-cover border-1  rounded-full  overflow-hidden">
                <Image
                  src="/images/testimonial2.jpeg"
                  alt="Team member"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div className="w-9 h-9 object-cover border-1  rounded-full  overflow-hidden">
                <Image
                  src="/images/testimonial3.jpeg"
                  alt="Team member"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div className="w-9 h-9 object-cover border-1  rounded-full  overflow-hidden">
                <Image
                  src="/images/testimonial4.jpeg"
                  alt="Team member"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
            </div>
            <span className="text-white/50 ml-3">
              Helping professionals achieve their visa goals worldwide.
            </span>
          </div>
        </section>

        {/* Five Block Grid Section with Smoky Shadow */}
        <section className="container mx-auto relative">
          {/* Smoky shadow effect */}
          {/* <div className="absolute top-0 left-0 right-0 h-24 bg-white/ to-transparent z-10"></div> */}

          {/* Background pattern of dots */}
          {/* <div className="absolute inset-0 grid grid-cols-12 gap-4 pointer-events-none">
          {Array(120)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="w-1 h-1 rounded-full bg-white"
              ></div>
            ))}
        </div> */}

          {/* Diamond Layout */}
          {/* <img src="/images/dots.jpg" alt="" className="mix-blend-color-burn absolute z-[-1] h-100 right-100 top-30"  /> */}
          <div className="flex gap-4 justify-center">
            <div className="flex flex-col gap-8">
              {/* Block 1 - Top Left */}
              <div className="w-[14rem] bg-[#27391C] rounded-3xl p-8 relative overflow-hidden flex items-center justify-center h-48">
                <div className="grid grid-cols-6 gap-2 opacity-10 absolute inset-0 p-4">
                  {Array(36)
                    .fill(0)
                    .map((_, i) => (
                      <div
                        key={i}
                        className="text-white text-2xl flex items-center justify-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-user"
                        >
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </div>
                    ))}
                </div>
                <div className="relative z-10 text-white ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-user"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
              </div>

              <div className="h-[13rem] bg-[#1F7D53]/20 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute bottom-28 right-2  opacity-5">
                  <div className="text-[120px] font-bold text-white/70 leading-none">
                    wa.
                  </div>
                </div>
                <div className="absolute bottom-10 right-2 opacity-5">
                  <div className="text-[120px] font-bold text-white/70 leading-none">
                    wa.
                  </div>
                </div>
                <div className="relative z-10 flex top-[122px] left-[6rem]">
                  <div className="text-white font-bold text-5xl">wa.</div>
                </div>
              </div>
            </div>

            {/* Block 2 - Center */}
            <div className=" rounded-3xl overflow-hidden h-[500px] w-[460px] mt-4 mb-4">
              <Image
                src="/images/reading-menu.jpeg"
                alt="Waseem Akram reviewing business documents"
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-6 mt-28">
              {/* Block 4 - Bottom Left */}

              <div className="w-[14rem] bg-[#255F38] rounded-3xl p-8 relative overflow-hidden flex items-center justify-center h-48">
                <div className="grid grid-cols-6 gap-2 opacity-10 absolute inset-0 p-4">
                  {Array(36)
                    .fill(0)
                    .map((_, i) => (
                      <div
                        key={i}
                        className="text-white text-2xl flex items-center justify-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-briefcase"
                        >
                          <rect
                            width="20"
                            height="14"
                            x="2"
                            y="7"
                            rx="2"
                            ry="2"
                          />
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                        </svg>
                      </div>
                    ))}
                </div>
                <div className="relative z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-briefcase"
                  >
                    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
              </div>

              {/* Block 5 - Bottom Right */}
              <div className="w-[14rem] rounded-3xl overflow-hidden h-48">
                <Image
                  src="/images/thinking.jpeg"
                  alt="Waseem Akram thinking"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        {/* <img
        src="/images/shadow.png"
        alt=""
        className="w-full mt-[-00px] relative -z-10"
      /> */}
        
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/80 to-transparent -z-10"></div>
        
      </div>
    </div>
  );
}
