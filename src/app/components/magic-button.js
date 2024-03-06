'use client'

export default function MagicButton() {
    return (
        <button className="p-1 mx-4 dark:bg-gray-300 dark:text-white bg-gray-200 text-gray-600 rounded-lg text-sm font-semibold"
                onClick={
                    () => console.info("Nothing much ...")
                }>
                Click me
                </button>
    )
}