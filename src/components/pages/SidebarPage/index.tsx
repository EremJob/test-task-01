"use client";

import Head from "./components/Head";
import MainInfo from "./components/MainInfo";
import List from "./components/List";

import { CONTAINER_CLASSNAME, LAYOUT_CLASSNAME } from "@consts/className.conts";

const SidebarPage = () => {
    return (
        <div className={LAYOUT_CLASSNAME}>
            <div className={CONTAINER_CLASSNAME}>
                <div className={"sidebar_wrapper"}>
                    <div className={"sidebar_inner-wrapper"}>
                        <Head />
                        <MainInfo />
                        <div className={"sidebar_content__wrapper"}>
                            <List />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SidebarPage;
