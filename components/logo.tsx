import { SVGProps } from "react";

const SvgLogoMD = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="inherit"
        viewBox="0 0 327 245"
        {...props}
    >
        <path d="M20 130v95h26v-67.3c0-37.1.3-67.7.7-68 .3-.4 14.3 19.7 30.9 44.7 16.7 25 30.6 45.6 31.1 45.9.4.2 18.8-26.5 40.8-59.5l40-59.9 22.5.4c24.8.5 29.1 1.2 41.5 7.2 17.9 8.6 32 25.9 37 45.3 2.1 8.3 2.1 24.2 0 32.4-5 19.4-19.1 36.7-37 45.3-11.4 5.5-17.2 6.6-36.2 7.2l-17.3.6v-52.4l-20 23.5-20 23.6v31.1l39.3-.3c37-.4 39.6-.6 47.2-2.7 34.6-9.8 60.3-35.4 69.2-68.9 3.7-13.9 3.7-32.5 0-46.2-7.4-27.9-25.1-49.4-51.1-62-18.7-9.1-20.1-9.3-66.8-9.7l-40.8-.4v27.6l-23.5 35.3c-13 19.3-23.9 35.2-24.4 35.2-.4 0-14.8-20.9-31.9-46.4C56.6 55.9 46 39.2 46 37.6V35H20v95z" />
    </svg>
);

const Logo = () => {
    return <SvgLogoMD fill="var(--blue)" width="100%" height="100%" />;
};

export default Logo;
