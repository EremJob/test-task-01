"use client";

import { FC, useEffect, useMemo, useState } from "react";
import cn from "classnames";

import Button from "./Button";
import { IconCheck, IconPlus } from "../Icons";
import Filter from "@components/pages/SidebarPage/components/Filter";
import IconEyeOpen from "@components/pages/SidebarPage/Icons/IconEyeOpen";

type TDataType = {
    id: string;
    hash: string;
    date: string;
    amount: string;
    approximateAmount: string;
    counterparty: string;
    counterpartyWallet: string;
};

const COLUMN_CLASSNAME = "item_column";

enum EColumns {
    hash = "hash",
    value = "value",
    counterparty = "counterparty",
    actions = "actions",
}

const List = () => {
    // ToDo: Remove hydrated
    const [isHydrated, setIsHydrated] = useState<boolean>();

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    if (!isHydrated) return null;

    return (
        <div className={"sidebar_list__wrapper"}>
            <div className={"sidebar_list__inner-wrapper"}>
                <div className={"list_head__wrapper"}>
                    <Filter />
                    <div className={"list_head__inner-wrapper"}>
                        <div
                            className={cn(
                                COLUMN_CLASSNAME,
                                `_${EColumns.hash}`,
                            )}
                        >
                            Хэш / дата
                        </div>
                        <div
                            className={cn(
                                COLUMN_CLASSNAME,
                                `_${EColumns.value}`,
                            )}
                        >
                            Значения
                        </div>
                        <div
                            className={cn(
                                COLUMN_CLASSNAME,
                                `_${EColumns.counterparty}`,
                            )}
                        >
                            Контрагент
                        </div>
                        <div
                            className={cn(
                                COLUMN_CLASSNAME,
                                `_${EColumns.actions}`,
                            )}
                        />
                    </div>
                </div>
                <div className={"list_body__wrapper"}>
                    {ARRAY_MOCKUP().map((item, index) => (
                        <Item
                            key={index}
                            {...item}
                            isActive={Math.random() < 0.5}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default List;

const Item: FC<
    TDataType & {
        isActive: boolean;
    }
> = ({
    hash,
    date,
    amount,
    approximateAmount,
    counterparty,
    counterpartyWallet,
    isActive,
}) => {
    const [buttonActive, setButtonActive] = useState<boolean>();
    const [rowHover, setRowHover] = useState<boolean>();

    const icons = useMemo(() => {
        if (buttonActive && rowHover) {
            return <IconEyeOpen />;
        }
        if (buttonActive) {
            return <IconCheck />;
        }
        return <IconPlus />;
    }, [buttonActive, rowHover]);

    const handleHover = (value: boolean) => {
        setRowHover(value);
    };

    return (
        <div className={cn("item_wrapper", { _active: isActive })}>
            <div
                className={cn("item_inner-wrapper", { _hover: rowHover })}
                onMouseEnter={() => handleHover(true)}
                onMouseLeave={() => handleHover(false)}
                onClick={() => setButtonActive(true)}
            >
                <div className={cn(COLUMN_CLASSNAME, `_${EColumns.hash}`)}>
                    <p>{hash}</p>
                    <span>{date}</span>
                </div>
                <div className={cn(COLUMN_CLASSNAME, `_${EColumns.value}`)}>
                    <p>
                        <b>{amount}</b>
                    </p>
                    <span>≈{approximateAmount}</span>
                </div>
                <div
                    className={cn(
                        COLUMN_CLASSNAME,
                        `_${EColumns.counterparty}`,
                    )}
                >
                    {buttonActive ? (
                        <p>{counterparty}</p>
                    ) : (
                        <>
                            <p
                                className={"hovered"}
                                onMouseEnter={() => handleHover(false)}
                                onMouseLeave={() => handleHover(true)}
                                onClick={(event) => {
                                    event.preventDefault();
                                    event.stopPropagation();
                                    console.log("click on counterparty");
                                }}
                            >
                                <b>{counterparty}</b>
                            </p>
                            <span>{counterpartyWallet}</span>
                        </>
                    )}
                </div>
                <div className={cn(COLUMN_CLASSNAME, `_${EColumns.actions}`)}>
                    <Button className={cn({ ["_active"]: buttonActive })}>
                        {icons}
                    </Button>
                </div>
            </div>
        </div>
    );
};

/** ARRAY GENERATOR -------------------------------------------------------------------------------- */
/** -------------------------------------------------------------------------------- */
/** -------------------------------------------------------------------------------- */

const ARRAY_MOCKUP = (): TDataType[] => {
    const listItems: TDataType[] = [];

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    function generateRandomDate(startDate, endDate) {
        const date = new Date(
            startDate.getTime() +
                Math.random() * (endDate.getTime() - startDate.getTime()),
        );
        return date.toLocaleDateString("ru-RU", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    function generateRandomText(minLength, maxLength) {
        const characters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let result = "";
        const length =
            Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(
                Math.floor(Math.random() * characters.length),
            );
        }
        return result;
    }

    for (let i = 1; i <= 20; i++) {
        listItems.push({
            id: i.toString(),
            hash: generateRandomText(64, 64), // Фиксированная длина хеша
            date: generateRandomDate(new Date(2023, 0, 1), new Date()),
            amount: `${Math.random() < 0.5 ? "+" : "-"} ${generateRandomNumber(
                100,
                23478680,
            )} USDT`,
            approximateAmount: `${generateRandomNumber(100, 23478680)} USD`,
            counterparty: generateRandomText(10, 30),
            counterpartyWallet:
                Math.random() < 0.5 ? "unnamed_service" : "Unknown wallet",
        });
    }

    return listItems;
};
