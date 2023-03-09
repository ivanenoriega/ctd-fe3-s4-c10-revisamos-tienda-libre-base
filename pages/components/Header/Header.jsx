import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Header.module.css";
import { TEXTS_BY_LANGUAGE } from "../../../locale/constants";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter()

  const { TYCS, PRODUCTS } = TEXTS_BY_LANGUAGE[router.locale].HEADER;

  return (
  <header className={styles.header}>
    <div>
      <figure>
        <Image src="/logo.png" alt="logo" width={50} height={50} />
      </figure>
      <div className={styles.appName}>
        <p>tienda</p>
        <p>libre</p>
      </div>
    </div>
    <div>
            <Link href="/" locale="en-US">
                English
            </Link>
            <Link href="/" locale="es-ES">
                Español
            </Link>
            <Link href="/" locale="pt-BR">
                Português
            </Link>

    </div>
    <div className={styles.navbar}>
      <Link href="./">{PRODUCTS}</Link>
      <Link href="./tycs">{TYCS}</Link>
    </div>
  </header>
)};

export default Header;
