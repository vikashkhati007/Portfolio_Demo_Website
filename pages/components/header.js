import Link from "next/link";

export default function header() {
  return (
    <>
    <nav className="nav">
    <div className="navbar-logo">
      <a href="/">VK</a>
    </div>
    <div className="nav-items">
    <ul>
      <li>
          <Link className="link" href="/home">
          Home
          </Link>
      </li>
      <li>
      <Link className="link"  href="/about">
          About
          </Link>
      </li>
      <li>
      <Link className="link"  href="/projects">
          Projects
          </Link>
      </li>
      <li>
      <Link className="link"  href="/contact">
          Contact
          </Link>
      </li>
    </ul>
    </div>
    </nav>
    </>
  )
}

