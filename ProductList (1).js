import React from 'react';
import Product from './Product';
import './ProductsList.css';

const products = [
    {
        id: 1,
        name: "Product 1",
        description: "This is a great product.",
        price: 19.99,
        image: "https://via.placeholder.com/150"
    },
    // Add more products here
];

function ProductsList() {
    return (
        <div className="products-list">
            {products.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductsList;
