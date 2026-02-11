import React from 'react';
import './Shop.css';

export default function Shop({ guitars, handleAddToCart }) {
    return (
        <section className="shop-section">
            <div className="container-shop">
                <h2 className="shop-title">LATEST ARRIVALS</h2>

                <div className="product-grid">
                    {guitars.map(guitar => (
                        <div key={guitar.id} className="product-card">
                            <div className="product-image-wrapper">
                                <img
                                    src={`/img/${guitar.image}.jpg`}
                                    alt={guitar.name}
                                    className="product-image"
                                />
                            </div>
                            <div className="product-details">
                                <h3 className="product-name">{guitar.name}</h3>
                                <p className="product-price">${guitar.price}</p>
                            </div>
                            <button
                                className="add-to-cart-circle"
                                onClick={() => handleAddToCart(guitar)}
                                title="Add to Cart"
                            >
                                +
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
