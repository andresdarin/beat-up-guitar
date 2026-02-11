import React from 'react';
import './Categories.css';

export default function Categories() {
    return (
        <section className="categories-section">
            <div className="bento-grid">

                {/* Electric Guitars - Large Block */}
                <div className="cat-item electric">
                    <div className="cat-overlay"></div>
                    <img src="/img/guitarra_05.jpg" alt="Electric Guitars" className="cat-bg-img" />
                    <h2 className="cat-title">ELECTRIC<br/>GUITARS</h2>
                    <a href="#" className="cat-link">SHOP NOW →</a>
                </div>

                {/* Bass - Medium Block */}
                <div className="cat-item bass">
                     <div className="cat-overlay"></div>
                    <img src="/img/guitarra_09.jpg" alt="Bass" className="cat-bg-img" />
                    <h2 className="cat-title">BASS</h2>
                    <a href="#" className="cat-link">SHOP NOW →</a>
                </div>

                {/* Amps - Small Block (Text only/Graphic) */}
                <div className="cat-item amps">
                    <h2 className="cat-title">AMPS</h2>
                    <div className="cat-graphic-circle"></div>
                    <a href="#" className="cat-link">SHOP NOW →</a>
                </div>

                {/* Pro Audio - Medium Block (Inverted) */}
                <div className="cat-item pro-audio">
                    <h2 className="cat-title text-black">PRO<br/>AUDIO</h2>
                    <a href="#" className="cat-link text-black">SHOP NOW →</a>
                </div>

            </div>
        </section>
    );
}
