import { AchievementSection } from "../components/landing-page-body/achievement-section";
import { Navbar } from "../components/navbar";

export const LandingPage = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col mt-36">
        <AchievementSection />
      </main>
    </>
  );
};
