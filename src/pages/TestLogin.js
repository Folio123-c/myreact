import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import Navbar from "./navbar";
import Logo from "../assets/Logo.svg";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [popupType, setPopupType] = useState('');
    const [studentRegNumber, setStudentRegNumber] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const openPopup = (type) => {
        setShowPopup(true);
        setPopupType(type);
    };

    const closePopup = () => {
        setShowPopup(false);
        setPopupType('');
    };

    return (
        <div>
        <Navbar/>
        <div className="bg-gradient-to-r  from-blue-500 to-blue-900 min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full mx-auto p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6 relative">
                    <img src={Logo}/>
                </h2>
                <form onSubmit={handleSubmit} className="relative">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-500"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-500"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? (
                                    <FiEyeOff size={20} />
                                ) : (
                                    <FiEye size={20} />
                                )}
                            </button>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition-colors"
                    >
                        Sign In
                    </button>
                    <div className="mt-4 text-center">
                        <a
                            href="#"
                            className="text-indigo-500 hover:underline transition-colors"
                        >
                            Forgot password?
                        </a>
                    </div>
                    <div className="mt-8 text-center">
                        <a
                            href="#"
                            className="text-indigo-500 hover:underline transition-colors"
                            onClick={() => openPopup('parent')}
                        >
                            Parent Login
                        </a>
                        {' | '}
                        <a
                            href="#"
                            className="text-indigo-500 hover:underline transition-colors"
                            onClick={() => openPopup('student')}
                        >
                            Student Login
                        </a>
                        {' | '}
                    </div>
                </form>

                {showPopup && (
                    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
                        <div className="max-w-md w-full mx-auto p-8 bg-white rounded-lg shadow-lg">
                            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                                {popupType === 'parent'
                                    ? 'Parent Login'
                                    : popupType === 'student'
                                        ? 'Student Login'
                                        : 'User Login'}
                            </h2>
                            {popupType === 'parent' && (
                                <form onSubmit={handleSubmit} className="relative">
                                    <div className="mb-4">
                                        <label htmlFor="email" className="block text-gray-700">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-500"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition-colors"
                                    >
                                        Sign In
                                    </button>
                                    <div className="mt-4 text-center">
                                    </div>
                                    <div className="mt-8 text-center">
                                        <a
                                            href="#"
                                            className="text-indigo-500 hover:underline transition-colors"
                                            onClick={closePopup}
                                        >
                                            Go back
                                        </a>
                                    </div>
                                </form>
                            )}

                            {popupType === 'student' && (
                                <form onSubmit={handleSubmit} className="relative">
                                    <div className="mb-4">
                                        <label htmlFor="regNumber" className="block text-gray-700">
                                            Student Registration Number
                                        </label>
                                        <input
                                            type="text"
                                            id="regNumber"
                                            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-500"
                                            required
                                            value={studentRegNumber}
                                            onChange={(e) => setStudentRegNumber(e.target.value)}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition-colors"
                                    >
                                        Sign In
                                    </button>
                                    <div className="mt-4 text-center">
                                    </div>
                                    <div className="mt-8 text-center">
                                        <a
                                            href="#"
                                            className="text-indigo- 500 hover:underline transition-colors"
                                            onClick={closePopup}
                                        >
                                            Go back
                                        </a>
                                    </div>
                                </form>
                            )}

                            {popupType === 'user' && (
                                <form onSubmit={handleSubmit} className="relative">
                                    <div className="mb-4">
                                        <label htmlFor="email" className="block text-gray-700">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-500"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        1
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                )}

                <div className="absolute top-0 right-0 mt-4 mr-4">
        </div>
      </div>
    </div>
            </div>
  );
};

export default LoginPage;

