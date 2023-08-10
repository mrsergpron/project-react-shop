export const BasketItem = (props) => {

  const {order, deleteFromBasket,addItem, deleteItem} = props;

console.log(order)
  return (

<>
{order.map((item)=> <li className="collection-item" key={item.mainId}> <div><span>{item.displayName + ':'} </span><i className="material-icons plus" 
onClick={()=>addItem(item.mainId)}>add</i><i className="material-icons plus" 
onClick={()=>deleteItem(item.mainId)}>remove</i> {item.quantity + ' шт.'} {' x ' + item.price.regularPrice + ' руб.'}<a href="#!" className="secondary-content"><i className="material-icons" 
onClick={()=>deleteFromBasket(item.mainId)}>close</i></a></div></li>) }


</>
   
  )
}
