import React from "react";
import counterStore from "./counter";
export { default as counterStore } from "./counter";

export const rootStore = {
    counterStore,
};

const StoresContext = React.createContext(rootStore);

export default StoresContext;

export const useStores = () => React.useContext(StoresContext);
