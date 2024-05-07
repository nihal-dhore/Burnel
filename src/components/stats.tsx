import GirlImg from "../assets/girl-img.png";
import Spark from "../assets/spark.svg";
import Rocket from "../assets/rocket.svg";
import "../switzer.css";
export const Stats = () => {
  return (
    <section className="relative z-10">
      <div className="max-w-[506px] max-h-[546px] rounded-[80px] overflow-hidden flex items-start">
        <img src={GirlImg} alt="Girl-Image" className="" />
      </div>

      <div className="min-w-64 min-h-[239px] absolute top-[114px] -left-32 px-10 py-[35px] shadow-sh bg-white w-60 rounded-[27px]">
        <div className="flex -ml-3 gap-y-3">
          <img src={Spark} alt="spark" className="z-20 -ml-9 -mt-20" />
          <div
            className="text-6xl font-[Switzer-Medium] -ml-14 mt-2 my-4"
            id="availability"
          >
            40%
          </div>
        </div>
        <p className="shrink font-medium text-[#828282]">
          Achieved reduction in project execution time by optimising team
          availability
        </p>
      </div>

      <div className="absolute top-[412px] -left-[58px] bg-white py-4 pr-8 pl-4 rounded-full shadow-sh flex items-center gap-x-4">
        <div className="rounded-full p-[13px] bg-[#DDEFE0]">
          <img src={Rocket} alt="rocket" />
        </div>
        <div className="font-bold text-2xl">
          10 DAYS
          <div className="text-[#828282] text-base font-medium">
            Staff Deployment
          </div>
        </div>
      </div>

      <div className="absolute top-[357px] right-[-75px] max-w-[290px] h-60 bg-[#002E18] text-white pr-8 pl-9 py-10 pb-10 pt-8 rounded-[28px] shadow-sh">
        <div className="text-2xl font-[Switzer-Medium] my-5">
          <span className="text-[64px] leading-10">$0.5</span>
          <span className="text-[#A6A3A0] ml-2">MILLION</span>
        </div>
        <div className="text-[#A6A3A0] font-medium text-[18px] leading-6">
          Reduced client expenses by saving on hiring and employee costs.
        </div>
      </div>
    </section>
  );
};
