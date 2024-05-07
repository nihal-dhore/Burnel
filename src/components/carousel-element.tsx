import { Carousel } from "./carousel";
import Arrow from "../assets/arrow.svg"

export const CarouselElement = () => {
  return (
    <section className="z-10 flex flex-col gap-y-8">
      <div className="font-semibold text-4xl max-w-[398px]">
        Enhance fortune 50 company's insights teams research capabilities.
      </div>
      <Carousel />
      <button className="absolute top-[828px] bg-[#1C1C1C] text-white font-semibold px-10 py-8 max-w-[245px] rounded-full flex items-center justify-center gap-x-3">
        Explore More 
        <img src={Arrow} alt="arrow" className="inline-block" />
      </button>
    </section>
  );
};
