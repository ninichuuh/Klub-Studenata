const SectionCard = ({ name, img, alt, text }) => {
  return (
    <article className="m-2 flex h-64 w-[300px] flex-col items-center rounded-xl leading-loose transition delay-150 ease-in-out hover:scale-110 hover:shadow-custom">
      <figure className="relative -mt-16 h-32 w-32">
        <img
          alt={alt}
          src={img}
          className="h-full w-full rounded-full object-cover"
        />
      </figure>

      <div className="m-8 text-center">
        <h3 className="mb-3 text-xl font-semibold">{name}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
};

export default SectionCard;
