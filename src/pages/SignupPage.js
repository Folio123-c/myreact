import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Signup } from '../features/SignupSlice';
import Navbar from './navbar';

function SignupForm() {
    const [fullname, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch();
    const { status, error } = useSelector((state) => state.signup);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            console.log('Passwords do not match');
            return;
        }

        dispatch(
            Signup({
                fullname,
                email,
                password,
                confirmPassword,
            })
        )
            .then(() => {})
            .catch((error) => console.log('Registration error:', error));
    };

    return (
        <div>
            <Navbar />
            <div className="mt-1 decoration-0 p-8">
                {status === 'loading' && (
                    <div className="bg-white text-black p-2 font-extrabold">Loading...</div>
                )}
                {status === 'failed' && (
                    <div className="bg-red-500 text-tatans p-2 font-extrabold py-2 px-4 focus:outline-none focus:shadow-outline w-fit">
                        {error}
                    </div>
                )}
                {status === 'succeeded' && (
                    <div className="bg-red-500 text-tatans p-2 font-extrabold py-2 px-4 focus:outline-none focus:shadow-outline w-fit">
                        Registration successful!
                    </div>
                )}
                <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                    <div className="my-4">
                        <label className="block mb-2 font-bold" htmlFor="fullName">
                            Full Name:
                        </label>
                        <input
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            type="text"
                            id="fullName"
                            value={fullname}
                            onChange={(event) => setFullName(event.target.value)}
                        />
                    </div>
                    <div className="my-4">
                        <label className="block mb-2 font-bold" htmlFor="email">
                            Email:
                        </label>
                        <input
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            type="email"
                            id="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="my-4">
                        <label className="block mb-2 font-bold" htmlFor="password">
                            Password:
                        </label>
                        <input
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            type="password"
                            id="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <div className="my-4">
                        <label className="block mb-2 font-bold" htmlFor="confirmPassword">
                            Confirm Password:
                        </label>
                        <input
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(event) => setConfirmPassword(event.target.value)}
                        />
                    </div>
                    <button
                        className="bg-titans hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignupForm;
