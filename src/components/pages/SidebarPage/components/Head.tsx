import Button from "@components/pages/SidebarPage/components/Button";
import { IconCross } from "src/components/pages/SidebarPage/Icons";

const Head = () => {
    return (
        <>
            <div className={"sidebar_close__wrapper"}>
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
