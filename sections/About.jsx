"use client";

import { motion } from "framer-motion";
import { TypingText } from "@/components";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { Icon } from "@iconify/react";
import styles from "../styles";

export default function About() {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div className="gradient-02 z-0 " />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText title="| About Metaversus" textStyles="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-2 font-normal sm:text-[32px] text-xl text-center text-secondary-white leading-tight"
        >
          <span className="text-white font-bold">Metaverse </span>
          is a new thing in the future, where you can enjoy the virtual world by
          feeling like it's really real, you can feel what you feel in this
          metaverse world, because this is really the
          <span className="text-white font-bold">
            {" "}
            madness of the metaverse{" "}
          </span>
          of today, using only{" "}
          <span className="text-white font-bold"> VR </span>
          devices you can easily explore the metaverse world you want, turn your
          dreams into reality. Let's{" "}
          <span className="text-white font-bold">explore </span>
          the madness of the metaverse by scrolling down
        </motion.p>
        <motion.span variants={fadeIn("up", "tween", 0.3, 1)} className="mt-7">
          <Icon icon="bi:arrow-down" className="text-4xl text-white" />
        </motion.span>
      </motion.div>
    </section>
  );
}
