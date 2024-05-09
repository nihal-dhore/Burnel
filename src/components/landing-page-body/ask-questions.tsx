import Que from "../../assets/question.svg";
import { Question } from "./question";
export const AskQuestions = () => {
  return (
    <section className="relative bg-[#E8EEE7] flex justify-between gap-x-[221px] rounded-[40px] mt-[94px] max-w-[1376px] min-w-[500px] pr-[74px]">
      <header className="mx-24 mt-20">
        <div className="text-[#9E9D9D] text-[32px] leading-9" id="grace">
          What's on your mind
        </div>
        <div className="text-6xl font-semibold">Ask Questions</div>
      </header>
      <img src={Que} alt="sym" className="absolute top-[274px]" />
      <div className="max-w-[581px] mt-32 mb-[52px]">
        <Question
          que="Do you offer freelancers?"
          ans="If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution."
        />
        <Question
          que="What’s the guarantee that I will be satisfied
with the hired talent?"
          ans="If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution."
        />
        <Question
          que="Can I hire multiple talents at once?"
          ans="If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution."
        />
        <Question
          que="Why should I not go to an agency directly?"
          ans="If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution."
        />
        <Question
          que="Who can help me pick a right skillset
and duration for me?"
          ans="If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution."
        />
      </div>
    </section>
  );
};
