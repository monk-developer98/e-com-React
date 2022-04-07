import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';

const Cart = ({ navToggle ,handleClick , addItem}) => {
  const [subtotal, setSubtotal] = useState(0)
  
  
  // const OrderData = JSON.parse(localStorage.getItem(`CART`))
  // console.log(OrderData);
  var total = 0;
  useEffect(() => {
    if (addItem.length>0) {
      addItem.forEach((value) => {
        total = total + value.price*value.Quantity;
      })
      setSubtotal(total);
    }
  }, [addItem]);

  return (
    <div className='continer'>
      <div className="NavToggle" onClick={handleClick}>
        <img className='itemToggle ' src={navToggle?"./resource/delete.svg":"./resource/menu.svg"} alt="" />
      </div>
      <div className="MY_Item">
        <div className="heading">
          My Orders List
        </div>
        { addItem ? addItem.map((item,index)=>(

          <div className="favItem" key={item.id}>
              <div className="itemCart">
                <img src={item.url} alt="img" />
                <div className="itemName">
                  <span>{item.name}</span>
                  <p>{item.quantity}</p>
                </div>
                <div className="itemQuantity">
                  <span>{item.Quantity}</span>
                </div>
                <span>${(item.price*item.Quantity ).toFixed(2) }</span>
              </div>
        </div>
          )):null}
        <div className="itemTotal">
          <p>Total</p>
          <span>${addItem.length ? subtotal.toFixed(2) : 0}</span>
        </div>
        <Link to="/">
          <button>Proced to Pay</button>
        </Link>
      </div>
    </div>
  )
}

export default Cart