import React, { ReactElement, useState } from 'react';

export const StoreContext = React.createContext<any>(null);
interface StorePropsType {
    children: ReactElement
}
const StoreContextWrapper = ({ children }: StorePropsType): ReactElement => {
    const [color, setColor] = useState('blue');
    const [mode, setMode] = useState('light');
    const storeData = {
        color: [color, setColor],
        mode: [mode, setMode],
    }
    return (
        <StoreContext.Provider value={storeData}>
            {children}
        </StoreContext.Provider>
    )
};
export default StoreContextWrapper;