"use client";

import { CONTACT_SECTION, PROJECTS } from "@/app/constants/data/data";
import { 
  NAV_CONTAINER, 
  NAV_LIST_CONTAINER, 
  NAV_LIST_ITEM
} from "@/app/constants/styles/navBarStyles";
import usePreferencesContext from "@/app/hooks/usePreferencesContext";
import Link from "next/link";

const NavBar = () => {
  const { language } = usePreferencesContext();

  return (
    <nav className={NAV_CONTAINER}>
      <ul className={NAV_LIST_CONTAINER}>
        <li><Link href="#aboutMe" className={NAV_LIST_ITEM}>Info</Link></li>
        <li><Link href="#projects" className={NAV_LIST_ITEM}>{PROJECTS[language]}</Link></li>
        <li>
          <Link href="#contactMe" className={NAV_LIST_ITEM}>{CONTACT_SECTION[language]}</Link>
        </li>
        <li><Link href="#blog" className={NAV_LIST_ITEM}>Blog</Link></li>
      </ul>
    </nav>
  );
}
  
export default NavBar;
