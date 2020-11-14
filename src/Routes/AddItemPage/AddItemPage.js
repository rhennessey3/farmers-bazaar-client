import React, {} from 'react'
import './AddItemPage.css'
import  VendorContext  from '../../context/VendorContext'


class AddItemPage extends React.Component {
    constructor() {
        super()
        this.state = {
            formComplete: false,
            error: null,
        }
    }
   
    onSubmit = postVendor => async (e) => {
        await postVendor(e);
        this.setState = {
            formComplete: true,
        }
        this.props.history.push('/inventory')
    }

    render() {

    
    return (

        <VendorContext.Consumer>

            {value =>
                <div className="form-container">
                    
                    <form className="forms" onSubmit={this.onSubmit(value.postVendor)}>
                    
                        <div className="form">
                            <label className="vendorName--label" htmlFor="vendorName">Item img</label>
                            <div>
                                <input
                                    id="img"
                                    name="img"
                                    className="Item img--input"
                                    type="text"
                                    maxLength="255"
                                    required
                                />
                            </div>
                        </div>
                        <div className="form">
                            <label className="vendorName--label" htmlFor="vendorName">Item Name</label>
                            <div>
                                <input
                                    id="name"
                                    name="name"
                                    className="Item Name--input"
                                    type="text"
                                    maxLength="255"
                                    required
                                />
                            </div>
                        </div>
                        <div className="form">
                            <label className="description" htmlFor="description">Item Description</label>
                            <div>
                                <input
                                    id="description"
                                    name="description"
                                    className="description"
                                    type="text"
                                    maxLength="255"
                                    required
                                />
                            </div>
                        </div>
                        <div className="form">
                            <label className="vendorDescription--label" htmlFor="vendorPrice">Item price</label>
                            <div>
                                <input
                                    id="itemPrice"
                                    name="itemPrice"
                                    className="vendorDescription--itemprice"
                                    type="text"
                                    maxLength="255"
                                    required
                                />
                            </div>
                        </div>
                        <div className="form">
                            <label className="vendorDescription--label" htmlFor="vendorItemCount">Item count</label>
                            <div>
                                <input
                                    id="itemCount"
                                    name="itemCount"
                                    className="vendorDescription--itemcount"
                                    type="text"
                                    maxLength="255"
                                    required
                                />
                            </div>
                        </div>  
                        <div className="form-button" >
                            <button type="submit">Enter new vendor Item</button>
                        </div>

                        <div>
                            <p>Check out your inventory <a href="/inventory" alt="">here</a></p>
                        </div>

                    </form>
                </div>}

        </VendorContext.Consumer>
    )}
}

export default AddItemPage