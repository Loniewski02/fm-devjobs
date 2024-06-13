import Wrapper from "./layout/Wrapper";
import Logo from "@/public/assets/desktop/logo.svg";
import Sun from "@/public/assets/desktop/icon-sun.svg";
import Moon from "@/public/assets/desktop/icon-moon.svg";

const Header = () => {
  return (
    <header className="h-[136px] bg-[url('/assets/mobile/bg-pattern-header.svg')] bg-cover bg-no-repeat px-6 pt-8 md:h-[160px] md:rounded-bl-[100px] md:bg-[url('/assets/tablet/bg-pattern-header.svg')] md:px-10 md:pt-[42px] lg:bg-[url('/assets/desktop/bg-pattern-header.svg')]">
      <Wrapper className="flex items-center justify-between ">
        <Logo />
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
