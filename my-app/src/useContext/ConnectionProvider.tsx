import { createContext, useContext, useState, type ReactNode } from "react";

type ConnectionProviderType = {
    isHidden: boolean;
    hideMenu: (value: boolean) => void;
    loaded: boolean;
    loadingAnimation: () => void;
    getData: (value: Object) => void;
    fetchedData: Object;
}

const UIProvider = createContext<ConnectionProviderType | undefined>(undefined);

const ConnectionProvider = ({children}: {children: ReactNode}) => {
    const [ isHidden, setIsHidden ] = useState(false);
    const [ loaded, setloading ] = useState(false);

    const hideMenu = (value: boolean) => setIsHidden(value);
    const loadingAnimation = () => {
        setloading(true);
        setTimeout(() => {
            setloading(false);
        },2000)
    }

    return(
        <UIProvider.Provider value={{isHidden, hideMenu, loaded, loadingAnimation }}>
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