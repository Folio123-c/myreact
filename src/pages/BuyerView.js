import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ViewProduct } from "../features/productSlice";
import ProductLists from "./ViewProduct";
import Navbar from "./navbar";
import { useNavigate, useLocation } from "react-router-dom";

export function BuyerView() {
    const dispatch = useDispatch();
    const { product, status, error, currentPage, totalPages } = useSelector(
        (state) => state.product
    );
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const page = Number(queryParams.get("page")) || 1; // Get the "page" query parameter, default to 1 if not present

    useEffect(() => {
        dispatch(ViewProduct(page))
            .then((response) => {
                console.log("products current page:", response.payload);
            })
            .catch((error) => console.log("ViewProduct error:", error));
    }, [dispatch, page]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            const nextPage = currentPage + 1;
            navigate(`?page=${nextPage}`);
            dispatch(ViewProduct(nextPage))
                .then((response) => {
                    console.log("products current page:", response.payload);
                })
                .catch((error) => console.log("ViewProduct error:", error));
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            const previousPage = currentPage - 1;
            navigate(`?page=${previousPage}`);
            dispatch(ViewProduct(previousPage))
                .then((response) => {
                    console.log("products current page:", response.payload);
                })
                .catch((error) => console.log("ViewProduct error:", error));
        }
    };

    return (
        <div>
            <Navbar />
            <div className="mt-1 decoration-0 p-0">
                <div className="flex flex-col items-center space-y-2 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
                    {status === "loading....." && (
                        <div className="bg-white text-black p-2 font-extrabold">
                            Loading...
                        </div>
                    )}
                    {status === "failed" && (
                        <div className="bg-red-500 text-tatans p-2 font-extrabold py-2 px-4 focus:outline-none focus:shadow-outline">
                            {error}
                        </div>
                    )}
                </div>
                <h1 className="text-3xl text-center font-bold mb-4">
                    All Available Products
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-1 w-screen">
                    {product ? (
                        product.data.map((product) => (
                            <ProductLists product={product} key={product.id} />
                        ))
                    ) : (
                        <div className="text-center text-3xl font-bold mb-4">
                            Loading products...
                        </div>
                    )}
                </div>
                <div className="flex justify-center mt-4">
                    {currentPage > 1 && (
                        <button
                            className="bg-titans hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded mr-2"
                            onClick={handlePreviousPage}
                        >
                            Previous Page
                        </button>
                    )}
                    {currentPage < totalPages && (
                        <button
                            className="bg-titans hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded"
                            onClick={handleNextPage}
                        >
                            Next Page
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
