"use client";

import { ReactNode, useContext } from "react";
import { Content } from "@/app/_components/Content";
import { Header } from "@/app/_components/Header";
import { Sidebar } from "@/app/_components/Sidebar";
import { CoreContext, ICoreContext } from "@/app/_context/core";

import { Root } from "./page.styled";

export default function Home(): ReactNode {
    const coreCtx: ICoreContext = useContext(CoreContext);

    return (
        <Root data-sidebar-opened={coreCtx.sidebarState}>
            <Header />
            <Sidebar />
            <Content />
        </Root>
    );
}
