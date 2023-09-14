"use client";

import { ReactNode, useContext } from "react";
import { Moon, Sun } from "lucide-react";
import { CoreContext, ICoreContext } from "@/app/_context/core";
import { Toggle } from "./styles";

const ThemeToggle = (): ReactNode => {
    const coreCtx: ICoreContext = useContext(CoreContext);

    const handleToggle = (): void => {
        coreCtx.setTheme(prevState => (prevState === "light" ? "dark" : "light"));
    };

    return (
        <Toggle onClick={handleToggle}>
            {coreCtx.theme === "light" ? (
                <Sun size={20} color="#7e808a" />
            ) : (
                <Moon size={20} color="#696e77" />
            )}
        </Toggle>
    );
};

export { ThemeToggle };
