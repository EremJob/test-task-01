"use client";

import { Checkbox, CheckboxProps, Flex, Radio } from "antd";
import { useState } from "react";
import { useCounterStore } from "@components/Provider";
import { ECurrencies, ETransferCount } from "@store/counter-store";
import type { CheckboxOptionType } from "antd/es/checkbox";

const CheckboxGroup = Checkbox.Group;

export const CURRENCY_OPTIONS = [
    { label: "RUB", value: ECurrencies.RUB },
    { label: "USD", value: ECurrencies.USD },
    { label: "EUR", value: ECurrencies.EUR },
];

export const TRANSFER_OPTIONS: CheckboxOptionType[] = [
    { label: "Без пересадок", value: ETransferCount.zero },
    { label: "1 пересадка", value: ETransferCount.one },
    { label: "2 пересадки", value: ETransferCount.two },
    { label: "3 пересадки", value: ETransferCount.three },
];

const Sidebar = () => {
    const [checkedList, setCheckedList] = useState<ETransferCount[]>([]);
    const { currency, setCurrency, updateTicketsListByTransfer } =
        useCounterStore((state) => state);

    const transferValues = TRANSFER_OPTIONS.map(
        (option) => option.value as ETransferCount,
    );
    const checkAll = TRANSFER_OPTIONS.length === checkedList.length;
    const indeterminate =
        checkedList.length > 0 && checkedList.length < TRANSFER_OPTIONS.length;

    const onChange = (counts: ETransferCount[]) => {
        setCheckedList(counts);
        updateTicketsListByTransfer(counts);
    };

    const onCheckAllChange: CheckboxProps["onChange"] = (e) => {
        const values = e.target.checked ? transferValues : [];
        setCheckedList(values);
        updateTicketsListByTransfer(values);
    };

    return (
        <div className={"home_sidebar__wrapper"}>
            <div className={"home_sidebar__inner-wrapper"}>
                <Flex vertical gap={30}>
                    <div className={"filed_group _radio"}>
                        <h4>Валюта</h4>
                        <Radio.Group
                            block={true}
                            options={CURRENCY_OPTIONS}
                            defaultValue={currency}
                            optionType="button"
                            buttonStyle="solid"
                            onChange={(e) => {
                                setCurrency(e.target.value);
                            }}
                        />
                    </div>
                    <div className={"filed_group _checkbox"}>
                        <h4>Количество пересадок</h4>
                        <>
                            <Checkbox
                                indeterminate={indeterminate}
                                onChange={onCheckAllChange}
                                checked={checkAll}
                            >
                                Все
                            </Checkbox>
                            <CheckboxGroup
                                options={TRANSFER_OPTIONS}
                                value={checkedList}
                                onChange={onChange}
                            />
                        </>
                    </div>
                </Flex>
            </div>
        </div>
    );
};

export default Sidebar;
