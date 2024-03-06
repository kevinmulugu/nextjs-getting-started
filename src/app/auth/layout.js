import Link from "next/link"

export default function Layout({children, auth }) {
    return (
        <div>
            <nav>
                <Link href="/login">Open modal</Link>
                <Link href="/signup">Open modal</Link>
            </nav>
            <div>{auth}</div>
            <div>{children}</div>
        </div>
    )
}