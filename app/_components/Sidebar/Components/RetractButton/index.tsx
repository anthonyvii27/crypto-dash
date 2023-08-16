"use client";

import { ReactNode, useContext } from "react";
import { CoreContext, ICoreContext } from "@/app/_context/core";

import { Root } from "./styles";

const RetractButton = (): ReactNode => {
    const coreCtx: ICoreContext = useContext(CoreContext);

    return <Root onClick={() => coreCtx.setSidebarState("closed")}>Recolher</Root>;
};

export { RetractButton };
