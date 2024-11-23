import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <span className="footer__top-logo">Adinspiration.com</span>

        <ul className="footer__top-items">
          <li className="footer__top-links">
            <Link href="/" className="footer__top-link">
              Blog
            </Link>
          </li>
          <li className="footer__top-links">
            <Link href="/" className="footer__top-link">
              ROI Calculator
            </Link>
          </li>
          <li className="footer__top-links">
            <Link href="/" className="footer__top-link">
              Support
            </Link>
          </li>
        </ul>
      </div>

      <div className="footer__bottom">
        <span className="footer__bottom-rights">
          © 2024 Adinspiration. All Rights Reserved.- hello@adinspiration.com
        </span>

        <ul className="footer__bottom-items">
          <li className="footer__bottom-links">
            <Link href="/" className="footer__bottom-link">
              Privacy Policy
            </Link>
          </li>
          <li className="footer__bottom-links">
            <Link href="/" className="footer__top-link">
              Terms & Conditions
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
