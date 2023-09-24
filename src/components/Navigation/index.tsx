"use client";
import { NavigationItems } from "@/interfaces/Navigation";
import NavigationItem from "./Item";
import style from "./style.module.css";
import { usePathname } from "next/navigation";

export default function Navigation({ items }: { items: NavigationItems }) {
  const pathname = usePathname();
  return (
    <header className={`${style.header} container`}>
      <nav className={style.navigation}>
        {items.map((item, i) => (
          <NavigationItem
            key={i}
            isActive={pathname === item.href}
            href={item.href}
          >
            {item.label}
          </NavigationItem>
        ))}
      </nav>
    </header>
  );
}
