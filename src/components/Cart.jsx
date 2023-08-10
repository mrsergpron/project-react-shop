

function Cart (props) {

    const {quantity = 0, isBasket} = props
    return (
        <div className="cart" onClick={()=>isBasket()}>
            <div><i className="material-icons">shopping_cart</i></div>
            <div className="cart-quantity">{quantity}</div>
        </div>
    )
}

export default Cart