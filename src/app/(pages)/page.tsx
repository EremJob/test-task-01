import { type Metadata, NextPage } from "next";

import "../styles/homePage/homePage.scss";

import HomePage from "@components/pages/HomePage";

export const metadata: Metadata = {
    title: {
        default: "Home",
        template: "%s - Test",
    },
    description: "Description Home",
};

const HomePageLayout: NextPage = () => {
    return <HomePage />;
};

export default HomePageLayout;
