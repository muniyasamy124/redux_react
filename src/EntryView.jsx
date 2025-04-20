import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteHandler } from './slice/userSlice';

function EntryView() {
    const customer = useSelector((state) => state.customer);
    const dispatch = useDispatch();
    const handleDelete = (index) => {
        dispatch(deleteHandler(index))
    }
    return (
        <ul>
            {customer.map((data, index) => (
                <>
                    <li key={index}>{data}</li><button onClick={() => handleDelete(index)}>delete</button>
                </>
            ))}
        </ul>
    );
}

export default EntryView;
