import Image from "next/image";
import Link from "next/link"
import { useRouter } from "next/router"
import userIcon from "../style/img/userLogo.png";

export default function NavBarMobile({ setIsMenuOpen, isMenuOpen, emailAdd, setEmailAdd }) {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div
      className="menu"
      style={{
        transform: isMenuOpen ? "translateX(0)" : "translateX(100%)",
      }}
    >
      <div className="menu__card">
        <div className="menu__card-top">
          <div
            style={{
              fontSize: "18px",
              textTransform: "uppercase",
            }}
          >
            Adinspiration.com
          </div>

          <button className="menu__close" onClick={() => setIsMenuOpen(false)}>
            <div className="menu__close--line cross"></div>
            <div className="menu__close--line cross"></div>
          </button>
        </div>

        <Link
          className={`menu__link ${pathname === "/" && "menu__link--active"}`}
          href="/"
        >
          Inspiration
        </Link>

        <Link
          className={`menu__link ${
            pathname === "/templates" && "menu__link--active"
          }`}
          href="/templates"
        >
          Templates
        </Link>

        <Link
          className={`menu__link ${
            pathname === "/tools" && "menu__link--active"
          }`}
          href="/tools"
        >
          Tools
        </Link>

        <div className="menu__cta">
          <div className="menu__cta--img">
            <svg
              width="14"
              height="14"
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
              className="menu__cta-input"
              type="email"
              value={emailAdd}
              onChange={(e) => setEmailAdd(e.target.value)}
              placeholder="Get more Ad inspiration in your inbox every week"
            />
          </div>
        </div>

        <button className="menu__cta-btn">Yes please :D</button>

        <div className="menu__profile">
          <p className="menu__profile-name">First name</p>

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
    </div>
  );
}
