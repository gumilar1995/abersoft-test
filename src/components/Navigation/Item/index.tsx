import Link from "next/link";
import { ReactNode } from "react";
import style from "../style.module.css";

export default function NavigationItem({
  children,
  isActive,
  ...props
}: {
  children: ReactNode;
  isActive?: boolean;
  href: string;
  onClick?: VoidFunction;
}) {
  return (
    <Link className={style.navItem} data-active={isActive} {...props}>
      {children}
    </Link>
  );
}
