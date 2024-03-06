export function FormLabel({params}) {
    return (
        <label htmlFor={params.id} className="block text-sm font-medium leading-6">
            {params.text}
        </label>
    )
}