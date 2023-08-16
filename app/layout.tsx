import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Crypto Dashboard",
    description: "Initial project",
};

export default function RootLayout({ children }: { children: ReactNode }): ReactNode {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
