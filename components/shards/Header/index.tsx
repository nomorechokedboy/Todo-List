import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import { setIsSignup } from "../../../redux/isSignup/action";
import styles from "./header.module.scss";

export default function Header() {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSignupClick = React.useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      dispatch(setIsSignup(true));
      router.push("/login", "/signup");
    },
    [dispatch, router]
  );

  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <Link href="/">
          <a className={styles.headerLogo}>
            <Image
              src="/logo.png"
              alt="StikiNote logo"
              width={56}
              height={56}
              placeholder="blur"
              blurDataURL="https://theme.hstatic.net/200000093231/1000565457/14/lazyload.jpg?v=963"
            />
          </a>
        </Link>
        <span className={styles.headerPageName}>StikiNote</span>
        <i className="fas fa-bars fa-2x"></i>
      </div>
      <nav className={styles.headerRight}>
        <div className={styles.navItem}>
          <span>
            <Link href="#features">
              <a>Features</a>
            </Link>
          </span>
          <i className="fas fa-chevron-down"></i>
        </div>
        <div className={styles.navItem}>
          <Link href="#about">
            <a>About us</a>
          </Link>
        </div>
        <div className={styles.navItem}>
          <Link href="/login" replace>
            <a>Sign In</a>
          </Link>
        </div>
        <div className={styles.navItem}>
          <a onClick={handleSignupClick}>Sign Up</a>
        </div>
      </nav>
    </header>
  );
}
