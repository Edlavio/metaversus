"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer, fadeIn } from "@/utils/motion";
import { TitleText, TypingText } from "@/components";
import UsersCard from "@/components/UsersCard";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative flex mt-16 w-full h-[500px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />
        <div className="absolute top-[10%] left-[10%] w-[70px] h-[70px] p-2 rounded-full bg-[#5d6680]">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-[55%] left-[43%] w-[70px] h-[70px] p-2 rounded-full bg-[#5d6680]">
          <img src="/people-03.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-4 md:top-[70%] right-[5%] md:right-[10%] w-[70px] h-[70px] p-2 rounded-full bg-[#5d6680]">
          <img src="/people-01.png" alt="people" className="w-full h-full" />
        </div>
        <UsersCard title="Hawkins Labs" imgUrl="/planet-03.png" cardStyles="hidden md:block top-0 right-1/4" />
        <UsersCard title="The Upside Down" imgUrl="/planet-02.png" cardStyles="hidden md:block top-[43%] left-[20%]" />
      </motion.div>
    </motion.div>
  </section>
);

export default World;
