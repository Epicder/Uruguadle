import React from 'react';
import './css/popup.css';

export default function Popup({ message }) {
    if (!message) return null;

    return (
        <div className="popup-backdrop">
            <div className="popup">
                <p>{message}</p>
            </div>
        </div>
    );
}