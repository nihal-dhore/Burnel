export const Footer = () => {
  return (
    <footer className="h-36 flex justify-between items-center max-w-[1376px] mb-7 gap-x-[668px] text-nowrap bg-[#F5F5F5] px-20 rounded-[40px] text-lg">
      <div className="">&#169; Talup 2023. All rights reserved</div>
      <div className="flex gap-x-[52px]">
        <span className="underline cursor-pointer">Terms & Conditions</span>
        <span className="underline cursor-pointer">Privacy Policy</span>
      </div>
    </footer>
  );
};
