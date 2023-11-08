import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './users/slice'

//leemos la store, devuelve una función para ir a la siguiente
//y devuelve una función para tener la acción que le llegó
const persistenceLocalStorageMiddleware = (store) => (next) => (action => {
    next(action);
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})
//podemos hacer cosas antes de que se actualice el estado y después

export const store = configureStore( {
    reducer: {
        users: usersReducer
    },
    middleware: [persistenceLocalStorageMiddleware]
}); //le pasamos un array con todos los middlewares que queremos usar

export type RootState = ReturnType<typeof store.getState >
export type AppDispatch = typeof store.dispatch