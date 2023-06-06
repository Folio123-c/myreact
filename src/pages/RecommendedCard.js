// const ViewProduct = ({...props}) =>{
// console.log("this product props",props.product)
// 	return (
// 		<div>
//
// 			<div>{props.product.name}</div>
// 			<div> <img src={props.product.images[0]} alt="product"/></div>
// 			<div>{props.product.price}</div>
// 		</div>
// 	)
// }
// export default ViewProduct;
import React from 'react';
import { Link } from 'react-router-dom';

const ViewProduct = ({ product }) => {

    return (
        <div className="flex flex-col items-center justify-center py-8 min-w-min">
            <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
            <div className="w-64 h-64 rounded-md overflow-hidden shadow-lg">
                <Link to={`/products/${product.id}`} key={product.id}>
                    <img src={product.images[0]} alt="product" className="w-full h-full object-cover" />
                </Link>

            </div>
            <div className="mt-4 text-xl font-semibold">${product.price}</div>
        </div>
    );
};

export default ViewProduct;
