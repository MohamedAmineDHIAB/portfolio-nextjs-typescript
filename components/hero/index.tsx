import {
    HeroWrapper,
    HeroLeft,
    HeroRight,
    RightBorder,
    HeroImgWrapper,
    Waves,
} from "./style";
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
                <h3>Hi, I&apos;m Mohamed 👋</h3>
                <b>
                    I&apos;m a {text} <Cursor cursorColor="inherit" />
                </b>
                <PrimaryButton href="mailto: aminedhiab2028@gmail.com">
                    Let&apos;s chat
                </PrimaryButton>
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
                            src="/hero/mohamed_pic.jpg"
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
