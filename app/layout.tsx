import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import StyledComponentsRegistry from "@/lib/registry";
import { CoreProvider } from "@/app/_context/core";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Crypto Dashboard",
    description: "Initial project",
};

export default function Layout({ children }: { children: ReactNode }): ReactNode {
    return (
        <html lang="en">
            <body className={inter.className}>
                <StyledComponentsRegistry>
                    <CoreProvider>{children}</CoreProvider>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
