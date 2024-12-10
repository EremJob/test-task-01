"use client";

import Logo from "./components/Logo";
import Sidebar from "./components/Sidebar";
import List from "./components/List";

const HomePage = () => {
    return (
        <div className={"layout_wrapper"}>
            <div className={"container"}>
                <Logo />
                <div className={"home_wrapper"}>
                    <Sidebar />
                    <List />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
