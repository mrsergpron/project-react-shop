import { BasketItem } from "./BasketItem";


export const BasketList = (props) => {

const {isBasket, order,  deleteFromBasket, addItem, deleteItem} = props;



  return (
    <> 
    
   
     <ul className="collection with-header basket">
     <li className="collection-header basketClose teal lighten-4"><h4>Ваша корзина:</h4> <div style={{textAlign:'right'}}><a href="#!" onClick={(event)=>{event.preventDefault(); isBasket(false)}}><i className="material-icons">close</i></a></div></li>
     {/* <li className="collection-item"><div style={{textAlign:'right'}}><a href="#!" onClick={(event)=>{event.preventDefault(); isBasket(false)}}><i className="material-icons">close</i></a></div></li> */}
     {order.length ? <BasketItem order= {order}  deleteFromBasket={deleteFromBasket} addItem={addItem} deleteItem={deleteItem}/> : <li className="collection-header"><h6>Ваша корзина пуста!</h6></li>}
     <li className="collection-header teal lighten-4"><h5>Сумма заказа: {order.reduce((sum,item)=> (sum += item.quantity * item.price.regularPrice),0)} руб.</h5></li>
   </ul>
 

  
  
   
  </>
   
  )
}
