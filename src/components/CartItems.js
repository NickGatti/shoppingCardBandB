import React from 'react'
import CartItem from './CartItem'

const CartItems = ({items}) => {

  let itemList = items.map( (item, index) => <CartItem key={index} item={item} /> )

  let itemsTotal  = items.reduce( (acc, currVal) => {
    return acc + (currVal.quantity * currVal.product.priceInCents / 100)
  }, 0 )

  return (
      <div className="container">
        <h1>Items</h1>
        <div className="collection">
          <div className="collection-item row grey lighten-3">
            <div className="col s8">Product</div>
            <div className="col s2">Price</div>
            <div className="col s2">Quantity</div>
          </div>
          {itemList}
        </div>
        <p>Total: ${itemsTotal}</p>
      </div>
  )
}

export default CartItems