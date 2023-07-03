"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

import { footerVariants } from "@/utils/motion";
import styles from "@/styles";
import { socials } from "@/constants";

export default function Footer() {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.paddings} py-8 relative`}
    >
      <div className="footer-gradien" />
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className="flex items-center justify-between flex-wrap gap-5">
          <h4 className="font-bold md:text-6xl text-4xl text-white">
            Enter the Metaverse
          </h4>
          <button
            type="button"
            className="flex items-center justify-center h-fit py-4 px-6 bg-cyan-500 rounded-[32px] gap-3"
          >
            <Icon icon="bi:headset-vr" className="text-2xl text-white" />
            <span className="font-normal text-base text-white">
              ENTER METAVERSE
            </span>
          </button>
        </div>
        <div className="flex flex-col">
          <div className="mb-12 h-[2px] bg-white opacity-10" />
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h4 className="font-extrabold text-2xl text-white">METAVERUS</h4>
            <p className="font-normal text-sm text-gray-300">
              Copyright © 2021 - 2022 Metaversus. All rights reserved.
            </p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <a href={social.url} target="_blank" key={social.name}>
                  <Icon icon={social.icon} className="text-2xl text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
