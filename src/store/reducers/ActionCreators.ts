import { userSlice } from './UserSlice'
import { IUser } from './../../models/IUser'
import axios from 'axios'
import { AppDispatch } from './../store'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkApi) => {
        try {
            const res = await axios.get<IUser[]>(
                'https://jsonplaceholder.typicode.com/users'
            )
            return res.data
        } catch (error) {
            return thunkApi.rejectWithValue('Error loading data')
        }
    }
)
