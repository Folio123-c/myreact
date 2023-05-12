import { useState } from 'react';
import { useDispatch} from 'react-redux';
import {createCategory} from "../features/productSlice";
import Navbar from "./navbar";

function CategoryForm() {
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(createCategory({ name }))
            .then(() => {})
            .catch((error) => console.log("Category Create error:", error));
    }

    return (
        <div>
        <Navbar/>

        <div className="mt-1 decoration-0 p-8">

                <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto">

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="category">
                            Product Category
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="category"
                            type="text"
                            placeholder="Write your category name"
                            value={name}
                            required={true}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className="bg-titans hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Add category
                        </button>
                    </div>

                </form>

        </div>

        </div>
    );
}

export default CategoryForm;
