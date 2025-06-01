import Link from "next/link";
import { useState, useEffect } from "react";
import { FiShoppingCart, FiUser, FiSearch } from "react-icons/fi";

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Enable hover dropdown
    const dropdown = document.querySelector(".nav-item.dropdown");
    if (dropdown) {
      dropdown.addEventListener("mouseenter", () => {
        dropdown.classList.add("show");
        dropdown.querySelector(".dropdown-menu").classList.add("show");
      });
      dropdown.addEventListener("mouseleave", () => {
        dropdown.classList.remove("show");
        dropdown.querySelector(".dropdown-menu").classList.remove("show");
      });
    }
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert(`Search for: ${searchTerm}`);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top border-bottom px-3">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Toggle button at top-left */}
        <button
          className="navbar-toggler me-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarLinks"
          aria-controls="navbarLinks"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ order: 0 }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Brand next to toggle */}
        <div className="d-flex align-items-center" style={{ order: 1 }}>
          <Link href="/" legacyBehavior>
            <a className="navbar-brand">MyShop</a>
          </Link>
        </div>

        {/* Center Section: Nav Links (Collapsible) */}
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarLinks"
          style={{ order: 2 }}
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <Link href="#" legacyBehavior>
                <a className="nav-link dropdown-toggle">Shop</a>
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    href={{ pathname: "/shop", query: { type: "men" } }}
                    legacyBehavior
                  >
                    <a className="dropdown-item">Men Shopping</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href={{ pathname: "/shop", query: { type: "women" } }}
                    legacyBehavior
                  >
                    <a className="dropdown-item">Women Shopping</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href={{ pathname: "/shop", query: { type: "kids" } }}
                    legacyBehavior
                  >
                    <a className="dropdown-item">Kids Shopping</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href={{ pathname: "/shop", query: { type: "bag&shoes" } }}
                    legacyBehavior
                  >
                    <a className="dropdown-item">Bag & Shoes</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link href="/sale" legacyBehavior>
                <a className="nav-link">OnSale</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/newarrivals" legacyBehavior>
                <a className="nav-link">NewArrivals</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/brand" legacyBehavior>
                <a className="nav-link">Brand</a>
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section: Search + Cart + Profile */}
        <div className="d-flex align-items-center gap-3" style={{ order: 3 }}>
          {/* Large screen search bar */}
          <form
            className="d-none d-lg-flex"
            role="search"
            onSubmit={handleSearchSubmit}
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-outline-primary" type="submit">
              <FiSearch />
            </button>
          </form>

          {/* Small screen search icon */}
          <button
            className="btn d-lg-none"
            onClick={() => alert(`Search for: ${searchTerm}`)}
          >
            <FiSearch size={20} />
          </button>

          <Link href="/cart" legacyBehavior>
            <a className="text-dark">
              <FiShoppingCart size={24} />
            </a>
          </Link>

          <Link href="/profile" legacyBehavior>
            <a className="text-dark">
              <FiUser size={24} />
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
