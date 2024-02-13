import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./navbarElements";
import Logo from "../../assets/logo.jpg";

const Navbar = () => {
    return (
        <>
            <Nav>
                <img src={Logo} alt="logo" />
                <Bars />

                <NavMenu>
                    <NavLink to="/live" >
                        LIVE
                    </NavLink>
                    <NavLink to="/prematch" activeStyle>
                        PREMATCH
                    </NavLink>
                    <NavLink to="/esports" activeStyle>
                        ESPORTS
                    </NavLink>
                    <NavLink to="/casino" activeStyle>
                        CASINO
                    </NavLink>
                    <NavLink to="/livecasino" activeStyle>
                        LIVE CASINO
                    </NavLink>
                    <NavLink to="/tournaments" activeStyle>
                        TOURNAMENTS
                    </NavLink>
                    <NavLink to="/virtualsports" activeStyle>
                        VIRTUAL SPORTS
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">
                        Sign In
                    </NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;