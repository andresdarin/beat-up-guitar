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
    // We'll use a specific guitar for the header visualization (e.g., index 3 which is VAI/Orange, to be filtered to blue)
    const featuredGuitarIndex = 3;
    const currentGuitar = guitars.length > featuredGuitarIndex ? guitars[featuredGuitarIndex] : (guitars[0] || null);

    if (!currentGuitar) {
        return <div className="modern-header-loading">Loading...</div>;
    }

    return (
        <header className="brutalist-header">
            {/* Left Half - White */}
            <div className="header-left">
                <nav className="header-nav">
                    <a href="#" className="nav-item">GUITARS</a>
                    <a href="#" className="nav-item">BASS</a>
                    <a href="#" className="nav-item">AMPS</a>
                    <a href="#" className="nav-item">PRO AUDIO</a>
                </nav>

                <div className="header-content-left">
                    <h1 className="brand-title">THE<br/>STORE</h1>
                    <p className="brand-subtitle">Est. 2024</p>
                </div>
            </div>

            {/* Right Half - Black */}
            <div className="header-right">

                {/* Cart */}
                <div className="cart-container">
                    <button className="cart-btn">
                        CART ({cart.length})
                    </button>

                    <div className="cart-dropdown">
                         {isEmpty ? (
                            <p className="text-center" style={{ color: 'black' }}>Cart is empty</p>
                        ) : (
                            <>
                                <table className="w-100 table text-black">
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Qty</th>
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
                                                        alt="guitar"
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
                                <p className="text-end text-black">Total: <span className="fw-bold">${cartTotal}</span></p>
                            </>
                        )}
                         <button className="btn btn-dark w-100 mt-3 p-2" onClick={clearCart}>CLEAR CART</button>
                    </div>
                </div>

                <div className="header-content-right">
                    <h2 className="product-title">{currentGuitar.name}</h2>
                    <p className="product-price">${currentGuitar.price}</p>
                    <button
                        className="buy-now-btn"
                        onClick={() => handleAddToCart(currentGuitar)}
                    >
                        ADD TO CART
                    </button>
                </div>
            </div>

            {/* Center Image - Absolute Positioned */}
            <div className="header-image-container">
                <img
                    src={`/img/${currentGuitar.image}.jpg`}
                    alt={currentGuitar.name}
                    className="featured-guitar-image"
                />
            </div>
        </header>
    );
}
