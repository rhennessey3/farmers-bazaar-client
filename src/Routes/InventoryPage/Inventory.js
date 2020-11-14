import React, { } from 'react'
import ProductItem from '../../components/ProductItem/ProductItem'
import './inventory.css'
import VendorContext from '../../context/VendorContext'
import Search from '../../components/SearchBar/search'

export default function Inventory() {
  return (
    <>
      <Search />
      <div className='inventory-page-container'>
        <VendorContext.Consumer>
          {value =>
            value.vendors.map(vendor => (
              <ProductItem key={vendor.id} vendor={vendor} />
            ))
          }
        </VendorContext.Consumer>
      </div>
    </>
  );
}

// export default function Dealerlist() {
//     return (
//         <DealerContext.Consumer>
//             {value => {
//                 return (
//                     <section className="dealer-list-container">
//                         <div className="dealer-list-headings">
//                             <div className="dealer-list-sort"><p> Master Dealer List</p></div>
//                         </div>
//                         {value.dealers.map(dealer =>
//                             <Link key={dealer.id}
//                                 to={"/dealers/" + dealer.id}>

//                                 <div className="dealer-list-item-container">
//                                     <div className="dealer-list-name"><h3>{dealer.name}</h3></div>
//                                     <div className="dealer-list-description "><p>{dealer.description}</p></div>
//                                     <div className="dealer-list-streetaddress-1"><h4>{dealer.streetaddress}</h4></div>
//                                     <div className="dealer-list-streetaddress-2"><h4>{dealer.city}, {dealer.state} {dealer.zip}</h4></div>
//                                     <div clasName="dealer-list-phone"><h5> CALL {dealer.phone}</h5></div>
//                                 </div>
//                             </Link>
//                         )}
//                     </section>
//                 )
//             }}
//         </DealerContext.Consumer>
//     )
// }
