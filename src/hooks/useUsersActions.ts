import { UserId, deleteUserById } from '../store/users/slice'
import { useAppDispatch } from './store'


//es una buena práctica tener los dispatch en un custom hook.
//y llamarlos desde los componentes que lo requieran
export const useUsersActions = () => {

    const dispatch = useAppDispatch()
    const removeUser = (id: UserId) => {
      dispatch(deleteUserById(id))
    }


    return { removeUser }
}