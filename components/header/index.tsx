import { HeaderWrapper, LogoWrapper, NavBar, NavBarItem } from "./style";
import { PrimaryButton } from "../buttons";
import Image from "next/image";

const Header = () => {
    return (
        <HeaderWrapper>
            <LogoWrapper>
                <Image src="/main/logo.svg" layout="fill" alt="mohamed_logo" />
            </LogoWrapper>
            <NavBar>
                <NavBarItem to="projects" smooth={true}>
                    <span>Projects</span>
                </NavBarItem>
                <NavBarItem to="education" smooth={true}>
                    <span>Education</span>
                </NavBarItem>
                <NavBarItem to="work" smooth={true}>
                    <span>Work</span>
                </NavBarItem>
                <div>
                    <PrimaryButton href="mailto: aminedhiab2028@gmail.com">
                        Let&apos;s chat
                    </PrimaryButton>
                </div>
            </NavBar>
        </HeaderWrapper>
    );
};

export default Header;
