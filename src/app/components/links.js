'use client'

import { usePathname } from "next/navigation"
import Link from "next/link"

export function Links() {
    const pathname = usePathname()

    return (
        <nav>
            <ul>
                <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
                    Home
                </Link>
            </ul>
            <ul>
                <Link className={`link ${pathname === '/dashboard' ? 'active' : ''}`} href="/dashboard">
                    Dashboard
                </Link>
            </ul>
        </nav>
    )
}