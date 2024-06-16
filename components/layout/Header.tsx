import Link from "next/link";

import Wrapper from "./Wrapper";
import ThemeSwitchBtn from "../UI/ThemeSwitchBtn";
import Logo from "@/public/assets/desktop/logo.svg";

const Header = () => {
  return (
    <header className="sectionX h-[136px] bg-[url('/assets/mobile/bg-pattern-header.svg')] bg-cover bg-no-repeat pt-8 md:h-[160px] md:rounded-bl-[100px] md:bg-[url('/assets/tablet/bg-pattern-header.svg')] md:pt-[42px] lg:bg-[url('/assets/desktop/bg-pattern-header.svg')]">
      <Wrapper className="flex items-center justify-between ">
        <h1 className="relative">
          <Link href="/" aria-label="home page">
            <Logo />
            <span className="absolute hidden h-0 w-0">devjobs</span>
          </Link>
        </h1>
        <ThemeSwitchBtn />
      </Wrapper>
    </header>
  );
};

export default Header;
