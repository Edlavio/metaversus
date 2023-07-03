"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

import { fadeIn } from "../utils/motion";
import styles from "../styles";

export default function ExploreCard({
  id,
  imgUrl,
  title,
  index,
  active,
  handleClick,
}) {
  return (
    <motion.div
      variants={fadeIn("right", "sprind", index * 0.5, 0.75)}
      className={`relative 
    ${active === id ? "lg:flex-[3.5] flex-10" : "lg:flex-[0.5] flex-[2]"}
    ${styles.flexCenter}
    min-w-[170px] h-[700px] transition-[flex] duration-700 ease-out-flex cursor-pointer`}
      onClick={() => handleClick(id)}
    >
      <Image
        src={imgUrl}
        alt={title}
        width={1000}
        height={1000}
        className="relative w-full h-full object-cover rounded-3xl"
      />
      {active !== id ? (
        <h3 className="font-semibold sm:text-2xl text-lg text-white absolute z-0 lg:bottom-20 lg:-rotate-90 lg:origin-[0,0]">
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgb(0,0,0,0.5)] rounded-[24px]">
          <div
            className={`${styles.flexCenter} w-16 h-16 rounded-[24px] glassmorphism mb-4`}
          >
            <Icon icon="bi:headset-vr" className="w-1/2 h-1/2 text-white" />
          </div>
          <p className="font-normal text-base leading-5 text-white uppercase">
            Enter the Metaverse
          </p>
          <h2 className="mt-6 font-semibold sm:text-[32px] text-2xl text-white">
            {title}
          </h2>
        </div>
      )}
    </motion.div>
  );
}
