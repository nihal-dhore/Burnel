import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckSign from "../assets/check-sign.svg";

export const Completion = () => {
  const [timer, setTimer] = useState(5);
  const navigate = useNavigate();
  useEffect(() => {
    const timeout = setInterval(() => {
      setTimer((currTimer) => currTimer - 1);
    }, 1000);

    timer === 0 && navigate("/home");
    return () => clearInterval(timeout);
  }, [timer, navigate]);
  return (
    <section className=" flex w-screen justify-center items-center h-screen flex-col">
      <div className="flex flex-col justify-center items-center max-w-[718px] gap-y-5">
        <img src={CheckSign} alt="Completed" />
        <div className="stroke-1 text-4xl mt-[27px] text-[#2DA950]" id="grace">
          Success submitted
        </div>
        <div className="text-[56px] leading-[67px] font-semibold text-center w-full">
          Congratulations
        </div>
        <div className="text-center text-[27px] leading-[35px] font-medium text-secondary">
          Your request has been successfully submitted to us. We will validate
          your information and reach out to your shortly with updates
        </div>
      </div>

      <footer className="absolute bottom-10 text-xl text-secondary">
        Redirecting you to Homepage in &nbsp;
        <strong className="text-button">
          {timer}
          {timer <= 1 ? " second" : " seconds"}
        </strong>
      </footer>
    </section>
  );
};
