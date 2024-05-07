import { Home } from "../components/home";
import { Navbar } from "../components/navbar";

export const LandingPage = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col mt-36">
        <Home />
      </main>
    </>
  );
};
