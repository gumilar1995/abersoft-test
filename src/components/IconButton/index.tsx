import Link from "next/link";
import style from "./style.module.css";
import Image from "next/image";

export default function IconButton({
  imgSrc,
  href,
  size = "medium",
}: {
  imgSrc: string;
  href: string;
  size?: "small" | "medium" | "large";
}) {
  return (
    <Link href={href} target="_blank">
      <div className={style.container} data-size={size}>
        <Image src={imgSrc} alt="icon-button" priority fill sizes="100%" />
      </div>
    </Link>
  );
}
