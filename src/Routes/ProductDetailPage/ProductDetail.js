import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ProductDetail.css'
import { API_ENDPOINT } from '../../config'

const defaultState = {
    vendor: {}
}

export default function ProductDetail() {
    const [state, setState] = useState(defaultState);
    let { id } = useParams();

    const getVendorProduct = () => {
        fetch(`${API_ENDPOINT}/vendorinventoryitems/${id}`)
            .then(res => res.json())
            .then(vendor => {
                console.log({ vendor })
                setState({ vendor })
            })
    }

    useEffect(() => {
        getVendorProduct()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return (
        <div className="product-detail-container">
            <div className="product-detail-image">
                <img src="https://picsum.photos/660/442" alt="itemphoto" />
            </div>
            <div className="product-detail-item-name-container">

                <div className="product-detail-item-name">
                    <h5>
                        {state.vendor.item_name}
                    </h5>
                </div>

                <div className="product-detail-item-price-container">
                    <div className="product-detail-item-price tag">
                        <p>${state.vendor.item_price}</p>
                    </div>
                    <div className="product-detail-item-availability tag">
                        <p>Available: {state.vendor.item_count}</p>
                    </div>
                </div>
            </div>
            <div className="product-detail-item-description">
                <p>{state.vendor.item_description}</p>
            </div>
        </div>
    )
}