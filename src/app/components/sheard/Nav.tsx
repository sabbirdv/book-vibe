'use client'
import Link from "next/link";
import Image from "next/image";
import logo from "../../../assets/book.ico";
import { usePathname } from "next/navigation";


const Nav = () => {

    const pathname = usePathname();

    return (
        <div className=" bg-base-100 shadow-sm w-full">
            <div className=" navbar container mx-auto px-17">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><Link href="/" className={pathname === "/" ? "text-blue-500 font-bold" : ""}> Home </Link></li>
                        <li><Link href="/books" className={pathname === "/books" ? "text-blue-500 font-bold" : ""}> Books </Link></li>
                        <li><Link href="/whitelist" className={pathname === "/whitelist" ? "text-blue-500 font-bold" : ""}> Whitelist </Link></li>
                        <li><Link href="/lisetdbooks" className={pathname === "/lisetdbooks" ? "text-blue-500 font-bold" : ""}> Lisetdbooks </Link></li>
                    </ul>
                    </div>
                    <Link href='#' className="btn btn-ghost text-xl flex gap-2 items-center">
                        <Image src={logo} alt="logo" width={40} height={40} />
                        Book Vibe
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href="/" className={pathname === "/" ? "text-blue-500 font-bold" : ""}> Home </Link></li>
                        <li><Link href="/books" className={pathname === "/books" ? "text-blue-500 font-bold" : ""}> Books </Link></li>
                        <li><Link href="/whitelist" className={pathname === "/whitelist" ? "text-blue-500 font-bold" : ""}> Whitelist </Link></li>
                        <li><Link href="/lisetdbooks" className={pathname === "/lisetdbooks" ? "text-blue-500 font-bold" : ""}> Lisetdbooks </Link></li>
                    </ul>
                </div>
                <div className="navbar-end flex gap-2 items-center">
                    <a className="btn btn-success">Sign up</a>
                    <a className="btn btn-primary">Sign in</a>
                </div>
            </div>
        </div>   
    );
};

export default Nav;