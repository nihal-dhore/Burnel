import Logo from "../assets/logo.svg";
export const Navbar = () => {
  return (
    <nav className="flex border fixed z-50 bg-white bg-opacity-80 top-6 left-6 right-6 rounded-full justify-between items-center pr-6 pl-12 py-4">
      <div>
        <img src={Logo} alt="Brunel" width={127.94} height={47.39} />
      </div>
      <div className="flex gap-2 font-semibold">
        <button className="px-12 border rounded-full py-7">Get Projects</button>
        <button className="px-12 bg-black text-white rounded-full py-7">
          Onboard Talent
        </button>
      </div>
    </nav>
  );
};
