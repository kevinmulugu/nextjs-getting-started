"use client";

import { FormLabel } from "@/app/components/form-label";
import { FormInput } from "@/app/components/form-input";
import { SubmitButton } from "@/app/components/submit-button";
import { loginUser } from "@/app/actions/login";
import { useFormState } from "react-dom";

const initialState = {
  message: "",
};

export function Login() {
  const [state, formAction] = useFormState(loginUser, initialState);

  return (
    <section className="flex flex-col md:flex-row">
      <div className="p-3 mt-3 border-1 border-gray-200 rounded-lg shadow-lg md:mt-12 md:mx-auto md:w-2/5">
        <form className="space-y-3" action={formAction}>
          <div className="space-y-2">
            <FormLabel params={{ id: "email", text: "Email" }} />
            <FormInput
              params={{ placeholder: "Email", id: "email", type: "text" }}
            />
          </div>
          {state?.errors?.email?.[0] ? <p className="text-red-500 font-light text-sm">{state.errors.email[0]}</p> : ''}
          <div className="space-y-2">
            <FormLabel params={{ id: "pwd", text: "Password" }} />
            <FormInput
              params={{
                placeholder: "Password",
                id: "password",
                type: "password",
              }}
            />
          </div>
          <div>
            <SubmitButton params={{ text: "Login" }} />
          </div>
        </form>
      </div>
    </section>
  );
}
