export const Carousel = () => {
  return (
    <section className="flex gap-x-2 w-12" id="carousel">
      <div className="bg-[#2DA950] w-[10px] h-[10px] rounded-full" />
      <div
        className="bg-[#E4E3E3] w-[10px] h-[10px] rounded-full"
        id="carousel-child"
      />
      <div className="bg-[#E4E3E3] w-[10px] h-[10px] rounded-full" />
    </section>
  );
};
