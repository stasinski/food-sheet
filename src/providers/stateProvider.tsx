import React, { useMemo, useState, useCallback } from "react";
import { Food } from "../types/Food";
import { useLocalStorage } from "../helpers/useLocalStorage";
import { LocalStorageKeys } from "../data/LocalStorageKeys";

type State = {
  searchValue: string;
  selectedFood?: Food;
};

interface StateProviderProps extends State {
  foodsList: Array<Food>;
  setGlobalState: (newState: Partial<State>) => void;
  addFood: (newFood: Food) => void;
  removeFood: (id: string) => void;
}

const stateContext = React.createContext<StateProviderProps | null>(null);

export const StateProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [localStorageFoodList, setLocalStorageFoodList] = useLocalStorage<
    Array<Food>
  >(LocalStorageKeys.FOODS_LIST, []);

  const [state, setState] = useState<State>({
    searchValue: "",
  });

  const setStateHelper = (newState: Partial<State>) => {
    setState((previousState) => ({
      ...previousState,
      ...newState,
    }));
  };

  const addFood = useCallback(
    (newFood: Food) => {
      setLocalStorageFoodList((prev) => [...prev, newFood]);
      setState((previousState) => ({
        ...previousState,
        selectedFood: undefined,
      }));
    },
    [setLocalStorageFoodList]
  );

  const removeFood = useCallback(
    (id: string) => {
      setLocalStorageFoodList((prev) => prev.filter((e) => e.id !== id));
      setState((previousState) => ({
        ...previousState,
        selectedFood: undefined,
      }));
    },
    [setLocalStorageFoodList]
  );

  const values = useMemo(
    (): StateProviderProps => ({
      ...state,
      foodsList: localStorageFoodList,
      addFood,
      removeFood,
      setGlobalState: setStateHelper,
    }),
    [state, localStorageFoodList, addFood, removeFood]
  );

  return (
    <stateContext.Provider value={values}>{children}</stateContext.Provider>
  );
};

export const useGlobalState = () => {
  const state = React.useContext(stateContext);

  if (state === null || state === undefined) {
    throw new Error("Wrong implementation of context");
  }

  return state;
};
