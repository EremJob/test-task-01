import { createStore } from "zustand/vanilla";
import { TICKETS_MOCKUP } from "@consts/tickets";
import {
    filterTicketsByStops,
    sortTicketsByPrice,
} from "@helpers/arrayHelpers";

export type TTicket = {
    origin: string;
    origin_name: string;
    destination: string;
    destination_name: string;
    departure_date: string;
    departure_time: string;
    arrival_date: string;
    arrival_time: string;
    carrier: string;
    stops: number;
    price: number;
};

export enum ECurrencies {
    USD = "USD",
    EUR = "EUR",
    RUB = "RUB",
}

export enum ETransferCount {
    zero,
    one,
    two,
    three,
}

export type CounterState = {
    ticketsList: TTicket[];
    currency: ECurrencies;
};

export type CounterActions = {
    updateTicketsListByTransfer: (counts: ETransferCount[]) => void;
    setCurrency: (value: ECurrencies) => void;
};

export type CounterStore = CounterState & CounterActions;

export const initCounterStore = (): CounterState => {
    return {
        ticketsList: sortTicketsByPrice(TICKETS_MOCKUP),
        currency: ECurrencies.RUB,
    };
};

export const defaultInitState: CounterState = {
    currency: ECurrencies.RUB,
    ticketsList: [],
};

export const createCounterStore = (
    initState: CounterState = defaultInitState,
) => {
    return createStore<CounterStore>()((set) => ({
        ...initState,
        updateTicketsListByTransfer: (counts) =>
            set(() => {
                const updatedList = counts.length
                    ? filterTicketsByStops(TICKETS_MOCKUP, counts)
                    : sortTicketsByPrice(TICKETS_MOCKUP);
                return { ticketsList: updatedList };
            }),
        setCurrency: (value) => set(() => ({ currency: value })),
    }));
};
