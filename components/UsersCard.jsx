function UsersCard({ title, imgUrl, cardStyles }) {
  return (
    <div className={`${cardStyles} absolute w-48 h-36 p-2 rounded-3xl bg-[#5d6680]`}>
      <img
        src={imgUrl}
        alt={title}
        className="relative w-full h-full rounded-3xl object-cover"
      />
      <div className="absolute left-5 bottom-4 flex flex-col gap-2">
        <div className="flex gap-2">
          <span className="flex">
            <img
              src="/people-01.png"
              alt="people"
              className="w-5 h-5 object-contain"
            />
            <img
              src="/people-02.png"
              alt="people"
              className="w-5 h-5 object-contain -ml-2"
            />
            <img
              src="/people-03.png"
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

export default UsersCard;
