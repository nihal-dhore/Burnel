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
          ? "flex flex-col mr-[74px] pb-6 mt-9 border-b-1 border-[#D7D7D7] last:border-none"
          : "mr-[74px] pb-6 mt-9 border-b-1 border-[#D7D7D7] last:border-none"
      }
    >
      <div className="flex justify-between gap-x-8">
        <div className="max-w-[411px] font-semibold text-xl">{que}</div>
        <div
          className="cursor-pointer text-2xl font-semibold text-black -mt-1"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? "+" : "-"}
        </div>
      </div>
      {!collapsed && (
        <div className="text-[15px] mt-6 leading-6 text-[#617275]">{ans}</div>
      )}
    </div>
  );
};
