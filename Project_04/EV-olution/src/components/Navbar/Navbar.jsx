import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="nav">
            <div className="nav__logo">EV-olution</div>
            <ul className="nav__menu">
                <li>Home</li>
                <li>Explore</li>
                <li>About</li>
                <li className="nav__contact">Contact</li>
            </ul>
        </div>
    );
};

export default Navbar;