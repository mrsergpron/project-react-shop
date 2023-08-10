import  '../index.css'

 function GoodsItem({mainId, displayName,  displayAssets, price,  displayDescription, firstReleaseDate, rarity,orderItem, alertOrder}){
    
return (
<div className="card">
<div style={{textAlign:'left'}}>{}</div>
<div className="category">{displayName.toUpperCase()}</div>
<div className="rarity">Уникальность: {rarity.name.toLowerCase()}</div>
<div>< img src={displayAssets[0].full_background} alt={displayName}/></div>
<div>{displayDescription}</div>
<div className="block">
<div className="price">Цена: {price.regularPrice + ' руб.'}</div>
<div><button className="btn" onClick={()=>{
    orderItem({mainId, displayName, price, quantity: 1  })
    alertOrder(displayName)
}}>Купить</button></div></div>
</div>
)
 }

 export default GoodsItem;
