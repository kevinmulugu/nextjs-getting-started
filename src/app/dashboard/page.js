import Link from "next/link"
import SortProducts from "@/app/components/sort-products"
import { LocaleSwitcher } from "@/app/components/change-locale"
import { Suspense } from "react"
import MagicButton from "@/app/components/magic-button"

export default function Page() {
    return (
        <main>
            <Link className="text-sm font-semibold text-red-800" href="/">Take me home</Link>
            <h1>Hello, Dashboard Page! Teacher</h1>

            <Suspense fallback={<p>Loadding products</p>}>
                <SortProducts/>
            </Suspense>
            <Suspense fallback={<p>Loading locale switcher</p>}>
                <LocaleSwitcher/>
            </Suspense>
            <MagicButton/>
        </main>
    )
}