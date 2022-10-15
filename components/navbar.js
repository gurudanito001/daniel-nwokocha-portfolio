import Link from "next/dist/client/link";

const Navbar = (props) => {
  return (
      <nav className="container-fluid d-flex align-items-center bg-white sticky-top py-3">
        <div className="container d-flex align-items-center">
          <a className="navbar-brand h6 m-0 text-dark d-flex align-items-center" href="/">
            <img src="/images/logo.svg" height="30px" /> <span style={{ color: "#273A69" }} className="ml-2 d-none d-md-inline h4  font-weight-bold mb-0">Daniel Nwokocha</span>
          </a>
          <div className="">
            <ul className="d-flex list-unstyled align-items-center m-0">
              <li className="ml-4 mx-1">
                <a href="/resume" className="nav-link font-weight-bold" style={{ color: "#273A69" }}>Resume</a>
              </li>
              <li className="mx-1">
                <a href="/blog" className="nav-link font-weight-bold" style={{ color: "#273A69" }}>Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    

  )
}

export default Navbar;