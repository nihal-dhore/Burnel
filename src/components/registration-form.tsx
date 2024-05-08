import { RegistrationSchema } from "../schema/registration-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Warning from "../assets/warning.svg";
import { InputField } from "./input-field";

export const Form = ({
  setComplete,
}: {
  setComplete: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm<RegistrationSchema>({
    mode: "onTouched",
    resolver: zodResolver(RegistrationSchema),
  });
  // console.log(isSubmitting);
  const username = watch("username");
  const email = watch("email");
  const isDisabled = username && email;
  const onSubmit = async () => {
    try {
      setComplete(true);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-y-6 max-w-[417px]"
    >
      <InputField register={register("username")} placeholder="Enter your name" />
      <InputField register={register("email")} placeholder="Enter your email" />
      {isSubmitted && errors.email && (
        <div className="text-destructive text-start text-sm flex items-center gap-x-1 -m-3 w-full font-medium">
          <img src={Warning} alt={"warning"} />
          {errors.email?.message}
        </div>
      )}

      <button
        disabled={!isDisabled || isSubmitting}
        className={`${
          !isDisabled && "bg-disabled hover:bg-disabled"
        } text-white bg-button py-6 px-9 rounded-full w-[322.5px] sm:w-[417px] mt-6 hover:bg-secondaryButtonDark`}
        type="submit"
      >
        {isSubmitting ? "submitting..." : "Submit"}
      </button>
    </form>
  );
};
