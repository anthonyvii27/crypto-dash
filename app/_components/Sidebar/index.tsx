"use client";

import { ReactNode, useContext } from "react";
import { RetractButton } from "@/app/_components/Sidebar/Components/RetractButton";
import { CoreContext, ICoreContext } from "@/app/_context/core";

import { Root } from "./styles";

const Sidebar = (): ReactNode => {
    const coreCtx: ICoreContext = useContext(CoreContext);

    return (
        <Root data-opened={coreCtx.sidebarState}>
            <RetractButton />
            <button
                onClick={() =>
                    coreCtx.setTheme(prevState => (prevState === "light" ? "dark" : "light"))
                }
            >
                CHANGE THEME
            </button>
        </Root>
    );
};

export { Sidebar };
