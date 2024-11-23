import Link from "next/link";
import { Layout } from "../components/Layout";
import { brandList } from "../static/brandList";
import "../style/App.scss";
import Image from "next/image";
import canvaIcon from "../style/img/canva.png";
import { useRef, useState } from "react";
import { filtersItems } from "../static/filters";

export default function Index() {
  const [favorites, setFavorites] = useState([]);
  const [startButton, setStartButton] = useState(false);
  const [openFilters, setOpenFilters] = useState(false);
  const [openFiltersObj, setOpenFiltersObj] = useState(false);
  const [openFiltersType, setOpenFiltersType] = useState(false);
  const [openFiltersInd, setOpenFiltersInd] = useState(false);
  const [openFiltersPsy, setOpenFiltersPsy] = useState(false);
  const [endButton, setEndButton] = useState(true);
  const [search, setSearch] = useState("");

  const filterListRef = useRef(null);

  const handlerFavorite = (id) => {
    isFavorite(id)
      ? setFavorites(favorites.filter((favorite) => favorite !== id))
      : setFavorites([...favorites, id]);
  };

  const isFavorite = (id) => {
    return favorites.includes(id);
  };

  const valueFilterScroll = 250;

  const scrollLeft = () => {
    if (filterListRef.current) {
      filterListRef.current.scrollBy({
        left: -valueFilterScroll,
        behavior: "smooth",
      });
    }

    setStartButton(!isAtStart());
    setEndButton(true);
  };

  const scrollRight = () => {
    if (filterListRef.current) {
      filterListRef.current.scrollBy({
        left: valueFilterScroll,
        behavior: "smooth",
      });
    }

    setEndButton(isAtEnd());
    setStartButton(true);
  };

  const isAtStart = () => {
    return (
      (filterListRef.current &&
        filterListRef.current.scrollLeft - valueFilterScroll) <= 0
    );
  };

  const isAtEnd = () => {
    return (
      (filterListRef.current &&
        filterListRef.current.scrollLeft +
          filterListRef.current.clientWidth +
          valueFilterScroll) <= filterListRef.current.scrollWidth
    );
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Layout>
      <div
        sttyle={{
          position: "relative",
        }}
      >
        <div className="home">
          <div className="home__title">
            <span>The Best </span>
            <span
              style={{
                color: "#0866FF",
              }}
            >
              Facebook
            </span>
            {","}{" "}
            <span
              style={{
                color: "#DD2A7B",
              }}
            >
              Instagram
            </span>
            <span>, And Meta Ad Inspiration, Templates and Examples</span>
          </div>

          <p className="home__subtitle">
            Want to take your Meta ads to the next level? You get the best ad
            templates, real-life examples, and fresh creative ideas to make your
            ads stand out and sell even more!
          </p>

          <div className="filter">
            <div className="filter__search">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.33398 13.3335C10.6477 13.3335 13.334 10.6472 13.334 7.3335C13.334 4.01979 10.6477 1.3335 7.33398 1.3335C4.02028 1.3335 1.33398 4.01979 1.33398 7.3335C1.33398 10.6472 4.02028 13.3335 7.33398 13.3335Z"
                  stroke="#A0ABBB"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.6196 13.7934C12.973 14.86 13.7796 14.9667 14.3996 14.0334C14.9663 13.18 14.593 12.48 13.5663 12.48C12.8063 12.4734 12.3796 13.0667 12.6196 13.7934Z"
                  stroke="#A0ABBB"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <input
                type="text"
                className="filter__search-input"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div
              className="filter-item filter-item--margin"
              style={{
                padding: "10px 26px",
                margin: "0 10px",
              }}
            >
              <span
                className="filter-item--text"
                style={{
                  color: "#141414",
                }}
              >
                Templates
              </span>

              <label className="switch">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleToggle}
                />
                <span className="switch__slider"></span>
              </label>
            </div>

            <button
              className="filter__select"
              onClick={() => setOpenFilters(!openFilters)}
            >
              <span
                style={{
                  color: "#141414",
                }}
              >
                Filters
              </span>

              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  transform: openFilters ? "rotate(-90deg)" : "rotate(0deg)",
                  transition: "all 0.3s ease",
                }}
              >
                <path
                  d="M13.2807 5.9668L8.93404 10.3135C8.4207 10.8268 7.5807 10.8268 7.06737 10.3135L2.7207 5.9668"
                  stroke="#64748B"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div
              className="filter__modal"
              style={{
                height: openFilters ? "max-content" : "0px",
                padding: openFilters ? "24px" : "0px",
                border: openFilters ? "1px solid #ebebed" : "none",
              }}
            >
              <button
                className="filter__modal-select"
                onClick={() => setOpenFiltersObj(!openFiltersObj)}
              >
                <span>Objective</span>

                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    transform: openFiltersObj
                      ? "rotate(-90deg)"
                      : "rotate(0deg)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <path
                    d="M13.2807 5.9668L8.93404 10.3135C8.4207 10.8268 7.5807 10.8268 7.06737 10.3135L2.7207 5.9668"
                    stroke="#64748B"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className="filter__modal--border"></div>

              <button
                className="filter__modal-select"
                onClick={() => setOpenFiltersType(!openFiltersType)}
              >
                <span>Type</span>

                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    transform: openFiltersType
                      ? "rotate(-90deg)"
                      : "rotate(0deg)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <path
                    d="M13.2807 5.9668L8.93404 10.3135C8.4207 10.8268 7.5807 10.8268 7.06737 10.3135L2.7207 5.9668"
                    stroke="#64748B"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className="filter__modal--border"></div>

              <button
                className="filter__modal-select"
                onClick={() => setOpenFiltersPsy(!openFiltersPsy)}
              >
                <span>Psychology</span>

                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    transform: openFiltersPsy
                      ? "rotate(-90deg)"
                      : "rotate(0deg)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <path
                    d="M13.2807 5.9668L8.93404 10.3135C8.4207 10.8268 7.5807 10.8268 7.06737 10.3135L2.7207 5.9668"
                    stroke="#64748B"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className="filter__modal--border"></div>

              <button
                className="filter__modal-select"
                onClick={() => setOpenFiltersInd(!openFiltersInd)}
              >
                <span>Industry</span>

                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    transform: openFiltersInd
                      ? "rotate(-90deg)"
                      : "rotate(0deg)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <path
                    d="M13.2807 5.9668L8.93404 10.3135C8.4207 10.8268 7.5807 10.8268 7.06737 10.3135L2.7207 5.9668"
                    stroke="#64748B"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="filter-container">
              {startButton && (
                <button className="filter-button left" onClick={scrollLeft}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="filter-button--rotate"
                  >
                    <path
                      d="M5.93945 13.2802L10.2861 8.93355C10.7995 8.42021 10.7995 7.58021 10.2861 7.06688L5.93945 2.72021"
                      stroke="#141414"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              )}
              <div className="filter-list" ref={filterListRef}>
                {filtersItems.map((filter) => (
                  <div className="filter-item" key={filter.id}>
                    <span className="filter-item--text">{filter.name}</span>

                    <span className="filter-item--value">{filter.value}</span>
                  </div>
                ))}
              </div>
              {endButton && (
                <button className="filter-button right" onClick={scrollRight}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.93945 13.2802L10.2861 8.93355C10.7995 8.42021 10.7995 7.58021 10.2861 7.06688L5.93945 2.72021"
                      stroke="#141414"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              )}{" "}
            </div>
          </div>

          <div className="home__list">
            {brandList.map((brand) => (
              <div className="home__item" key={brand.id}>
                <div className="home__item-top">
                  <span className="home__item-top--title">{brand.name}</span>

                  <div className="home__item-top-buttons">
                    {!!brand.canva && (
                      <a
                        href={brand.canva}
                        style={{
                          display: "flex",
                        }}
                      >
                        <Image
                          src={canvaIcon}
                          alt="canva"
                          width={23}
                          height={23}
                          priority
                          style={{
                            borderRadius: "48px",
                          }}
                        />
                      </a>
                    )}

                    <button className="home__item-top--btn">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 13 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.80859 3.14515H8.5306C9.97461 3.14515 11.1604 4.32618 11.1604 5.77497C11.1604 7.21898 9.97939 8.40479 8.5306 8.40479H7.80859"
                          stroke="#64748B"
                          strokeWidth="1.14756"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4.9447 8.40479H4.22747C2.77868 8.40479 1.59766 7.22376 1.59766 5.77497C1.59766 4.33096 2.77868 3.14515 4.22747 3.14515H4.9447"
                          stroke="#64748B"
                          strokeWidth="1.14756"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4.4668 5.77539H8.29199"
                          stroke="#64748B"
                          strokeWidth="1.14756"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    {!!brand.link && (
                      <button className="home__item-top--btn">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 13 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.09766 5.29826L11.0185 1.37744"
                            stroke="#64748B"
                            strokeWidth="1.14756"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.4006 3.28974V0.994629H9.10547"
                            stroke="#64748B"
                            strokeWidth="1.14756"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6.14123 0.994629H5.18493C2.79419 0.994629 1.83789 1.95093 1.83789 4.34167V7.21056C1.83789 9.60131 2.79419 10.5576 5.18493 10.5576H8.05382C10.4446 10.5576 11.4009 9.60131 11.4009 7.21056V6.25426"
                            stroke="#64748B"
                            strokeWidth="1.14756"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    )}

                    <button
                      className="home__item-top--btn"
                      onClick={() => handlerFavorite(brand.id)}
                      style={{
                        backgroundColor: isFavorite(brand.id)
                          ? "#ebe70a"
                          : "transparent",
                      }}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.49609 4.36572C5.3472 4.67652 6.27481 4.67652 7.12591 4.36572"
                          stroke="#64748B"
                          strokeWidth="1.14756"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.11516 0.994629H3.50581C2.48735 0.994629 1.66016 1.82661 1.66016 2.84028V9.5774C1.66016 10.4381 2.27697 10.8015 3.03244 10.3855L5.36581 9.08969C5.61445 8.95102 6.01609 8.95102 6.25995 9.08969L8.59331 10.3855C9.34879 10.8062 9.9656 10.4428 9.9656 9.5774V2.84028C9.96082 1.82661 9.13362 0.994629 8.11516 0.994629Z"
                          stroke="#64748B"
                          strokeWidth="1.14756"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.11516 0.994629H3.50581C2.48735 0.994629 1.66016 1.82661 1.66016 2.84028V9.5774C1.66016 10.4381 2.27697 10.8015 3.03244 10.3855L5.36581 9.08969C5.61445 8.95102 6.01609 8.95102 6.25995 9.08969L8.59331 10.3855C9.34879 10.8062 9.9656 10.4428 9.9656 9.5774V2.84028C9.96082 1.82661 9.13362 0.994629 8.11516 0.994629Z"
                          stroke="#64748B"
                          strokeWidth="1.14756"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="home__item-container">
                  <Image
                    src={brand.img}
                    alt="brandImage"
                    className="home__item-container--image"
                    priority
                  />
                </div>

                <div className="home__item-overlay"></div>

                <a href="https://www.canva.com/" className="home__item-button">
                  {" "}
                  <Image
                    src={canvaIcon}
                    alt="canva"
                    width={16}
                    height={16}
                    style={{
                      borderRadius: "48px",
                      marginRight: "8px",
                    }}
                  />
                  <span className="home__item-button--text">
                    {!!brand.canva ? "Edit Template" : "Request Template"}
                  </span>
                </a>

                <span className="home__item--brand">{brand.brand}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="btn">
          <button
            className="btn__up"
            onClick={() =>
              window &&
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.6">
                <rect width="40" height="40" rx="20" fill="black" />
                <path
                  d="M19 28C19 28.5523 19.4477 29 20 29C20.5523 29 21 28.5523 21 28L19 28ZM20.7071 11.2929C20.3166 10.9024 19.6834 10.9024 19.2929 11.2929L12.9289 17.6569C12.5384 18.0474 12.5384 18.6805 12.9289 19.0711C13.3195 19.4616 13.9526 19.4616 14.3431 19.0711L20 13.4142L25.6569 19.0711C26.0474 19.4616 26.6805 19.4616 27.0711 19.0711C27.4616 18.6805 27.4616 18.0474 27.0711 17.6569L20.7071 11.2929ZM21 28L21 12L19 12L19 28L21 28Z"
                  fill="white"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
    </Layout>
  );
}
