import { ReactNode, createContext, useContext } from "react";
import { portfolieList } from "../../portfolielist";
import useLocalStorageState from "./uselocalstorage";

export interface PortfolieInterface {
  id: number;
  name: string;
  type: string;
  url: string[];
  description: string;
}

interface PortfolioContextType {
  portfolio: PortfolieInterface[];
  setPortfolio: (portfolio: PortfolieInterface[]) => void;
}

const PortfolioContext = createContext<PortfolioContextType>({
  portfolio: [],
  setPortfolio: () => {},
});

export function useProductContext() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("productContext must be used within a CartProvider");
  }
  return context;
}

interface PortfolioProviderProps {
  children: ReactNode;
}

export function PortfolioProvider({ children }: PortfolioProviderProps) {
  const [portfolio, setPortfolio] = useLocalStorageState<PortfolieInterface[]>(
    portfolieList,
    "portfolio"
  );

  return (
    <PortfolioContext.Provider
      value={{
        portfolio,
        setPortfolio,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}
