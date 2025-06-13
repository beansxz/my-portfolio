"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <section
            ref={ref}
            id="home"
            className="mb-28 max-w-5xl mx-auto px-4 sm:mb-0 scroll-mt-[100rem]"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center p-8">
                {/* Details (Left) */}
                <motion.div
                    className="text-center md:text-left space-y-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <div className="text-5xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                    <div className="text-3xl text-black/75 dark:text-white/85">
                        hi, i'm {" "} 
                    </div> 
                        beansxz
                    <span className="text-5xl text-gray-900 dark:text-white/85">
                        👋
                    </span> 
                    </div>
                    
                    <div className="text-2xl font-black text-black/75 dark:text-white/75">
                        Code • Create • Innovate
                    </div>
                    <div className="text-lg text-gray-600 dark:text-white/80">
                        I'm a passionate software developer with a knack for
                        crafting elegant solutions and building innovative
                        applications. Let's connect and create something amazing
                        together!
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-3 mt-6">
                        <Link
                            href="#contact"
                            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                            onClick={() => {
                                setActiveSection("Contact");
                                setTimeOfLastClick(Date.now());
                            }}
                        >
                            Contact me{" "}
                            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                        </Link>
                        <a
                            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
                            href="/CV.pdf"
                            download
                        >
                            Download CV{" "}
                            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                        </a>
                    </div>
                </motion.div>
                {/* Image (Right, Modern Full-Section Cover) */}
                <motion.div
                    className="relative w-full h-64 md:h-auto md:min-h-[400px] flex items-center justify-center"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <Image
                        src="/img/beansxz.jpg"
                        alt="beansxz"
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-xl shadow-2xl border-4 border-white dark:border-gray-800"
                        priority
                    />
                </motion.div>
            </div>
        </section>
    );
}