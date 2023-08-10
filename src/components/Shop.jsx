import {useState, useEffect} from 'react'
import {Preloader} from './Preloader'
import GoodsList from './GoodsList'
import { API_URL, API_KEY } from '../config.js'

function Shop({orderItem, alertOrder}) {
const [goods, setGoods] = useState([])
const [preloader, setPreloader] = useState(true)


useEffect(()=>{
  fetch(API_URL, {headers: { 'Authorization': API_KEY}})
  .then((response)=>response.json())
  .then((data)=>  data ? setGoods(data.shop) : setPreloader(true) )
  .then(()=>setPreloader(false))
  .catch((error)=>console.log(error))
},[])

  return (
   <main className="container content">
  
    {preloader ? <Preloader /> :  <GoodsList goods={goods} orderItem={orderItem} alertOrder={alertOrder}/>}
 
   </main>
  )
}

export default Shop