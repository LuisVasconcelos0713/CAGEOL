import { AppContext } from "./AppContext";

export const AppProvider = ({children}) => {
    const BASE_URL = "https://opensheet.elk.sh/1f3-kCM5h9FOEAjkRLJ24HdNhRdHOr7eaII7wpRz6pO0";

    return(
        <AppContext.Provider value={{BASE_URL}}>
            {children}
        </AppContext.Provider>
    )

}