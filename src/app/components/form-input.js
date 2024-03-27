export function FormInput({params}) {
    return (
        <input 
        id={params.id}
        name={params.id}
        placeholder={params.placeholder || ''}
        type={params.type}
        className="block w-full px-3 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-1 focus:ring-gray-300 sm:text-sm sm:leading-6" />
    )
}