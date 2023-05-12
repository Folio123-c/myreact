// import {Link} from "react-router-dom";
import{useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {ViewProduct} from "../features/productSlice";
import Productlists from "./ViewProduct";
import Navbar from "./navbar";

export function BuyerView() {
    const dispatch = useDispatch();
    // const status = useSelector(state => state.product.status);
    // const error = useSelector(state => state.product.Error);
    const {product,status,error}=useSelector(state=>state.product);

    useEffect(() => {
        dispatch(ViewProduct());
    }, [dispatch]);
    console.log('product:', product);
    return (<div>
            <Navbar />
            <div className="mt-1 decoration-0 p-0">

                <div className="flex flex-col items-center space-y-2 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
                    {status === 'loading.....' && (
                        <div className="bg-white text-black p-2 font-extrabold">Loading...</div>
                    )}
                    {status === 'failed' && (
                        <div className="bg-red-500 text-tatans p-2 font-extrabold py-2 px-4 focus:outline-none focus:shadow-outline">
                            {error}
                        </div>
                    )}
                    {/*{status === 'success' && (*/}
                    {/*    <div className="bg-red-500 text-white p-2 font-extrabold py-2 px-4 focus:outline-none focus:shadow-outline">*/}
                    {/*        Product retrieved*/}
                    {/*    </div>*/}
                    {/*)}*/}

                </div>
                <h1 className="text-3xl text-center font-bold mb-4">All Available Products</h1>

                {/*<div className="flex flex-col sm:flex-row space-x-2 justify-between ">*/}
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-1 w-screen">
                    {product ? (
                        product.data.map((product) => <Productlists product={product} key={product.id} />)
                    ) : (
                        <div className="text-center text-3xl font-bold mb-4">Loading products...</div>
                    )}
                </div>
            </div>
        </div>

    )
}