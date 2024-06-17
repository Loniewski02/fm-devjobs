"use client";

import {
  ReactNode,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

export const FiltersContext = createContext(
  {} as {
    name: string;
    setName: Dispatch<SetStateAction<string>>;
    location: string;
    setLocation: Dispatch<SetStateAction<string>>;
    isFullTime: boolean;
    setIsFullTime: Dispatch<SetStateAction<boolean>>;
    isMobileFiltersShown: boolean;
    setIsMobileFiltersShown: Dispatch<SetStateAction<boolean>>;
  },
);

export default function FiltersProvider({ children }: { children: ReactNode }) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [isMobileFiltersShown, setIsMobileFiltersShown] = useState(false);
  const [isFullTime, setIsFullTime] = useState(false);

  return (
    <FiltersContext.Provider
      value={{
        name,
        setName,
        location,
        setLocation,
        isFullTime,
        setIsFullTime,
        isMobileFiltersShown,
        setIsMobileFiltersShown,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
