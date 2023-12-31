import { ReactNode } from "react";

import { ThemeToggle } from "@/app/_components/Header/Components/ThemeToggle";
import { SignUp } from "@/app/_components/Header/Components/SignUp";
import { Search } from "./Components/Search";
import { Root, BrandContainer, SignUpContainer, ToolsContainer } from "./styles";

const Header = (): ReactNode => (
    <Root>
        <BrandContainer></BrandContainer>

        <ToolsContainer>
            <Search />
            <ThemeToggle />
        </ToolsContainer>

        <SignUpContainer>
            <SignUp />
        </SignUpContainer>
    </Root>
);

export { Header };
