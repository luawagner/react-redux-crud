import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store";


/*En ListOfUsers useSelector desconoce su estado, para evitar tiparlo todo el tiempo
creamos este hook, en donde asignamos useSelector a la constante useAppSelector y le indicamos
de qué tipo es, es de tipo RootState, es decir, el estado de los usuarios */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;