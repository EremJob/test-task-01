import Button from "@components/pages/SidebarPage/components/Button";
import { useEffect, useState } from "react";
import { IconCross } from "src/components/pages/SidebarPage/Icons";
import cn from "classnames";

const Head = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 68);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div
                className={cn("sidebar_close__wrapper", {
                    _scrolled: isScrolled,
                })}
            >
                <Button>
                    <IconCross />
                </Button>
            </div>
            <div className={"sidebar_head__wrapper"}>
                <div className={"sidebar_head__inner-wrapper"}>
                    <h3>Title</h3>
                    <p>0xEf3ff6667a8851C99f8BA2681D9D92933be88805а</p>
                </div>
            </div>
        </>
    );
};

export default Head;
