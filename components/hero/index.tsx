import {
    HeroWrapper,
    HeroLeft,
    HeroRight,
    RightBorder,
    HeroImgWrapper,
    Waves,
} from "./style";
import MohamedPic from "../../public/hero/mohamed_pic.jpg";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { PrimaryButton } from "../buttons";
const Hero = () => {
    const [showPing, setShowPing] = useState(false);
    const [text, count] = useTypewriter({
        words: [
            "Data Scientist ",
            "Full Stack Engineer ",
            "Technical Manager ",
        ],
        loop: false,
    });
    useEffect(() => {
        var mounted = true;
        if (mounted) {
            setTimeout(() => {
                setShowPing(true);
            }, 4100);
        }
        return () => {
            mounted = false;
        };
    }, [setShowPing]);
    return (
        <HeroWrapper>
            <Waves src="./hero/waves.svg" />
            <HeroLeft>
                <h3>Hi, I'm Mohamed 👋</h3>
                <b>
                    I'm a {text} <Cursor cursorColor="inherit" />
                </b>
                <PrimaryButton>Let's chat</PrimaryButton>
            </HeroLeft>
            <HeroRight>
                {showPing && <RightBorder className="animate-ping" />}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1.2, 1.2, 1, 1],
                        rotate: [0, 0, 360, 360, 360, 0],
                        borderRadius: ["50%", "50%", "0%", "0%", "0%", "50%"],
                    }}
                    transition={{
                        duration: 3,
                        delay: 1,
                        ease: "easeInOut",
                        times: [0, 0.1, 0.3, 0.7, 0.8, 1],
                        // repeat: Infinity,
                        // repeatDelay: 1,
                    }}
                >
                    <HeroImgWrapper>
                        <Image
                            src={MohamedPic}
                            alt="Mohamed Picture"
                            layout="fill"
                            objectFit="contain"
                        />
                    </HeroImgWrapper>
                </motion.div>
            </HeroRight>
        </HeroWrapper>
    );
};

export default Hero;
