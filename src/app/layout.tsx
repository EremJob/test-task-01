import React from "react";
import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Open_Sans } from "next/font/google";

import "./styles/main.scss";
import { CounterStoreProvider } from "@components/Provider";

export const metadata: Metadata = {
    title: {
        default: "Заголовок",
        template: "%s - Test",
    },
    description: "Описание",
};

const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru">
            <body className={`${openSans.variable}`}>
                <AntdRegistry>
                    <CounterStoreProvider>{children}</CounterStoreProvider>
                </AntdRegistry>
            </body>
        </html>
    );
}
