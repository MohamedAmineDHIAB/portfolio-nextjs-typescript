import { HeaderWrapper, LogoWrapper, NavBar, NavBarItem } from "./style";
import Logo from "../logo";
import { PrimaryButton } from "../buttons";

const Header = () => {
    return (
        <HeaderWrapper>
            <LogoWrapper>
                <Logo />
            </LogoWrapper>
            <NavBar>
                <NavBarItem>
                    <span>Projects</span>
                </NavBarItem>
                <NavBarItem>
                    <span>Education</span>
                </NavBarItem>
                <NavBarItem>
                    <span>Work</span>
                </NavBarItem>
                <NavBarItem>
                    <PrimaryButton href="mailto: aminedhiab2028@gmail.com">
                        Let&apos;s chat
                    </PrimaryButton>
                </NavBarItem>
            </NavBar>
        </HeaderWrapper>
    );
};

export default Header;
