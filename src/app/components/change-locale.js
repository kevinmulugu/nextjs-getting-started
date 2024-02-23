'use client'

import { usePathname } from "next/navigation"

export function LocaleSwitcher() {
    const pathname = usePathname()

    function switchLocale(locale) {
        if (pathname.includes(locale)) return pathname
        const newPath = `/${locale}${pathname}`
        window.history.replaceState(null, '', newPath)
    }

    return (
        <div>
            <button onClick={() => switchLocale('en')}>English</button>
            <button onClick={() => switchLocale('fr')}>French</button>
        </div>
    )
}