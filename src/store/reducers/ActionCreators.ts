import { userSlice } from './UserSlice'
import { IUser } from './../../models/IUser'
import axios from 'axios'
import { AppDispatch } from './../store'
export const fetchUsers = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.usersFetching())
        const res = await axios.get<IUser[]>(
            'https://jsonplaceholder.typicode.com/users'
        )
        dispatch(userSlice.actions.usersFetchingSuccess(res.data))
    } catch (e) {
        dispatch(userSlice.actions.usersFetchingError(e.message))
    }
}
