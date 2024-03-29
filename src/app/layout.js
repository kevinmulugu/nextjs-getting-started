import { Varela_Round,  } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const varela = Varela_Round({  weight: '400', subsets: ["latin"] });

export const metadata = {
  title: "Create Next Application",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${varela.className} dark:bg-gray-300 bg-gray-100`}>
        <div className="container mx-auto">
          <nav className="flex items-center justify-between text-sm font-light px-8">
            <span className="">
              <Link href="/" >App name</Link>
            </span>
            <div className="flex flex-col items-center md:flex-row">
              <div className="hidden md:flex space-x-6">
                <a href={'/login'} className="p-2 inline-block">Login</a>
                <a  href={'/signup'} className="p-2 inline-block">Register</a>
                <a className="p-2 inline-block">Contact</a>
              </div>
              <a className="hidden md:block mt-2 py-2 px-6 text-white bg-orange-500 rounded-full hover:bg-orange-300">Get started</a>
            </div>
          </nav>
        </div>
        <div className="container mx-auto">
          <main className="mx-12">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
