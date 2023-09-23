"use client";
import NavigationItem from "./Item";
import style from "./style.module.css";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  return (
    <header className={style.header}>
      <nav className={style.navigation}>
        <NavigationItem isActive={pathname === "/"} href="/">
          Home
        </NavigationItem>
        <NavigationItem
          isActive={pathname.startsWith("/services")}
          href="/services"
        >
          Services
        </NavigationItem>
        <NavigationItem
          isActive={pathname.startsWith("/about-us")}
          href="/about-us"
        >
          About Us
        </NavigationItem>
      </nav>
    </header>
  );
}
