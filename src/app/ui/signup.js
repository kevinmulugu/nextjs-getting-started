'use client'

import { FormInput } from "@/app/components/form-input";
import { FormLabel } from "@/app/components/form-label";
import { SubmitButton } from "../components/submit-button";

export function Signup() {
    return (
        <section className="flex flex-col md:flex-row">
            <div className="border border-gray-300 rounded-md bg-gray-200 shadow-xl p-3 mt-3 md:w-2/5 md:mx-auto">
                <form  className="space-y-2">
                    <div className="space-y-2">
                        <FormLabel params={{id: "name", text: "Name"}} />
                        <FormInput params={{id: "name", type: "text", placeholder: "Enter your name"}} />
                    </div>
                    <div className="space-y-2">
                        <FormLabel params={{id: "email", text: "Email"}} />
                        <FormInput params={{id: "email", type: "text", placeholder: "Email"}} />
                    </div>
                    <div className="space-y-2">
                        <FormLabel params={{id: "pwd", text: "Password"}} />
                        <FormInput params={{id: "pwd", type: "password", placeholder: "Password"}} />
                    </div>
                    <div className="space-y-2">
                        <FormLabel params={{id: "pwdConfirmation", text: "Confirm password"}} />
                        <FormInput params={{id: "pwdConfirmation", type: "password", placeholder: "Password Confirmation"}} />
                    </div>
                    <div className="space-y-2">
                        <SubmitButton params={{text: "Create Account"}} />
                    </div>
                </form>
            </div>
            
        </section>
    )
}