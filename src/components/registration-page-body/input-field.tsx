import { UseFormRegisterReturn } from "react-hook-form"

export const InputField = ({register, placeholder} : {register: UseFormRegisterReturn; placeholder: string}) => {
  return (
    <input
        className="bg-[#EFEFEF] placeholder:text-[#827A7A] placeholder:text-xl placeholder:font-medium font-medium text-xl py-6 px-9 rounded-full sm:w-[417px] focus:ring-1 focus:bg-inputFocus focus:ring-[#537FF1]"
        placeholder={placeholder}
        type="text"
        {...register}
      />
  )
}