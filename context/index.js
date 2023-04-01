import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
    const [state, setState] = useState({
        appName: "Einaya",
    });

    const [loading, setLoading] = useState(false);

    const setSharedState = (values) => {
        setState({ ...state, ...values })
    }
    return (
        <AppContext.Provider value={{ ...state, setSharedState, loading, setLoading }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}