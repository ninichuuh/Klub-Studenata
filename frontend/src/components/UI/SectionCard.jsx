const SectionCard = ({ name, img, alt, text }) => {
  return (
    <div className="m-2 flex h-[400px] w-[280px] flex-col items-center rounded-[7px] bg-white text-black shadow-custom">
      <img alt={alt} src={img} className="rounded-top-[5px] h-[210px] w-full" />

      <div className="m-8 text-center">
        <h3 className="mb-3 text-xl font-semibold">{name}</h3>
        <p>{text}</p>
        <button className="mt-4 font-bold text-zelena">Otvori &#10132;</button>
      </div>
    </div>
  );
};

export default SectionCard;
