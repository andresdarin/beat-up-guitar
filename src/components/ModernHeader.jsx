import { useState, useEffect } from 'react';
import './ModernHeader.css';

export default function ModernHeader({
    cart,
    handleRemoveFromCart,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    clearCart,
    isEmpty,
    cartTotal,
    guitars,
    handleAddToCart
}) {
    const [activeGuitarIndex, setActiveGuitarIndex] = useState(0);

    // Ensure guitars are loaded. If not, don't crash.
    useEffect(() => {
        if (guitars.length > 0 && activeGuitarIndex >= guitars.length) {
             setActiveGuitarIndex(0);
        }
    }, [guitars, activeGuitarIndex]);

    const currentGuitar = guitars.length > 0 ? guitars[activeGuitarIndex] : null;

    const nextGuitar = () => {
        if (guitars.length === 0) return;
        setActiveGuitarIndex((prev) => (prev + 1) % guitars.length);
    };

    const prevGuitar = () => {
        if (guitars.length === 0) return;
        setActiveGuitarIndex((prev) => (prev - 1 + guitars.length) % guitars.length);
    };

    if (!currentGuitar) {
        return <div className="modern-header" style={{ justifyContent: 'center', alignItems: 'center', color: 'white', backgroundColor: 'black' }}>Loading...</div>;
    }

    return (
        <header className="modern-header">
            {/* Left Half - White */}
            <div className="left-half">
                <nav>
                    <ul className="nav-links">
                        <li><a href="#">Guitars</a></li>
                        <li><a href="#">Amps</a></li>
                        <li><a href="#">Sets</a></li>
                    </ul>
                </nav>

                <div className="slider-control">
                    <button className="slider-arrow" onClick={prevGuitar}>▲</button>
                    <div className="slider-number">
                        {String(activeGuitarIndex + 1).padStart(2, '0')}
                    </div>
                    <button className="slider-arrow" onClick={nextGuitar}>▼</button>
                </div>
            </div>

            {/* Right Half - Black */}
            <div className="right-half">

                {/* Cart Icon & Dropdown - Positioned Top Right */}
                <div className="cart-container">
                    <button className="cart-icon-btn">
                        <img src="/img/carrito.png" alt="Cart" className="cart-icon-img" />
                        <span style={{ color: 'white', marginLeft: '5px' }}>CART ({cart.length})</span>
                    </button>

                    <div className="cart-dropdown">
                         {isEmpty ? (
                            <p className="text-center" style={{ color: 'black' }}>El carrito esta vacio</p>
                        ) : (
                            <>
                                <table className="w-100 table text-black">
                                    <thead>
                                        <tr>
                                            <th>Imagen</th>
                                            <th>Nombre</th>
                                            <th>Precio</th>
                                            <th>Cantidad</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody style={{ color: 'black' }}>
                                        {cart.map(item => (
                                            <tr key={item.id}>
                                                <td>
                                                    <img
                                                        className="img-fluid"
                                                        src={`/img/${item.image}.jpg`}
                                                        alt="imagen guitarra"
                                                        style={{ width: '50px' }}
                                                    />
                                                </td>
                                                <td>{item.name}</td>
                                                <td className="fw-bold">
                                                    ${item.price}
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <button
                                                            type="button"
                                                            className="btn btn-dark btn-sm"
                                                            onClick={() => handleDecreaseQuantity(item.id)}
                                                        >
                                                            -
                                                        </button>
                                                            {item.quantity}
                                                        <button
                                                            type="button"
                                                            className="btn btn-dark btn-sm"
                                                            onClick={() => handleIncreaseQuantity(item.id)}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </td>
                                                <td>
                                                    <button
                                                        className="btn btn-danger btn-sm"
                                                        type="button"
                                                        onClick={() => handleRemoveFromCart(item.id)}
                                                    >
                                                        X
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <p className="text-end text-black">Total pagar: <span className="fw-bold">${cartTotal}</span></p>
                            </>
                        )}
                         <button className="btn btn-dark w-100 mt-3 p-2" onClick={clearCart}>Vaciar Carrito</button>
                    </div>
                </div>

                <div style={{ position: 'relative', zIndex: 5 }}>
                    <h1 className="guitar-title">{currentGuitar.name}</h1>
                    <h2 className="guitar-subtitle">THE LEGEND</h2>
                    <p className="guitar-description">{currentGuitar.description}</p>
                    <div className="price-tag">${currentGuitar.price}</div>
                    <button
                        className="buy-btn"
                        onClick={() => handleAddToCart(currentGuitar)}
                    >
                        BUY NOW
                    </button>
                </div>

                <div className="social-links">
                    <a href="#" className="social-link">FB</a>
                    <a href="#" className="social-link">IG</a>
                    <a href="#" className="social-link">TW</a>
                </div>
            </div>

            {/* Center Image */}
            <div className="center-image-container">
                <img
                    src={`/img/${currentGuitar.image}.jpg`}
                    alt={currentGuitar.name}
                    className="center-image"
                />
            </div>
        </header>
    );
}
