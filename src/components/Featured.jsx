import React from 'react';
import './Featured.css';

export default function Featured() {
    return (
        <section className="featured-section">
            <div className="featured-content">
                <h2 className="featured-title">LOUD IS<br/>BETTER</h2>
                <p className="featured-subtitle">Experience the power of the new Marshall Stack series.</p>
                <button className="featured-btn">EXPLORE AMPS</button>
            </div>

            {/* Artistic smoke/fog overlay */}
            <div className="smoke-overlay"></div>
        </section>
    );
}
