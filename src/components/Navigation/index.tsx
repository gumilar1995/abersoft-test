"use client";
import { NavigationItems } from "@/interfaces/Navigation";
import NavigationItem from "./Item";
import style from "./style.module.css";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navigation({ items }: { items: NavigationItems }) {
  const [showNav, setShowNav] = useState(false);
  const [isMobile, setMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onResize = () => {
      const width = window.innerWidth;
      setShowNav(width >= 768);
      setMobile(width < 768);
    };

    onResize();

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header className={`${style.header} container`}>
      <div onClick={() => setShowNav(true)} className={style.burgerMenu}>
        <Image
          src="/images/menu.png"
          alt="burger-menu"
          priority
          fill
          sizes="100%"
        />
      </div>
      {showNav && (
        <nav className={style.navigation}>
          {items.map((item, i) => (
            <NavigationItem
              key={i}
              isActive={pathname === item.href}
              href={item.href}
              onClick={() => setShowNav(!isMobile)}
            >
              {item.label}
            </NavigationItem>
          ))}
          {showNav && <div onClick={() => setShowNav(false)}>Close</div>}
        </nav>
      )}
    </header>
  );
}
