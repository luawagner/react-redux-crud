import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type UserId = string;

export interface User {
    name: string,
    email: string,
    github: string
}

export interface userWithId extends User {
    id: UserId
}
const initialState: userWithId[] = [
    {
        id: "1",
        name: "Peter Doe",
        email: "peterdoe@gmail.com",
        github: "peterDoe",
      },
      {
        id: "2",
        name: "Lena Whitehouse",
        email: "lenaw@gmail.com",
        github: "lena Whitehouse",
      },
      {
        id: "3",
        name: "Phil Less",
        email: "philL@gmail.com",
        github: "Phil Less",
      },
    ];  

//Slice es un trocito de la store que guarda las acciones reducers y el estado
//que tienen que ver con, en este caso, users
export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        deleteUserById: (state, action: PayloadAction<UserId>) => {
            const id = action.payload;
            return state.filter((user) => user.id !== id)
        } //cambiamos el estado filtrando esos users que no tienen ese id en concreto
    }
})

export default usersSlice.reducer;
//además de los reducers también podemos exportar las acciones
export const { deleteUserById } = usersSlice.actions