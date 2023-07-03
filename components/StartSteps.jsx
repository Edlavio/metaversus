import styles from "../styles";

export default function StartSteps({ text, number }) {
  return (
    <div className={`${styles.flexCenter} flex-row`}>
      <div
        className={`${styles.flexCenter} w-[70px] h-[70px] rounded-3xl bg-[#323f5d]`}
      >
        <p className="font-bold text-xl text-white">0{number}</p>
      </div>
      <p className="flex-1 ml-8 font-normal text-lg text-gray-300 leading-8">
        {text}
      </p>
    </div>
  );
}
