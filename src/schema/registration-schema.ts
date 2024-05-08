import zod from "zod";
export const RegistrationSchema = zod.object({
  username: zod.string({ message: "username is required" }),
  email: zod.string({ message: "email is required" }).email("Enter valid email address"),
})

export type RegistrationSchema = zod.infer<typeof RegistrationSchema>