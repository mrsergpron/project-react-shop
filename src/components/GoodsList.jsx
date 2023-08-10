import GoodsItem from './GoodsItem'
import  '../index.css'


function GoodsList({goods, orderItem, alertOrder}) {
//console.log(goods)
return (
       <div className="list">
     {goods.map((item)=>   <GoodsItem key={item.mainId} {...item} orderItem={orderItem} alertOrder={alertOrder}/>)}  
      
   

       </div>
    )

}
  
export default  GoodsList ;
