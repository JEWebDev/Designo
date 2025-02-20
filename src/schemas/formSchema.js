import { z } from "zod"

export const formSchema = z.object({
  name: z.string().min(1, { message: "Name can't be empty" }),
  email: z.string().email({ message: "Email is required" }),
  phone: z.string().optional(),
  message: z.string().min(1, { message: "Can't be empty" }),
})
