import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <nav className="Navbar">
            <ul>
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "selected" : ""}
                >
                    Inicio
                </NavLink>

                <NavLink
                    to="/sobre-mi"
                    className={({ isActive }) => isActive ? "selected" : ""}
                >
                    Sobre mi
                </NavLink>

                <NavLink
                    to="/mis-proyectos"
                    className={({ isActive }) => isActive ? "selected" : ""}
                >
                    Proyectos
                </NavLink>

            </ul>

        </nav>
    );
}

export default Navbar;
