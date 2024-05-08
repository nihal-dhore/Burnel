import Logo from "../assets/logo.svg";
import Close from "../assets/close.svg";
import { Form } from "../components/registration-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Completion } from "../components/completion";
export const RegistrationForm = () => {
  const navigate = useNavigate();
  const [complete, setComplete] = useState(false);
  return (
    <>
      <nav className="flex justify-between items-center fixed top-8 left-[52px] right-[52px]">
        <img src={Logo} alt="Brunel" width={127.94} height={47.39} />
        {!complete && (
          <img
            onClick={() => {
              navigate("/home");
            }}
            src={Close}
            alt="close"
            className="p-4 border rounded-full text-2xl cursor-pointer"
          />
        )}
      </nav>
      {!complete && (
        <section className="flex justify-center items-center flex-col h-screen">
          <header className="flex flex-col items-center justify-center max-w-[588px] mb-16">
            <div className="stroke-1 text-4xl text-[#2DA950]" id="grace">
              Registration Form
            </div>
            <div className="text-[56px] font-semibold w-full text-center">
              Start your success Journey here!
            </div>
          </header>
          <Form setComplete={setComplete} />
        </section>
      )}
      {complete && <Completion />}
    </>
  );
};
