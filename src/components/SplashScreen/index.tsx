"use client";

import Image from "next/image";
import style from "./style.module.css";
import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHide(true);
    }, 1000);
  }, []);

  if (hide) return <></>;

  return (
    <div className={style.container}>
      <div className={style.logo}>
        <Image src="/images/logo.png" alt="logo" priority fill sizes="100%" />
      </div>
    </div>
  );
}
