import style from "./style.module.css";
import { ButtonHTMLAttributes, ReactNode } from "react";

export default function Button({
  children,
  variant = "primary",
  ...props
}: {
  children: ReactNode;
  variant?: "primary" | "secondary";
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props} className={style.button} data-variant={variant}>
      {children}
    </button>
  );
}
