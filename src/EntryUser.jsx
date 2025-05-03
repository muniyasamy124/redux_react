import React, { useState } from 'react';
import { addCustomer } from './slice/userSlice';
import { useDispatch } from 'react-redux';

function EntryUser() {
    const [value, setValue] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = () => {
        if (value.trim() === "") return;
        dispatch(addCustomer(value));
        setValue("");
    };

    return (
        <div className="flex items-center justify-center">
            <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-md text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">Redux</h1>
                <div className="flex gap-2 justify-center">
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className="px-4 py-2 border rounded-lg w-2/3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter name"
                    />
                    <button
                        onClick={handleSubmit}
                        className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EntryUser;
