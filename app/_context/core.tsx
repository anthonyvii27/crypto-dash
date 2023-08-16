"use client";

import { createContext, Dispatch, ReactElement, SetStateAction, useState } from "react";
import { IReactChildren } from "@/app/_interfaces/core";

export interface ICoreContext {
    sidebarState: "open" | "closed";
    setSidebarState: Dispatch<SetStateAction<"open" | "closed">>;
}

export const CoreContext = createContext<ICoreContext>({
    sidebarState: "open",
    setSidebarState: (): string => "",
});

export const CoreProvider = ({ children }: IReactChildren): ReactElement => {
    const [sidebarState, setSidebarState] = useState<"open" | "closed">("open");

    return (
        <CoreContext.Provider
            value={{
                sidebarState,
                setSidebarState,
            }}
        >
            {children}
        </CoreContext.Provider>
    );
};
