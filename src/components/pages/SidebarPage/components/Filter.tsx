import { IconArrowDouble, IconCrossSharp, IconFilter } from "../Icons";
import Button from "./Button";
import { FC, PropsWithChildren, useState } from "react";
import { Flex, Tag } from "antd";
import { TagProps } from "antd/es/tag";

const Filter = () => {
    const [isActive, setIsActive] = useState<boolean>(false);

    return (
        <div className={"filter_wrapper"}>
            <div className={"filter_title__wrapper"}>
                <Flex align="center" gap={4}>
                    <h3>Transfers (13)</h3>
                    <Button
                        onClick={() => setIsActive((prevState) => !prevState)}
                    >
                        <IconFilter isActive={isActive} />
                    </Button>
                </Flex>
                <Button
                    onClick={() => setIsActive((prevState) => !prevState)}
                    className={"_sort"}
                >
                    by date <IconArrowDouble isActive={isActive} />
                </Button>
            </div>
            <div className={"filter_tags__wrapper"}>
                <TagItem>short</TagItem>
                <TagItem>09.03.2023 — 01.02.2024</TagItem>
                <TagItem>
                    Длинный тест ДлинныйтестДлинныйтест Длинный тест Длинный
                    тест Длинный тест Длинный тест
                </TagItem>
            </div>
        </div>
    );
};

export default Filter;

const TagItem: FC<PropsWithChildren & TagProps> = ({
    children,
    onClose,
    ...rest
}) => {
    return (
        <Tag
            closeIcon={
                <span onClick={onClose}>
                    <IconCrossSharp />
                </span>
            }
            {...rest}
        >
            <span className="content">{children}</span>
        </Tag>
    );
};
