import React from 'react'

const CartItem = ({item}) => {
    function centsToDollars (amt) {
        return '$' + amt / 100
    }

    return (
        <div className="collection-item">
            <div className="row">
                <div className="col s8">{item.product.name}</div>
                <div className="col s2">{centsToDollars(item.product.priceInCents)}</div>
                <div className="col s2">{item.quantity}</div>
            </div>
        </div>
    )
}

export default CartItem