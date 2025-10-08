import { createContext, useContext, useState, type ReactNode } from "react";

type ConnectionProviderType = {
    isHidden: boolean;

}

const UIProvider = createContext<ConnectionProviderType | undefined>(undefined);

const ConnectionProvider = ({children}: {children: ReactNode}) => {
    const [ isHidden, setIsHidden ] = useState(true);

    const hideMenu = () => setIsHidden(false);

    return(
        <UIProvider.Provider value={{isHidden}}>
            {children}
        </UIProvider.Provider>
    )
}
export const connectionContext = () => {
        const ctx = useContext(UIProvider);
        if(!ctx) throw new Error('Connection context mora biti unutar providera')
        return ctx;
    }

export default ConnectionProvider;