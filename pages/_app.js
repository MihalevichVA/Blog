import Link from "next/link";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="mx-auto my-8 w-9/12">
      <header>
        <h1 className="text-6xl font-bold text-center ">My Blog</h1>
        <nav className="my-4">
          <ul className="flex flex-row justify-center space-x-4">
            <li>
              <Link className="text-blue-600 hover:text-blue-500" href="/">
                Home
              </Link>
            </li>
            <div>
              <Link className="text-blue-600 hover:text-blue-500" href="/about">
                About
              </Link>
            </div>
          </ul>
        </nav>
      </header>

      <Component {...pageProps} />
    </div>
  );
}
