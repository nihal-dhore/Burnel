import Rocket from "../assets/rocket.svg";
export const Staff = () => {
  return (
    <div className="absolute top-[412px] -left-[58px] bg-white py-4 pr-8 pl-4 rounded-full shadow-sh flex items-center gap-x-4 hover:bg-secondaryButtonLight hover:transition transition">
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
  );
};
