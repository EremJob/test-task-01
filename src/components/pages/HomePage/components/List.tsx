"use client";

import { FC } from "react";
import { Button } from "antd";
import dayjs from "dayjs";

import { getNounFromNumber } from "@helpers/getNounFromNumber";
import { useCounterStore } from "@components/Provider";
import { DAY_FORMAT, DAY_INITIAL_FORMAT } from "@consts/formats";
import { TTicket } from "@store/counter-store";

const List = () => {
    const { ticketsList } = useCounterStore((state) => state);

    return (
        <div className={"home_list__wrapper"}>
            <div className={"home_list__inner-wrapper"}>
                {ticketsList.map((item: TTicket, index) => (
                    <Ticket key={index} {...item} />
                ))}
            </div>
        </div>
    );
};

export default List;

const Ticket: FC<TTicket> = ({
    price,
    origin,
    origin_name,
    destination,
    destination_name,
    departure_date,
    departure_time,
    arrival_date,
    arrival_time,
    stops,
}) => {
    const { currency } = useCounterStore((state) => state);

    return (
        <div className={"ticket_wrapper"}>
            <div className={"ticket_actions"}>
                <Button>
                    <span>Купить</span>
                    <span>
                        за {price} {currency}
                    </span>
                </Button>
            </div>
            <div className={"ticket_main-info"}>
                <TicketPlace
                    code={origin}
                    name={origin_name}
                    date={departure_date}
                    time={departure_time}
                    isOrigin={true}
                />
                <span className={"ticket_transfer-info"}>
                    {stops}{" "}
                    {getNounFromNumber(
                        stops,
                        "пересадка",
                        "пересадки",
                        "пересадок",
                    )}
                </span>
                <TicketPlace
                    code={destination}
                    name={destination_name}
                    date={arrival_date}
                    time={arrival_time}
                />
            </div>
        </div>
    );
};

const TicketPlace: FC<{
    code: string;
    name: string;
    date: string;
    time: string;
    isOrigin?: boolean;
}> = ({ code, name, date, time, isOrigin }) => {
    return (
        <div className={"ticket_place"}>
            <h4>{time}</h4>
            <h5>
                {isOrigin && `${code},`}
                {name}
                {!isOrigin && `,${code}`}
            </h5>
            <p>{dayjs(date, DAY_INITIAL_FORMAT).format(DAY_FORMAT)}</p>
        </div>
    );
};
