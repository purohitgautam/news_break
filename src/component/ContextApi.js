import React, { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({childern})=>{
    return (
        <AppContext.Provider value={"...state"}>
            {childern}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider};