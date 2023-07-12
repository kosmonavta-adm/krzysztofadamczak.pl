import { createContext, useContext, ReactNode, Dispatch, SetStateAction, useState } from 'react';

interface IOverlayInterface {
    isOverlayVisible: boolean;
    setIsOverlayVisible: Dispatch<SetStateAction<boolean>>;
}

const OverlayContext = createContext<IOverlayInterface>({
    isOverlayVisible: false,
    setIsOverlayVisible: () => false,
});

export const OverlayProvider = ({ children }: { children: ReactNode }) => {
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    const values = {
        isOverlayVisible,
        setIsOverlayVisible,
    };
    return <OverlayContext.Provider value={values}>{children}</OverlayContext.Provider>;
};

export function useOverlay() {
    return useContext(OverlayContext);
}
