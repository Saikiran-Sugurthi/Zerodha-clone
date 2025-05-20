import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";

import axios from "axios";
const Orders = () => {

  let [orders,setOrders]=useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3000/fetchOrders").then((res)=>{
      setOrders(res.data);
    })
  })

  return (
    <div className="order-table">
     
       
       <table>
        <th>
          Name
        </th>
        <th>
          qty
        </th>
        <th>
          price
        </th>
        <th>
          mode
        </th>

      {
        orders.map((order)=>(
          <tr>
           <td>
            {order.name}
           </td>
           <td>
            {order.qty}
           </td>
           <td>
            {order.price}
           </td>
           <td>
           { order.mode}
           </td>
          </tr>
        ))
      }



       </table>
{/* 
        <Link to={"/"} className="btn">
          Get started
        </Link> */}
     
    </div>
  );
};

export default Orders;
