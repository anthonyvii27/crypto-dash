import { Inter } from "next/font/google";
import React, { ReactNode } from "react";
import { NextFont } from "next/dist/compiled/@next/font";
import Providers from "@/app/providers";
import { CoreProvider } from "@/app/_context/core";

const inter: NextFont = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: ReactNode }): ReactNode {
    return (
        <html lang="en">
            <body className={inter.className}>
                <CoreProvider>
                    <Providers>{children}</Providers>
                </CoreProvider>
            </body>
        </html>
    );
}
