import { Link, NavLink } from "react-router-dom"

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to={'/'}>Static Pages</Link>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to={"/"}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={"/about"}>About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={"/contacts"}>Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={"/admin"}>Admin</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header