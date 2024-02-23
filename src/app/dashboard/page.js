import Link from "next/link"
import SortProducts from "../components/sort-products"
import { LocaleSwitcher } from "../components/change-locale"

export default function Page() {
    return (
        <main>
            <Link className="text-sm font-semibold" href="/">Take me home</Link>
            <h1>Hello, Dashboard Page!</h1>

            <SortProducts/>
            <LocaleSwitcher/>
        </main>
    )
}