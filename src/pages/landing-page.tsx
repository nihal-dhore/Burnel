import { SuccessSection } from "../components/success-section";
import { Navbar } from "../components/navbar";

export const LandingPage = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col mt-36">
        <SuccessSection />
      </main>
    </>
  );
};
