"use client";

import { ThemeProvider } from "styled-components";
import React, { ReactNode, useContext } from "react";
import { DarkTheme, LightTheme } from "@/styles/theme";
import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyles from "@/styles/globalStyles";
import { CoreContext, ICoreContext } from "@/app/_context/core";

const THEME_MAP = {
    light: LightTheme,
    dark: DarkTheme,
};

const Providers = (props: React.PropsWithChildren): ReactNode => {
    const coreCtx: ICoreContext = useContext(CoreContext);

    return (
        <StyledComponentsRegistry>
            <ThemeProvider theme={THEME_MAP[coreCtx.theme]}>
                <GlobalStyles />
                {props.children}
            </ThemeProvider>
        </StyledComponentsRegistry>
    );
};

export default Providers;
