import React from "react";
import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Open_Sans, Roboto } from "next/font/google";
import cn from "classnames";

import "./styles/main.scss";
import { CounterStoreProvider } from "@components/Provider";

export const metadata: Metadata = {
    title: {
        default: "Тест",
        template: "%s - Test",
    },
    description: "Описание Тест",
};

const openSansFont = Open_Sans({ subsets: ["latin"], variable: "--font-sans" });

const robotoFont = Roboto({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--roboto",
});
const robotoFontBold = Roboto({
    subsets: ["latin"],
    weight: ["700"],
    variable: "--roboto-bold",
});

const robotoFontMed = Roboto({
    subsets: ["latin"],
    weight: ["500"],
    variable: "--roboto-med",
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru">
            <body
                className={cn(
                    `${openSansFont.variable} ${robotoFont.variable}  ${robotoFontBold.variable}  ${robotoFontMed.variable}`,
                )}
            >
                <AntdRegistry>
                    <CounterStoreProvider>{children}</CounterStoreProvider>
                </AntdRegistry>
            </body>
        </html>
    );
}
