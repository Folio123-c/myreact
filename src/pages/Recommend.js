import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RecommendedProduct } from "../features/RecomendSlice";
import RecommendedCard from "./RecommendedCard";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

export function Recommend() {
    const dispatch = useDispatch();
    const { recommended, status, error } = useSelector((state) => state.recommended);
    const itemsPerPage = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const [open, setOpen] = useState(true); // Set the initial state of 'open' to true

    useEffect(() => {
        dispatch(RecommendedProduct())
            .then((response) => {
                console.log("recommended products:", response.payload);
            })
            .catch((error) => console.log("RecommendedProduct error:", error));
    }, [dispatch]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    if (status === "loading....." || recommended === null) {
        return (
            <div>
                <Backdrop
                    sx={{ color: '#7A89E9', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                    onClick={() => {}}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            </div>
        );
    }

    const totalItems = recommended.products.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = currentPage * itemsPerPage;
    const paginatedProducts = recommended.products.slice(startIdx, endIdx);

    const getRandomProduct = () => {
        const randomIndex = Math.floor(Math.random() * recommended.products.length);
        return recommended.products[randomIndex];
    };

    const randomProduct = getRandomProduct();
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div>
            <div className="mt-1 decoration-0 p-0">
                <div className="flex flex-col items-center space-y-2 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
                    {status === "loading......." && (
                        <div className="bg-white text-black p-2 font-extrabold">
                            <div>
                                Loading...
                            {/*    <Button onChange={handleOpen}>Show backdrop</Button>*/}
                            {/*    <Backdrop*/}
                            {/*        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}*/}
                            {/*        open={open}*/}
                            {/*        onClick={handleClose}*/}
                            {/*    >*/}
                            {/*        <CircularProgress color="inherit" />*/}
                            {/*    </Backdrop>*/}
                            </div>
                        </div>
                    )}
                    {status === "failed" && (
                        <div className="bg-red-500 text-tatans p-2 font-extrabold py-2 px-4 focus:outline-none focus:shadow-outline">
                            {error}
                        </div>
                    )}
                </div>
                <h1 className="text-3xl text-center font-bold mb-4">
                    Recommended Products
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-1 w-screen">
                    {randomProduct && <RecommendedCard product={randomProduct} key={randomProduct.id} />}
                    {paginatedProducts.length > 0 ? (
                        paginatedProducts.map((recommended) => (
                            <RecommendedCard product={recommended} key={recommended.id} />
                        ))
                    ) : (
                        <div className="text-center text-3xl font-bold mb-4">
                            No products found.
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
