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

const ViewSingleUsers = ({ allusers }) => {

    return (
        <div className="flex flex-col items-center justify-center py-8 min-w-min">
            <h2 className="text-3xl font-bold mb-4">{allusers.fullname}</h2>
            <div className="w-64 h-64 rounded-md overflow-hidden shadow-lg">
                <Link to={`/products/${allusers.id}`} key={allusers.id}>
                    <img src={allusers.fullname} alt="product" className="w-full h-full object-cover" />
                </Link>

            </div>
            <div className="mt-4 text-xl font-semibold">${allusers.email}</div>
        </div>
    );
};

export default ViewSingleUsers;
