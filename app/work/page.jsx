"use client";
import React from "react";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Interactive Dev Portfolio",
    category: "frontend",
    description:
      "A beautiful animated developer portfolio built with Framer Motion and Tailwind, featuring project showcases, dark mode, and responsive design.",
    image: "/assets/work/thumb1.png",
    link: "https://portfolio.dev",
    github: "https://github.com/yourusername/interactive-portfolio",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 2,
    title: "Crypto Stats UI",
    category: "frontend",
    description:
      "A frontend-only crypto market viewer fetching data from CoinGecko API with charting, filtering, and real-time price updates.",
    image: "/assets/work/thumb2.png",
    link: "https://cryptostats.dev",
    github: "https://github.com/yourusername/crypto-stats-ui",
    tech: ["React", "Tailwind CSS", "Chart.js", "Axios"],
  },
  {
    id: 3,
    title: "RESTful Blog API",
    category: "backend",
    description:
      "A secure, scalable REST API for a blogging platform with JWT auth, CRUD posts, and MongoDB storage — built with Node.js and Express.",
    image: "/assets/work/thumb3.png",
    link: "https://blogapi.dev",
    github: "https://github.com/yourusername/blog-api-backend",
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
  },
  {
    id: 4,
    title: "AI Summarization API",
    category: "backend",
    description:
      "A backend API that uses OpenAI to summarize input content, store summaries in a database, and return formatted output.",
    image: "/assets/work/thumb4.png",
    link: "https://summarizerapi.dev",
    github: "https://github.com/yourusername/ai-summarizer-backend",
    tech: ["Node.js", "Express", "OpenAI API", "MongoDB"],
  },
  {
    id: 5,
    title: "Crypto Prediction Feed",
    category: "fullstack",
    description:
      "A community-based platform where users post, confirm, and track crypto price predictions, complete with login, charts, and leaderboards.",
    image: "/assets/work/thumb5.png",
    link: "https://predictfi.dev",
    github: "https://github.com/yourusername/crypto-prediction-app",
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind"],
  },
  {
    id: 6,
    title: "AI Agent Marketplace",
    category: "fullstack",
    description:
      "A marketplace where users can create and showcase AI chat agents, purchase access, and rate bots. Stripe, OpenAI, and Mongo backend.",
    image: "/assets/work/thumb1.png",
    link: "https://aiagents.dev",
    github: "https://github.com/yourusername/ai-agent-marketplace",
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe", "OpenAI API"],
  },
  {
    id: 7,
    title: "Web3 Voting DApp",
    category: "solidity",
    description:
      "An on-chain decentralized voting app where users can create proposals and vote via their connected wallets. Includes smart contract & frontend.",
    image: "/assets/work/thumb2.png",
    link: "https://votedapp.dev",
    github: "https://github.com/yourusername/web3-voting-dapp",
    tech: ["Solidity", "React", "Ethers.js", "Hardhat"],
  },
  {
    id: 8,
    title: "NFT Minter & Gallery",
    category: "solidity",
    description:
      "A full NFT minting app with a smart contract on testnet, IPFS image uploads, and wallet gallery. Works with MetaMask.",
    image: "/assets/work/thumb3.png",
    link: "https://mintgallery.dev",
    github: "https://github.com/yourusername/nft-minter-gallery",
    tech: ["Solidity", "React", "Ethers.js", "IPFS", "Hardhat"],
  },
];

const categories = ["frontend", "backend", "fullstack", "solidity"];

const Work = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 2.4, ease: "easeIn", duration: 0.5 }}
      className="min-h-screen flex items-center py-24 xl:py-0"
    >
      <div className="container mx-auto w-full h-full flex flex-col justify-center">
        <h2 className="h2 mb-6 xl:mb-12 max-w-[600px]">
          My Latest <span className="text-accent">Work</span>
        </h2>
        <Tabs
          defaultValue="frontend"
          className="w-full flex flex-col gap-6 xl:gap-12"
        >
          <TabsList className="flex flex-wrap justify-center items-center gap-4 h-full mb-4 xl:mb-0">
            {categories.map((category) => {
              return (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="capitalize border border-white/10 data-[state=active]:bg-accent data-[state-active]:border-accent h-[48px] px-6 rounded-full cursor-pointer"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className="h-[400px] scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible">
            {categories.map((category) => {
              return (
                <TabsContent key={category} value={category}>
                  <Swiper
                    modules={{ Pagination }}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    className="h-max xl:h-[460px]"
                  >
                    {projects
                      .filter((project) => project.category === category)
                      .map((project) => {
                        return (
                          <SwiperSlide key={project.id} className="h-full">
                            <div className="flex flex-col xl:flex-row gap-8 xl:gap-12">
                              <div className="w-full max-w-[380px] flex flex-col gap-6 xl:gap-8 xl:pt-6 order-2 xl:order-none">
                                <h3 className="h3">{project.title}</h3>
                                <div className="xl:mb-4 max-w-[300px] min-h-[130px]">
                                  <p className="mb-4">Technologies Used</p>
                                  <ul className="flex flex-wrap gap-4">
                                    {project.tech.map((item, index) => {
                                      return (
                                        <li
                                          key={index}
                                          className="flex items-center gap-4 bg-[#a883ff]/13 h-[20px] px-[14px] rounded-full"
                                        >
                                          {item}
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>
                                {/* btns */}
                                <div className="flex flex-col xl:flex-row  gap-4 items-start">
                                  <Link href={project.link}>
                                    <button className="btn btn-sm btn-accent flex gap-2">
                                      <MdArrowOutward className="text-xl" />
                                      <span>Live Project</span>
                                    </button>
                                  </Link>
                                  <Link href={project.link}>
                                    <button className="btn btn-sm btn-white flex gap-2">
                                      <FaGithub className="text-xl" />
                                      <span>Github Repo</span>
                                    </button>
                                  </Link>
                                </div>
                              </div>
                              {/* project img  */}
                              <div className="w-full h-[200px] md:h-[300px] xl:h-[400px] relative bg-pink-50/10 order-1 xl:order-none rounded-lg overflow-hidden">
                                <Image
                                  src={project.image}
                                  alt={project.image}
                                  fill
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                  className="object-cover rounded-lg"
                                  priority
                                />
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                  </Swiper>
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
};

export default Work;
