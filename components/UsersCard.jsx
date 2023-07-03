import Image from "next/image";

export default function UsersCard({ title, imgUrl, cardStyles }) {
  return (
    <div
      className={`${cardStyles} absolute w-48 h-36 p-2 rounded-3xl bg-[#5d6680]`}
    >
      <Image
        src={imgUrl}
        width={600}
        height={600}
        alt={title}
        className="relative w-full h-full rounded-3xl object-cover"
      />
      <div className="absolute left-5 bottom-4 flex flex-col gap-2">
        <div className="flex gap-2">
          <span className="flex">
            <Image
              src="/people-01.png"
              width={24}
              height={24}
              alt="people"
              className="w-5 h-5 object-contain"
            />
            <Image
              src="/people-02.png"
              width={24}
              height={24}
              alt="people"
              className="w-5 h-5 object-contain -ml-2"
            />
            <Image
              src="/people-03.png"
              width={24}
              height={24}
              alt="people"
              className="w-5 h-5 object-contain -ml-2"
            />
          </span>
          <span className="text-white text-xs font-medium">
            + 264 has joined
          </span>
        </div>
        <span className="text-white text-lg font-bold">{title}</span>
      </div>
    </div>
  );
}
