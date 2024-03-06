"use server";

import { z } from "zod";

const schema = z.object({
  email: z.coerce.string().email({
    invalid_type_error: "Invalid Email",
  }),
});

export async function loginUser(prevState, formData) {
//   const loginData = Object.fromEntries(formData.entries());
    console.log(JSON.stringify(prevState))

  const validatedFields = schema.safeParse({
    email: formData.get("email"),
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  return {
    message: "Login successful",
  };
}
