import { type Metadata, NextPage } from "next";

import SidebarPage from "@components/pages/SidebarPage";

import "../../styles/sidebarPage/sidebarPage.scss";

export const metadata: Metadata = {
    title: {
        default: "Sidebar",
        template: "%s - Test",
    },
    description: "Description Sidebar",
};

const SidebarPageLayout: NextPage = () => {
    return <SidebarPage />;
};

export default SidebarPageLayout;
