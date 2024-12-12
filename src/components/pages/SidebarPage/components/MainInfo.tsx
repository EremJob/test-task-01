import { FC, PropsWithChildren } from "react";
import cn from "classnames";

const MainInfo = () => {
    return (
        <div className={"sidebar_main-info__wrapper"}>
            <div className={"sidebar_main-info__inner-wrapper"}>
                <TableRowGroup>
                    <TableRow title="Категория" value={undefined} />
                    <TableRow title="Баланс" value={"47 660 USD"} />
                </TableRowGroup>
                <TableRowGroup>
                    <TableRow title="Приток" value={"1 USD"} />
                    <TableRow title="Отток" value={"1825565.028991 USD"} />
                </TableRowGroup>
                <TableRowGroup>
                    <TableRow
                        title="Длинный тест ДлинныйтестДлинныйтест Длинный тест Длинный тест Длинный тест Длинный тест  "
                        value={"1825565.028991 USD"}
                    />
                    <TableRow title="Котокий текст" value={"1.0289 USD"} />
                </TableRowGroup>
                <TableRowGroup>
                    <TableRow
                        title="Длинный тест ДлинныйтестДлинныйтест Длинный тест Длинный тест Длинный тест Длинный тест  "
                        value={"1 USD"}
                        isDarkTitle={true}
                    />
                    <TableRow
                        title="Котокий текст"
                        value={"1825565.028991 USD"}
                        isBoldValue={true}
                    />
                </TableRowGroup>
            </div>
        </div>
    );
};

export default MainInfo;

const TableRowGroup: FC<PropsWithChildren> = ({ children }) => {
    return <div className={"table-row-group_wrapper"}>{children}</div>;
};

const TableRow: FC<{
    title: string;
    value: string | undefined;
    isBoldValue?: boolean;
    isDarkTitle?: boolean;
}> = ({ title, value, isBoldValue, isDarkTitle }) => {
    return (
        <div
            className={cn("table-row_wrapper", {
                [`_bold-value`]: isBoldValue,
                [`_dark-title`]: isDarkTitle,
            })}
        >
            <span className={"table-row_title"}>{title}:</span>
            <span className={"table-row_value"}>{value ?? "—"}</span>
        </div>
    );
};
