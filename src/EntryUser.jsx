import React, { useState } from 'react'
import { addCustomer } from './slice/userSlice';
import {useDispatch} from 'react-redux'

function EntryUser() {
    const [value, setValue] = useState("");
    const dispatch = useDispatch()
    // const [store, setStore] = useState([]);
    const handleSubmit = () => {
        // setStore((prev) => [...prev, value]);
        dispatch(addCustomer(value))
        setValue("");
    }
    return (
        <>
            <h1>Redux</h1>
            <input type='text' value={value} onChange={(e) => setValue(e.target.value)}></input>
            <button onClick={handleSubmit}>Addd</button>
        </>
       
    )
}

export default EntryUser