"use client";

import styles from "@/styles";
import { Icon } from "@iconify/react";

const NewFeatures = ({ iconName, title, subtitle }) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-3xl bg-[#323f5d]`}
    >
      <Icon icon={iconName} alt="icon" className="w-1/2 h-1/2 text-white" />
    </div>
    <h1 className="mt-7 font-bold text-2xl text-white">{title}</h1>
    <p className="flex-1 mt-4 font-normal text-lg text-gray-300 leading-8">
      {subtitle}
    </p>
  </div>
);

export default NewFeatures;
