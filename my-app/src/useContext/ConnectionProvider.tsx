import { createContext, useContext, useState, type ReactNode } from "react";

type ConnectionProviderType = {
    isHidden: boolean;
    hideMenu: () => void;
    loaded: boolean;
    loadingAnimation: () => void;
    getData: (value: Object) => void;
    fetchedData: Object;
}

const UIProvider = createContext<ConnectionProviderType | undefined>(undefined);

const ConnectionProvider = ({children}: {children: ReactNode}) => {
    const [ isHidden, setIsHidden ] = useState(true);
    const [ loaded, setloading ] = useState(false);
    const [ fetchedData, setFetchedData ] = useState<void | undefined>({});

    const hideMenu = () => setIsHidden(false);
    const loadingAnimation = () => {
        setloading(true);
        setTimeout(() => {
            setloading(false);
        },2000)
    }
    const getData = (value: void | undefined) => {
        setFetchedData(value);
    }

    return(
        <UIProvider.Provider value={{isHidden, hideMenu, loaded, loadingAnimation, getData, fetchedData}}>
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