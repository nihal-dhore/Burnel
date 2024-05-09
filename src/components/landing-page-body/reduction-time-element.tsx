import Spark from "../../assets/spark.svg";
export const ReductionTime = () => {
  return (
    <div className="min-w-[267px] min-h-[239px] absolute top-[114px] -left-32 px-[30px] py-[35px] shadow-sh bg-white w-60 rounded-[27px] hover:bg-secondaryButtonLight hover:transition transition">
      <div className="flex -ml-3 gap-y-3">
        <img src={Spark} alt="spark" className="z-20 -ml-9 -mt-20" />
        <div
          className="text-6xl font-[Switzer-Medium] -ml-14 mt-2 my-4"
          id="availability"
        >
          40%
        </div>
      </div>
      <p className="shrink font-medium text-[#828282] leading-6">
        Achieved reduction in project execution time by optimising team
        availability
      </p>
    </div>
  );
};
