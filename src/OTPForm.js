import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { verify } from './features/loginSlice';

function OTPForm() {
    const [otp, setOTP] = useState('');
    const dispatch = useDispatch();
    const email = localStorage.getItem('email');

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(verify({ email, otp }));
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto">
            <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="otp">
                    Enter OTP
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="otp"
                    type="text"
                    placeholder="Enter your OTP"
                    value={otp}
                    onChange={(event) => setOTP(event.target.value)}
                />
            </div>
            <div className="flex items-center justify-center">
                <button
                    className="bg-titans hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Verify OTP
                </button>
            </div>
        </form>
    );
}

export default OTPForm;
