'use client'

import { useFormStatus } from "react-dom";

export function SubmitButton({params}) {

    const { pending } = useFormStatus()
    return (
        <button 
        className="block w-full py-3 px-2 bg-gray-800 text-white text-sm sm:leading-6 rounded-md hover:bg-gray-600"
        aria-disabled={pending}>{params.text}</button>
    )
}