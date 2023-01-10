import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerWrap}>
        <div className={classes.footerGrid}>
          <div className={classes.footerCol}>
            <p className={classes.colHead}>information</p>
            <ul className={classes.footerList}>
              <li>
                <a href="/" className={classes.listLink}>
                  about us
                </a>
              </li>
              <li>
                <a href="/" className={classes.listLink}>
                  help
                </a>
              </li>
              <li>
                <a href="/" className={classes.listLink}>
                  terms of use
                </a>
              </li>
              <li>
                <a href="/" className={classes.listLink}>
                  privacy policy
                </a>
              </li>
            </ul>
          </div>
          <div className={classes.footerCol}>
            <p className={classes.colHead}>socials</p>
            <div className={classes.socialContainer}>
              <ion-icon name="logo-instagram"></ion-icon>
              <ion-icon name="logo-facebook"></ion-icon>
              <ion-icon name="logo-twitter"></ion-icon>
              <ion-icon name="logo-reddit"></ion-icon>
            </div>
          </div>
          <div className={classes.footerCol}>
            <p>Mode</p>
          </div>
        </div>
        <p className={classes.copyRight}>© developed by jaewon hong</p>
      </div>
    </footer>
  );
};

export default Footer;
