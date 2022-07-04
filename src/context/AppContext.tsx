import React from 'react';
import { createContext } from 'react'
import { useAppConfig } from '../hooks/useAppConfig'

const Context = createContext({} as any)

function AppProvider({ children }: any) {
    const { toggleMenu, setToggleMenu, handleToogleMenu } = useAppConfig()

    return (
        <Context.Provider
          value={{
            toggleMenu,
            setToggleMenu,
            handleToogleMenu
          }}
        >
          {children}
        </Context.Provider>
      );
}

export { Context, AppProvider };