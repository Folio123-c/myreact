
import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link, useParams} from "react-router-dom";
import { fetchProduct } from "../features/SingleProduct";
import Navbar from "./navbar";
import ReviewComponent from "./RevieProduct";

export function SingleProductView() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { product, status, error } = useSelector((state) => state.products)
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        dispatch(fetchProduct(id))// Fetch the specific product based on the ID
    }, [dispatch, id], quantity);
    console.log("this is retrieved product", product);
    console.log("this is retrieved product status", status);


    return (
        <div>
            <Navbar />
            <div className="mt-1 decoration-0 p-0">
                {status === "loading" && (
                    <div className="bg-white text-black p-2 font-extrabold">Loading...</div>
                )}
                {status === "failed" && (
                    <div className="bg-red-500 text-tatans p-2 font-extrabold py-2 px-4 focus:outline-none focus:shadow-outline">
                        {error}
                    </div>
                )}
                {status === "succeeded" && (
                    <>
                        <h1 className="text-3xl text-center font-bold mb-4">Product Details</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="relative">
                                <img src={product.data.images[0]} alt={product.data.name} className="w-full rounded-lg" />
                            </div>
                            <div className="flex flex-col justify-center">
                                <h2 className="text-xl font-bold mb-2">{product.data.name}</h2>
                                <p className="text-base mb-4">{product.data.description}</p>
                                <p className="text-lg font-bold mb-4">Price: ${product.data.price}</p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex items-center">
                                        <label className="mr-2 text-base">Quantity:</label>
                                        <input
                                            type="number"
                                            className="border border-gray-300 px-2 py-1 rounded-lg w-16"
                                            min="1"
                                            value={quantity}
                                            onChange={(e) => {
                                                e.preventDefault();
                                                setQuantity(e.target.value);
                                            }}
                                        />
                                    </div>
                                    <div className="flex items-center">
                                        <Link to="/">
                                            <button className="bg-titans hover:bg-cyan-500 text-white font-bold px-4 py-2 rounded-lg">
                                                Add to Cart
                                            </button>
                                        </Link>
                                    </div>
                                < ReviewComponent pid={product.data.id}/>
                                </div>
                            </div>
                        </div>
                    </>
                )}


            </div>
        </div>
    );
}
