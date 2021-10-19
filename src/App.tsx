import React from 'react'
import './App.css'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { fetchUsers } from './store/reducers/ActionCreators'

function App() {
    const dispatch = useAppDispatch()
    const { users, isLoading, error } = useAppSelector(
        (state) => state.userReducer
    )

    React.useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    return (
        <div className='App'>
            {isLoading && <div>loading...</div>}
            {error && <div>error!!</div>}
            {!isLoading && !error && (
                <div>{JSON.stringify(users, null, 2)}</div>
            )}
        </div>
    )
}

export default App
