import Link from "next/link";
import { FC } from "react";

const Error404PageLayout: FC = () => {
    return (
        <div>
            Страница не найдена.
            <Link href={"/"}>Домой</Link>
        </div>
    );
};

export default Error404PageLayout;
