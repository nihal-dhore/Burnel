import Que from "../assets/question.svg";
import { Question } from "./question";
export const AskQuestions = () => {
  return (
    <section className="bg-[#E8EEE7] flex justify-between items-center gap-x-[221px] rounded-[40px] mt-[94px]">
      <header className="mx-24 mt-20">
        <div className="text-[#9E9D9D] text-[32px] leading-9" id="grace">
          What's on your mind
        </div>
        <div className="text-6xl font-semibold">Ask Questions</div>
        <img
          src={Que}
          width={491}
          height={515}
          alt="sym"
          className="mt-20 -ml-24"
        />
      </header>

      <div className="max-w-[581px]">
        <Question que="Do you offer freelancers?" ans="no" />
        <Question
          que="What’s the guarantee that I will be satisfied
with the hired talent?"
          ans="no"
        />
        <Question
          que="Can I hire multiple talents at once?"
          ans="If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution."
        />
        <Question que="Why should I not go to an agency directly?" ans="no" />
        <Question
          que="Who can help me pick a right skillset
and duration for me?"
          ans="no"
        />
      </div>
    </section>
  );
};
