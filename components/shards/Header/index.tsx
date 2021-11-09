import React from "react";
import Link from "next/link";
import styles from "./header.module.css";
import { useDispatch } from "react-redux";
import { setIsSignup } from "../../../redux/signupState/action";
import { useRouter } from "next/router";
// import logo from "../../../public/logo.png"

export default function Header() {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSignupClick = () => {
    dispatch(setIsSignup(true));
    router.replace("/login", "/signup");
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <img
          className={styles.headerLogo}
          src="/logo.png"
          alt="StikiNote logo"
        />
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
          <Link href="/#about">
            <a>About us</a>
          </Link>
        </div>
        <div className={styles.navItem}>
          <Link href="/login">
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
