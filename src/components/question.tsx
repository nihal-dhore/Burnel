import { useState } from "react";

interface QuestionProps {
  que: string;
  ans: string;
}

export const Question = ({ que, ans }: QuestionProps) => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <div
      className={
        !collapsed
          ? "flex flex-col pb-6 pt-9 px-4 border-b-1 border-[#D7D7D7] last:border-non"
          : "pb-6 pt-9 px-4 border-b-1 border-[#D7D7D7] last:border-none"
      }
    >
      <div
        className="flex justify-between gap-x-56 cursor-pointer"
        onClick={() => setCollapsed(!collapsed)}
      >
        <div className="max-w-[480px] font-semibold text-xl ">{que}</div>
        <div className=" text-2xl font-semibold text-black -mt-1">
          {collapsed ? "+" : "-"}
        </div>
      </div>
      {!collapsed && (
        <div className="text-[15px] mt-6 leading-6 text-[#617275]">{ans}</div>
      )}
    </div>
  );
};
