import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReviewProduct } from "../features/ReviewSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const ReviewComponent = ({ pid }) => {
    const [ratings, setRatings] = useState(0);
    const [feedback, setFeedback] = useState("");
    const dispatch = useDispatch();
    const { status, error } = useSelector((state) => state.review);

    const handleSubmit = () => {
        dispatch(ReviewProduct({ pid, feedback, ratings }));
    };

    return (
        <div className="p-4">
            <div className="flex items-center">
                <label className="mr-2">Rating:</label>
                {Array.from({ length: 5 }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => setRatings(index + 1)}
                        className={`border border-gray-300 px-4 py-2 rounded-md mr-2 focus:outline-none
      ${ratings >= index + 1 ? 'text-yellow-400' : 'text-gray-300'}
      hover:text-yellow-400`}
                    >
                        <FontAwesomeIcon icon={faStar} />
                    </button>
                ))}
            </div>

            <label className="block mb-2">Feedback:</label>
            <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="border border-gray-300 px-4 py-2 rounded-md mb-2"
            ></textarea>
            <button
                onClick={handleSubmit}
                disabled={status === "loading"}
                className="bg-titans text-white py-2 px-4 rounded-md disabled:opacity-50"
            >
                Submit Review
            </button>
            {status === "failed" && <div className="text-red-500">{error}</div>}
            {status === "succeeded" && <div className="text-green-600">Review Submitted successfully</div>}

        </div>
    );
};

export default ReviewComponent;
