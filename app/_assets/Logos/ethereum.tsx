import { ReactElement } from "react";
import { IAssetWithWidthAndHeight } from "@/app/_interfaces/core";

const Ethereum = ({ width = 500, height = 500 }: IAssetWithWidthAndHeight): ReactElement => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="250" cy="250" r="250" fill="white" />
        <path
            d="M247.773 52L245.09 61.1155V325.604L247.773 328.281L370.543 255.711L247.773 52Z"
            fill="#343434"
        />
        <path d="M247.773 52L125 255.711L247.773 328.281V199.906V52Z" fill="#8C8C8C" />
        <path
            d="M247.773 351.526L246.261 353.37V447.585L247.773 452L370.618 278.993L247.773 351.526Z"
            fill="#3C3C3B"
        />
        <path d="M247.773 452V351.526L125 278.993L247.773 452Z" fill="#8C8C8C" />
        <path d="M247.773 328.281L370.543 255.711L247.773 199.906V328.281Z" fill="#141414" />
        <path d="M125 255.711L247.773 328.281V199.906L125 255.711Z" fill="#393939" />
    </svg>
);

export { Ethereum };
