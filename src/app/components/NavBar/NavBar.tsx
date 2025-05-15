import { DEVELOPER_NAME } from "@/app/constants/data";
import { 
  DEVELOPER_NAME_STYLE,
  NAV_CONTAINER, 
  NAV_LIST_CONTAINER, 
  NAV_LIST_ITEM
} from "@/app/constants/styles/navBarStyles";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className={NAV_CONTAINER}>
      <h6 className={DEVELOPER_NAME_STYLE}>{DEVELOPER_NAME}</h6>
      <ul className={NAV_LIST_CONTAINER}>
        <li><Link href="#aboutMe" className={NAV_LIST_ITEM}>Info</Link></li>
        <li><Link href="#projects" className={NAV_LIST_ITEM}>Projects</Link></li>
        <li><Link href="#contactMe" className={NAV_LIST_ITEM}>Contact</Link></li>
        <li><Link href="#blog" className={NAV_LIST_ITEM}>Blog</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
