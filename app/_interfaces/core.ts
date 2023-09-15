import { ReactNode } from "react";

export interface IReactChildren {
    children: ReactNode | ReactNode[];
}

export interface IAssetWithWidthAndHeight {
    width?: number;
    height?: number;
}
