import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {createProduct} from '../features/productSlice';
import { ViewCategory} from "../features/CategorySlice";
import { CloudinaryContext, Image} from 'cloudinary-react';
import { useEffect } from 'react';
// import { Cloudinary } from 'cloudinary-core';
import Navbar from './navbar';

function AddProductForm() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [categoryId, setCategoryId] = useState('');
    const [description, setDescription] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [images, setImages] = useState([]);
    const [categoryIds, setCategoryIds] = useState([]);

    const dispatch = useDispatch();
    const { status, error } = useSelector(state => state.product);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!categoryId) {
            console.log('Please select a category ID');
            return;
        }

        const imageUrls = images.map((image) => `https://res.cloudinary.com/dgcmsqndb/image/upload/${image.name}`);

        dispatch(
            createProduct({
                name,
                price,
                quantity,
                categoryId,
                description,
                expiryDate,
                images: imageUrls,
            })
        )
            .then(() => {})
            .catch((error) => console.log('Product Create error:', error));
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'gwkladqc');

        // Upload image to Cloudinary
        fetch('https://api.cloudinary.com/v1_1/dgcmsqndb/image/upload', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                // Update the images array with the public ID of the uploaded image
                setImages((prevImages) => [...prevImages, { name: data.public_id }]);
            })
            .catch((error) => {
                console.error('Error uploading image:', error);
            });
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await dispatch(ViewCategory());
                setCategoryIds(response.payload.data); // Assuming the response contains an array of category objects
            } catch (error) {
                console.log("Category Create error:", error);
            }
        };

        fetchData();
    }, [dispatch]);


    return (
        <div>
            <Navbar />
            <div className="mt-1 decoration-0 p-8">
                {status === 'loading.....' && (
                    <div className="bg-white text-black p-2 font-extrabold">Loading...</div>
                )}
                {status === 'failed' && (
                    <div className="bg-red-500 text-tatans p-2 font-extrabold py-2 px-4 focus:outline-none focus:shadow-outline w-fit">
                        {error}
                    </div>
                )}
                {status === 'success' && (
                    <div className="bg-red-500 text-tatans p-2 font-extrabold py-2 px-4 focus:outline-none focus:shadow-outline w-fit">
                        Product created successfully!
                    </div>
                )}
                <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                    <div className="my-4">
                        <label className="block mb-2 font-bold" htmlFor="name">
                            Name:
                        </label>
                        <input
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            type="text"
                            id="name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>
                    <div className="my-4">
                        <label className="block mb-2 font-bold" htmlFor="price">
                            Price:
                        </label>
                        <input
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            type="number"
                            id="price"
                            value={price}
                            onChange={(event)=> setPrice(event.target.value)}
                        />
                    </div>
                    <div className="my-4">
                        <label className="block mb-2 font-bold" htmlFor="quantity">
                            Quantity:
                        </label>
                        <input
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            type="number"
                            id="quantity"
                            value={quantity}
                            onChange={(event) => setQuantity(event.target.value)}
                        />
                    </div>
                    <div className="my-4">
                        <label className="block mb-2 font-bold" htmlFor="categoryId">
                            Category ID:
                        </label>
                        <select
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            id="categoryId"
                            value={categoryId}
                            onChange={(event) => setCategoryId(event.target.value)}
                            // onClick={handleViewCategory}
                        >
                            <option value="">Select a category ID</option>
                            {Array.isArray(categoryIds) && // Check if categoryIds is an array
                                categoryIds.map((category) => ( // Iterate over the category objects
                                    <option key={category.id} value={category.id}>
                                        {category.id}
                                    </option>
                                ))}
                        </select>
                    </div>
                    <div className="my-4">
                        <label className="block mb-2 font-bold" htmlFor="description">
                            Description:
                        </label>
                        <textarea
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            id="description"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                        />
                    </div>
                    <div className="my-4">
                        <label className="block mb-2 font-bold" htmlFor="expiryDate">
                            Expiry Date:
                        </label>
                        <input
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            type="date"
                            id="expiryDate"
                            value={expiryDate}
                            onChange={(event) => setExpiryDate(event.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            type="file"
                            id="images"
                            onChange={handleImageUpload}
                        />
                        {/* Render uploaded images */}
                        <CloudinaryContext cloudName="dgcmsqndb">
                            {images.map((uploadedImage, index) => (
                                <div key={index}>
                                    <Image
                                        cloudName="dgcmsqndb"
                                        publicId={uploadedImage.name}
                                        transformation={{ width: 150, height: 150, crop: 'fill' }}
                                        secure="true"
                                    />
                                </div>
                            ))}
                        </CloudinaryContext>
                    </div>
                    <button
                        className="bg-titans hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Add Product
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddProductForm;
