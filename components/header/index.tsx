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
