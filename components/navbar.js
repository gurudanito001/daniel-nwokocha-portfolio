import Link from "next/dist/client/link";

const Navbar = (props) => {
  return (
    <nav class="navbar navbar-expand-md navbar-light bg-white sticky-top py-3">
      <a class="navbar-brand h6 m-0" href="/">{`<Daniel Nwokocha />`} </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav d-flex align-items-center">
          <li class="nav-item ml-5 text-dark">
            <a href="/resume" className="nav-link font-weight-bold">Resume</a>
          </li>
          <li class="nav-item mx-3 text-dark">
            <a href="/blog" className="nav-link font-weight-bold">Blog</a>
          </li>
        </ul>
      </div>
    </nav>

  )
}

export default Navbar;