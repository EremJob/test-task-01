import { TTicket } from "@consts/tickets";
import { ETransferCount } from "@store/counter-store";

export const sortTicketsByPrice = (flightsArray: TTicket[]) => {
    return flightsArray.sort((a, b) => a.price - b.price);
};

export function filterTicketsByStops(
    tickets: TTicket[],
    counts: ETransferCount[],
): TTicket[] {
    const filteredTickets = counts.length
        ? tickets.filter((ticket) => counts.includes(ticket.stops))
        : tickets;

    return filteredTickets.sort((a, b) => {
        if (a.stops !== b.stops) {
            return a.stops - b.stops;
        }
        return a.price - b.price;
    });
}
