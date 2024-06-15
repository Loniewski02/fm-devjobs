import Wrapper from "./Wrapper";
import Logo from "@/public/assets/desktop/logo.svg";
import Sun from "@/public/assets/desktop/icon-sun.svg";
import Moon from "@/public/assets/desktop/icon-moon.svg";
import Link from "next/link";

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
        <div className="flex items-center gap-4">
          <Sun />
          <button
            className="relative h-6 w-12 rounded-xl bg-White p-[5px]"
            aria-label="theme change btn"
          >
            <span className="absolute left-[5px] top-[5px] block h-[14px] w-[14px] rounded-full bg-Violet" />
          </button>
          <Moon />
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
