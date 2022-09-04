import { createContext, ReactNode, useState } from "react";

export enum langOptions {
  EN = "EN",
  ES = "ES",
}

type ContextType = {
  lang: langOptions;
  toggleLang: () => void;
};

export const Context = createContext<ContextType>({
  lang: langOptions.EN,
  toggleLang: () => {},
});

type props = {
  children: ReactNode;
};

const ContextProvider = ({ children }: props): JSX.Element => {
  const [lang, setLang] = useState<langOptions>(langOptions.EN);
  return (
    <Context.Provider
      value={{
        lang: lang,
        toggleLang: () => {
          setLang((prev) =>
            prev === langOptions.EN ? langOptions.ES : langOptions.EN
          );
        },
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
