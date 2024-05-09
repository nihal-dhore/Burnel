import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg";
export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex border fixed z-50 bg-white bg-opacity-80 top-6 left-6 right-6 rounded-full justify-between items-center pr-6 pl-[59px] py-4">
      <div>
        <img
          src={Logo}
          alt="Brunel"
          width={127.94}
          className="cursor-pointer"
          onClick={() => {
            navigate("/home");
          }}
        />
      </div>
      <div className="flex gap-x-4 font-semibold">
        <button
          className="px-12 border rounded-full py-7 font-medium hover:bg-secondaryButtonLight transition hover:transition"
          onClick={() => {
            navigate("/register");
          }}
        >
          Get Projects
        </button>
        <button className="px-12 bg-button text-white font-semibold rounded-full py-7 hover:bg-secondaryButtonDark transition hover:transition">
          Onboard Talent
        </button>
      </div>
    </nav>
  );
};
