// src/providers/counter-store-provider.tsx
"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";
import "dayjs/locale/ru";
import customParseFormat from "dayjs/plugin/customParseFormat";

import dayjs from "dayjs";

import {
    type CounterStore,
    createCounterStore,
    initCounterStore,
} from "@store/counter-store";

export type CounterStoreApi = ReturnType<typeof createCounterStore>;

export const CounterStoreContext = createContext<CounterStoreApi | undefined>(
    undefined,
);

export interface CounterStoreProviderProps {
    children: ReactNode;
}

export const CounterStoreProvider = ({
    children,
}: CounterStoreProviderProps) => {
    const storeRef = useRef<CounterStoreApi>();
    dayjs.locale("ru");
    dayjs.extend(customParseFormat);

    if (!storeRef.current) {
        storeRef.current = createCounterStore(initCounterStore());
    }

    return (
        <CounterStoreContext.Provider value={storeRef.current}>
            {children}
        </CounterStoreContext.Provider>
    );
};

export const useCounterStore = <T,>(
    selector: (store: CounterStore) => T,
): T => {
    const counterStoreContext = useContext(CounterStoreContext);

    if (!counterStoreContext) {
        throw new Error(
            `useCounterStore must be used within CounterStoreProvider`,
        );
    }

    return useStore(counterStoreContext, selector);
};