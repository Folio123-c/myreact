import {useDispatch} from "react-redux";
import { ViewCategory} from "../features/CategorySlice";

export function Viewcategory() {
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(ViewCategory())
            .then((response) => {
                console.log("   All categories:", response);
            })
            .catch((error) => console.log("Category Create error:", error));
    }

    return (
        <div className="flex items-center justify-center space-x-2">
            <div className="justify-center items-center">
                    <div className="">
                        <button onClick={handleSubmit} className="bg-titans hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit">
                            View All categories
                        </button>

                    </div>
                </div>

        </div>
    )
}