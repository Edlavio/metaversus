"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

import styles from "../styles";
import { navVariants } from "@/utils/motion";

export default function Navbar() {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <Icon
          icon="akar-icons:search"
          className="text-2xl text-white"
        />
        <h2 className="font-extrabold text-2xl leading-8 text-white">
          METAVERSUS
        </h2>
        <Icon
          icon="heroicons-outline:menu-alt-3"
          className="text-2xl text-white"
        />
      </div>
    </motion.nav>
  );
}
