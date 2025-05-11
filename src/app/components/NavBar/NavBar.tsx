import { DEVELOPER_NAME } from "@/app/constants";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="navbar">
        <div>
            <h1 className="text-4xl font-bold">{DEVELOPER_NAME}</h1>
        </div>
        <ul className="flex space-x-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/about">About</Link></li>
        </ul>

    </nav>
  );
}
export default NavBar;
