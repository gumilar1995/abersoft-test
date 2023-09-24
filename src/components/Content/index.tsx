import { ReactNode } from "react";
import style from "./style.module.css";
import Image from "next/image";

export default function Content({
  children,
  sideImageSrc,
  reverse,
  center,
}: {
  children: ReactNode;
  sideImageSrc: string;
  reverse?: boolean;
  center?: boolean;
}) {
  return (
    <article className={style.container} data-reverse={reverse}>
      <div className={style.content} data-center={center}>
        {children}
      </div>
      <div className={style.image}>
        <Image
          src={sideImageSrc}
          alt="content-image"
          priority
          fill
          sizes="100%"
        />
      </div>
    </article>
  );
}
