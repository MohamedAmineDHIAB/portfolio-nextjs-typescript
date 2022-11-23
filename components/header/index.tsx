import { HeaderWrapper, LogoWrapper, NavBar, NavBarItem } from "./style";
import Logo from "../logo";

const Header = () => {
    return (
        <HeaderWrapper>
            <LogoWrapper>
                <Logo />
            </LogoWrapper>
            <NavBar>
                <NavBarItem />
            </NavBar>
        </HeaderWrapper>
    );
};

export default Header;
