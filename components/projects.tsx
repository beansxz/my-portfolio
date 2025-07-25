"use client";
import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import ProductSwapCard from "@/components/ui/cards";

// Mock project data matching ProductSwapCard format
const projects = [
  {
    id: "prisaa-dashboard",
    title: "PRISAA Sports Management System",
    excerpt: "Modern, responsive dashboard application built with React and Next.js. Features include real-time analytics, user management, and customizable widgets.",
    createdAt: "March 18, 2025",
    domain: "prisaa.dev",
    actionLabel: "View product",
    slug: "prisaa-dashboard",
    alt: [
      "PRISAA Dashboard dark mode interface showing analytics charts",
      "PRISAA Dashboard light mode interface showing user management panel",
    ],
    techStack: ["⚛️ React", "▲ Next.js", "📘 TypeScript", "🎨 Tailwind CSS", "🎭 Framer Motion"],
    thumbnail: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=640&h=360&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=640&h=360&auto=format&fit=crop",
    ],
  },
  {
    id: "fitness-tracker",
    title: "Mobile Fitness App",
    excerpt: "Cross-platform fitness tracking application with workout plans, progress monitoring, and social features for health enthusiasts.",
    createdAt: "February 12, 2025",
    domain: "fitnessapp.com",
    actionLabel: "View app",
    slug: "fitness-tracker",
    alt: [
      "Fitness app dashboard showing workout statistics",
      "Mobile interface with exercise tracking features",
    ],
    techStack: ["📱 React Native", "🟢 Node.js", "🍃 MongoDB", "🔌 Socket.io"],
    thumbnail: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=640&h=360&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1434596922112-19c563067271?q=80&w=640&h=360&auto=format&fit=crop",
    ],
  },
  {
    id: "ai-content-generator",
    title: "AI Content Generator",
    excerpt: "Intelligent content creation platform powered by machine learning for automated blog posts and social media content generation.",
    createdAt: "January 28, 2025",
    domain: "aiwriter.io",
    actionLabel: "Try demo",
    slug: "ai-content-generator",
    alt: [
      "AI content generator interface with writing tools",
      "Generated content preview and editing interface",
    ],
    techStack: ["🐍 Python", "⚡ FastAPI", "🤖 OpenAI", "⚛️ React", "🐘 PostgreSQL"],
    thumbnail: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=640&h=360&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=640&h=360&auto=format&fit=crop",
    ],
  },
  {
    id: "design-system",
    title: "Design System Library",
    excerpt: "Comprehensive UI component library with extensive documentation and theming capabilities for modern web applications.",
    createdAt: "December 15, 2024",
    domain: "designsystem.dev",
    actionLabel: "View docs",
    slug: "design-system",
    alt: [
      "Component library documentation interface",
      "Interactive component playground and examples",
    ],
    techStack: ["⚛️ React", "📚 Storybook", "📘 TypeScript", "🎨 CSS-in-JS"],
    thumbnail: [
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=640&h=360&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=640&h=360&auto=format&fit=crop",
    ],
  },
  {
    id: "crypto-wallet",
    title: "Blockchain Wallet",
    excerpt: "Secure cryptocurrency wallet with multi-chain support, DeFi integration, and advanced portfolio management features.",
    createdAt: "November 3, 2024",
    domain: "cryptowallet.app",
    actionLabel: "Download app",
    slug: "crypto-wallet",
    alt: [
      "Cryptocurrency wallet dashboard showing portfolio",
      "Transaction history and security features interface",
    ],
    techStack: ["⚛️ React", "🌐 Web3.js", "💎 Solidity", "🔗 Ethereum"],
    thumbnail: [
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=640&h=360&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=640&h=360&auto=format&fit=crop",
    ],
  },
  {
    id: "chat-platform",
    title: "Real-time Chat Platform",
    excerpt: "Scalable messaging platform with video calls, file sharing, and team collaboration tools for modern workspaces.",
    createdAt: "October 22, 2024",
    domain: "teamchat.pro",
    actionLabel: "Start chatting",
    slug: "chat-platform",
    alt: [
      "Team chat interface with multiple channels",
      "Video call feature with screen sharing capability",
    ],
    techStack: ["⚛️ React", "📹 WebRTC", "🔌 Socket.io", "🔴 Redis", "🟢 Node.js"],
    thumbnail: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=640&h=360&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=640&h=360&auto=format&fit=crop",
    ],
  },
];

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  
  return (
    <section
      ref={ref}
      id="projects"
      className="mb-28 max-w-7xl mx-auto px-4 sm:mb-0 scroll-mt-[100rem] py-20"
    >
      <div className="container mx-auto">
        {/* Header with modern typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Explore my latest work showcasing modern web technologies, innovative solutions, and creative problem-solving across various domains.
          </p>
        </motion.div>

        {/* Projects Grid using ProductSwapCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 place-items-center">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: projects.indexOf(project) * 0.1 }}
              className="w-full max-w-sm"
            >
              <ProductSwapCard
                product={project}
                className="hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2 border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm bg-white/80 dark:bg-gray-800/80"
              />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => {
                setActiveSection("Projects");
                setTimeOfLastClick(Date.now());
              }}
            >
              View All Projects
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}