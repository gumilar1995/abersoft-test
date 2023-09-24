import Image from "next/image";
import style from "./style.module.css";
import { ReactNode } from "react";

export default function Card({
  children,
  imgSrc,
}: {
  children: ReactNode;
  imgSrc?: string;
}) {
  return (
    <div className={style.container}>
      {imgSrc && (
        <div className={style.image}>
          <Image src={imgSrc} alt="card-image" priority fill sizes="100%" />
        </div>
      )}
      {children}
    </div>
  );
}
