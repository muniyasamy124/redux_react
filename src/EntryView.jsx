import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteHandler } from './slice/userSlice';

function EntryView() {
    const customer = useSelector((state) => state.customer);
    const dispatch = useDispatch();

    const handleDelete = (index) => {
        dispatch(deleteHandler(index));
    };

    return (
        <div className="pt-10 pb-20">
            <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">Customer List</h2>
                <ul className="space-y-4">
                    {customer.map((data, index) => (
                        <li key={index} className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg">
                            <span className="text-gray-700">{data}</span>
                            <button
                                onClick={() => handleDelete(index)}
                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default EntryView;
