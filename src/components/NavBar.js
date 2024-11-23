import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import userIcon from "../style/img/userLogo.png";
import Image from "next/image";
import NavBarMobile from "./NavBarMobile";

export const NavBar = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const router = useRouter();
  const { pathname } = router;

  const [emailAdd, setEmailAdd] = useState("");

  return (
    <nav className="navbar">
      <header className="navbar__top">
        <div className="navbar__logo">Adinspiration.com</div>

        <div className="navbar__items">
          <div className="navbar__links">
            <Link
              className={`navbar__link ${
                pathname === "/" ? "navbar__link--active" : "hover"
              }`}
              href="/"
            >
              Inspiration
            </Link>

            <Link
              className={`navbar__link ${
                pathname === "/templates" ? "navbar__link--active" : "hover"
              }`}
              href="/templates"
            >
              Templates
            </Link>

            <Link
              className={`navbar__link ${
                pathname === "/tools" ? "navbar__link--active" : "hover"
              }`}
              href="/tools"
            >
              Tools
            </Link>
          </div>

          <div className="navbar__cta">
            <div className="navbar__cta--img">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.834 13.6668H5.16732C3.16732 13.6668 1.83398 12.6668 1.83398 10.3335V5.66683C1.83398 3.3335 3.16732 2.3335 5.16732 2.3335H11.834C13.834 2.3335 15.1673 3.3335 15.1673 5.66683V10.3335C15.1673 12.6668 13.834 13.6668 11.834 13.6668Z"
                  stroke="#A0ABBB"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.8327 6L9.74601 7.66667C9.05935 8.21333 7.93268 8.21333 7.24601 7.66667L5.16602 6"
                  stroke="#A0ABBB"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <input
                className="navbar__cta-input"
                type="email"
                value={emailAdd}
                onChange={(e) => setEmailAdd(e.target.value)}
                placeholder="Get more Ad inspiration in your inbox every week"
              />
            </div>

            <button className="navbar__cta-btn">Yes please :D</button>
          </div>

          <div className="navbar__profile">
            <p className="navbar__profile-name">First name</p>

            <Image
              src={userIcon}
              alt="user icon"
              width={31}
              height={31}
              style={{
                borderRadius: "50px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        <button className="navbar__btn" onClick={() => setIsMenuOpen(true)}>
          <div className="navbar__btn--line"></div>
          <div className="navbar__btn--line"></div>
          <div className="navbar__btn--line"></div>
        </button>

        <NavBarMobile
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          emailAdd={emailAdd}
          setEmailAdd={setEmailAdd}
        />
      </header>

      <div className="navbar__side">
        <div className="navbar__side-left">
          <div className="navbar__side-left--group">
            <span className="navbar__side-left--title">Objective</span>

            <button className="navbar__side-left--btn">Prospecting</button>

            <button className="navbar__side-left--btn">Retargeting</button>
          </div>

          <div className="navbar__side-left--group">
            <span className="navbar__side-left--title">Type</span>

            <button className="navbar__side-left--btn">Lifestyle</button>

            <button className="navbar__side-left--btn">Social Proof</button>

            <button className="navbar__side-left--btn">Discount</button>

            <button className="navbar__side-left--btn">Humor</button>

            <button className="navbar__side-left--btn">How-to/Features</button>

            <button className="navbar__side-left--btn">Pain Points</button>

            <button className="navbar__side-left--btn">Split Screen</button>

            <button className="navbar__side-left--btn">Before vs After</button>

            <button className="navbar__side-left--btn">Grid</button>

            <button className="navbar__side-left--btn">Pricing</button>

            <button className="navbar__side-left--btn">News</button>

            <button className="navbar__side-left--btn">Benefits</button>
          </div>

          <div className="navbar__side-left--group">
            <span className="navbar__side-left--title">Industry</span>

            <button className="navbar__side-left--btn">Clothing</button>

            <button className="navbar__side-left--btn">Beauty</button>

            <button className="navbar__side-left--btn">Food/Drinks</button>

            <button className="navbar__side-left--btn">Supplements</button>

            <button className="navbar__side-left--btn">Home</button>
          </div>

          <div className="navbar__side-left--group">
            <span className="navbar__side-left--title">Psychology</span>

            <button className="navbar__side-left--btn">Influence</button>

            <button className="navbar__side-left--btn">Urgency</button>

            <button className="navbar__side-left--btn">Authority</button>

            <button className="navbar__side-left--btn">Curiosity</button>

            <button className="navbar__side-left--btn">Loss Aversion</button>

            <button className="navbar__side-left--btn">Scarcity</button>

            <button className="navbar__side-left--btn">Emotional</button>
          </div>
        </div>

        <div className="navbar__side-right">{children}</div>
      </div>
    </nav>
  );
}
