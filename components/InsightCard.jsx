"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

import { fadeIn } from "@/utils/motion";

export default function InsightCard({ imgUrl, title, subtitle, url, index }) {
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    className="flex flex-col md:flex-row gap-4"
  >
    <Image
      src={imgUrl}
      width={300}
      height={250}
      alt="planet"
      className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
    />
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-16 flex flex-col max-w-[650px] gap-4">
        <h4 className="font-normal lg:text-5xl text-2xl text-secondary-white">
          {title}
        </h4>
        <p className="font-normal lg:text-xl text-sm text-secondary-white">
          {subtitle}
        </p>
      </div>
      <a
        href={url}
        target="_blank"
        className="lg:flex hidden items-center justify-center w-24 h-24 rounded-full bg-transparent border border-white"
      >
        <Icon
          icon="radix-icons:arrow-top-right"
          className="w-[40%] h-[40%] text-white"
        />
      </a>
    </div>
  </motion.div>;
}
