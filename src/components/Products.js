import React from 'react';

function Products({ products }) {
    return (
        <section className="products">
            <h3>All Products</h3>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <img src={product.image} alt={product.name} width="50" height="50" />
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Products;