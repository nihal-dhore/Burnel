import { AskQuestions } from "./ask-questions";
import { CarouselElement } from "./carousel-element";
import { Footer } from "./footer";
import { Header } from "./header";
import { Rectangles } from "./rectangles";
import { Stats } from "./stats";
export const Home = () => {
  return (
    <section className="relative flex flex-col items-center gap-y-28 last:gap-y-[52px]">
      <Header />
      <Rectangles />
      <div className="flex items-center gap-x-[220px] mb-[79px]">
        <Stats />
        <CarouselElement />
      </div>
      <AskQuestions />
      <Footer />
    </section>
  );
};
