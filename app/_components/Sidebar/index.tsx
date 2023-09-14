"use client";

import { ReactNode, useContext } from "react";
import { CoreContext, ICoreContext } from "@/app/_context/core";

import { Options } from "@/app/_components/Sidebar/Components/Options";
import { Brand, Root } from "./styles";

const Sidebar = (): ReactNode => {
    const coreCtx: ICoreContext = useContext(CoreContext);

    return (
        <Root data-opened={coreCtx.sidebarState}>
            <Brand>cryptodash</Brand>
            {/* <RetractButton /> */}
            <Options />
        </Root>
    );
};

export { Sidebar };
