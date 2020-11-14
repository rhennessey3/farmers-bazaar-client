import React from "react";
import "./ProductItem.css";
import { Link } from 'react-router-dom'

export default function ProductItem(props) {
    return (
        <>
            <Link to={"/inventory/details/" + props.vendor.id}>
                <div className="product-item-container">
                    <div className="product-item-photo">
                        <img src="https://picsum.photos/120/120" alt="food" />
                    </div>
                    <div className="product-item-name">
                        <h5>{props.vendor.item_name}</h5>
                    </div>

                    <div className="product-item-price">
                        <p>{props.vendor.item_price}</p>
                    </div>
                    <div className="product-item-available">
                        <p>{props.vendor.item_count}</p>
                    </div>
                </div>
            </Link>
        </>
    );
}
