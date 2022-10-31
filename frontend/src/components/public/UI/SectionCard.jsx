const SectionCard = ({ name, img, alt, text }) => {
  return (
    <article className="m-2 flex h-64 w-[300px] flex-col items-center rounded-xl leading-loose hover:shadow-custom">
      <figure className="relative -mt-16 h-32 w-32">
        <img
          alt={alt}
          src={img}
          className="h-full w-full rounded-full object-cover"
        />
      </figure>

      <div className="m-8 text-center">
        <p className="font-semibold">{name}</p>
        <button className="w-48 rounded-xl border border-solid border-slate-900 bg-green-900 p-3 text-white hover:bg-green-700 active:bg-green-500 dark:border-none">
          Button za sekciju
        </button>
      </div>
    </article>
  );
};

export default SectionCard;
