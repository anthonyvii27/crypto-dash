"use client";

import { createContext, Dispatch, ReactElement, SetStateAction, useState } from "react";
import { IReactChildren } from "@/app/_interfaces/core";

export interface ICoreContext {
    sidebarState: "open" | "closed";
    setSidebarState: Dispatch<SetStateAction<"open" | "closed">>;
    theme: "light" | "dark";
    setTheme: Dispatch<SetStateAction<"light" | "dark">>;
}

export const CoreContext = createContext<ICoreContext>({
    sidebarState: "open",
    setSidebarState: (): string => "",
    theme: "light",
    setTheme: (): string => "",
});

export const CoreProvider = ({ children }: IReactChildren): ReactElement => {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [sidebarState, setSidebarState] = useState<"open" | "closed">("open");

    return (
        <CoreContext.Provider
            value={{
                sidebarState,
                setSidebarState,
                theme,
                setTheme,
            }}
        >
            {children}
        </CoreContext.Provider>
    );
};
