import React, { Component } from 'react'
import { Row, Input, Button } from 'react-materialize'

class AddItem extends Component {
    constructor() {
        super()
        this.state = {
            productId: 0,
            quantity: 0
        }
    }

    handleClick = () => {
        let theProduct = this.props.products.filter( product => product.id == this.state.productId )[0]
        this.props.addItemFunc({
            product: theProduct,
            quantity: this.state.quantity
        })
    }

    render () {
        let listOfProducts = this.props.products.map( product => {
            return (
                <option key={product.id} value={product.id}>{product.name}</option>
            )
        })
        return (
        <Row>
            <h2>Add Item</h2>
            <Input 
            value={this.state.quantity}            
            s={12} 
            label="Quantity" 
            onChange={(e) => this.setState({ quantity: e.target.value })}
            />
            <Input 
            value={this.state.productId}
            s={12} 
            type='select' 
            label="Select Item" 
            onChange={(e) => this.setState({ productId: e.target.value })}
            defaultValue='2'>
                {listOfProducts}
            </Input>
            <Button 
            waves='light'
            onClick={this.handleClick}
             >Submit</Button>
        </Row>
        )
    }
}

export default AddItem