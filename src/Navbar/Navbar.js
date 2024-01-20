import React, { useEffect, useState } from "react";
import "./Navbar.css";
function Navbar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);
  return (
    <div className="navbar">
      <div className="top-menu">
        <img
          className="navbar-logo"
          alt="Papara Logo"
          loading="lazy"
          width="146"
          height="35"
          decoding="async"
          data-nimg="1"
          src="https://upload.wikimedia.org/wikipedia/commons/c/c0/PAPARA.png"></img>

        <div className="navbar-left">
          <a href="/">Bireysel</a>
          <a href="/">Ticari</a>
        </div>

        <div className="navbar-right">
          <a href="/">Ücretler&Limitler</a>
          <a href="/">Güvenlik</a>
          <a href="/">Yardım</a>
          <span id="lng">
            <img
              alt="icon"
              aria-hidden="true"
              loading="lazy"
              width="24"
              height="24"
              decoding="async"
              data-nimg="1"
              class="eng-lng"
              align="center"
              src="https://dkto9gpxgolik.cloudfront.net/icons/lang/en.svg"></img>
            <a className="language" href="/">
              English
            </a>
          </span>
          {!show && (
            <span className="span-login-btn">
              <button className="btn-login">Giriş Yap</button>
              <img
                id="login"
                alt="logo"
                loading="lazy"
                width="18"
                height="19"
                decoding="async"
                data-nimg="1"
                src="https://cdn.papara.com/web/icon/go.svg"></img>
            </span>
          )}
          {show && (
            <span className="span-sign-btn">
              <button className="btn-sign">Papara Hesabı Aç</button>
            </span>
          )}
        </div>
      </div>
      <div className="list-menu">
        <ul>
          <li>
            <a href="/">Para Transferi</a>
          </li>
          <li>
            <a href="/">Ödemeler</a>
          </li>
          <li>
            <a href="/">Papara Card</a>
          </li>
          <li>
            <a href="/">Kıymetli Maden</a>
          </li>
          <li>
            <a href="/">Birikim</a>
          </li>
          <li>
            <a href="/">Sigorta</a>
          </li>
          <li>
            <a href="/">Papara Edu</a>
          </li>
          <li>
            <a href="/">Ödeme Al</a>
          </li>
          <li>
            <a href="/">Sohbet</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
