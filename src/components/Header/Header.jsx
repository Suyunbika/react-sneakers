import { NavLink } from "react-router-dom";
import { CartIcon, HeartIcon, OrderIcon } from "../Icons/Icons";
import Logo from "./Logo/Logo";

const CartButton = () => {
    return (
        <button>
            <CartIcon /> <span>1205 р.</span>
        </button>
    );
};

const Header = () => {
    return (
        <header className="header">
            <NavLink to="/">
                <Logo />
            </NavLink>

            <nav>
                <CartButton />

                <NavLink to="/favorites">
                    <HeartIcon />
                </NavLink>

                <NavLink to="/orders">
                    <OrderIcon />
                </NavLink>
            </nav>
        </header>
    )
}

export default Header;