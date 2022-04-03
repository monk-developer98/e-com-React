import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Products } from "./Products";

const PrimaryPage = () => {
  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0)
  const [menuToggle, setMenuToggle] = useState(false);

  useEffect(() => {
   var data = JSON.parse(localStorage.getItem('CART')) 
   setCart([...data])
  }, [])
  
  const addCart = (Product,index) => {
    var NewList = Products
    var count =  NewList[index].Quantity

    if(cart.includes(Product)){
        NewList[index].Quantity = count+1
        setCart([...cart])
    }else{
      setCart([...cart, Product]);
    }
    console.log("Add to Cart is Working", cart);
  };

  const HandleQuanitityPlus =(index)=>{
    console.log('fdfds');

      var NewList = [...cart]

      var count =  NewList[index].Quantity

      NewList[index].Quantity=count+1 

      setCart(NewList)
  }


  const HandleQuanitityMinus =(index)=>{
    var NewList = [...cart]

    var count =  NewList[index].Quantity

    if(count>1){
      NewList[index].Quantity=count-1
    }else{
      NewList[index].Quantity=1
    }

    setCart(NewList)
  }

  const removeCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
    console.log("Remove From cart is working", cart);
  };

  var total = 0;
  useEffect(() => {
    if (cart.length>0) {
      cart.forEach((value) => {
        total = total + value.price*value.Quantity;
      });
      setSubtotal(total);
      localStorage.setItem('CART',JSON.stringify(cart))
    }
  }, [cart]);

  const handleClick = () => {
    setMenuToggle(!menuToggle)
  };


  return (
    <div className="PRIMARY">
      <div className="MENU">
          <div className="MenuToggle" onClick={handleClick}>
          <img className="toggle" src={menuToggle?"./resource/delete.svg":"./resource/menu.svg"} alt="" />
          </div>
        <div className="CARDS">
          {Products
            ? Products.map((meal, index) => (
                <div style={{background:meal.color}} className="card" key={meal.name}>
                  <div className="c_head">
                    <div className="rating">
                      <span className="material-icons-outlined star">star</span>
                      <span className="no">{meal.rating}</span>
                    </div>
                    <div className="like">
                      <span className="material-icons-outlined">
                        favorite_border
                      </span>
                    </div>
                  </div>
                  <div className="picture">
                    <img src={meal.url} alt="img" />
                  </div>
                  <div className="titile">
                    <span>{meal.name}</span>
                    <span>{meal.quantity}</span>
                  </div>
                  <div className="container">
                  <div className="price">${meal.price}</div>
                  <button onClick={() => addCart(meal,index)}>Add</button>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
      <div className={menuToggle?"CART  activeMenu": "CART"}>
          <div className="MYOrder">
            <div className="headOrder">
              <h2>My Order</h2>
              <span>Edit</span>
            </div>
            <p>
              <span className="material-icons-outlined">watch_later</span>14:30 Am
            </p>
          </div>
          <hr />
          <div className="foodcart">
              <div className="cartItem">
                  <span className={cart.length ? "cart_tag activeTag" : "cart_tag"}> Cart</span>
                  <span  className={cart.length ? "cart_size activeCart" : "cart_size"}>{cart.length}</span>
              </div>
            {cart.map((cartData, index)=>(
              <div className="Select_order"key={cartData.name} >
              <img src={cartData.url} alt="img" />
              <div className="item_name">
                <p>{cartData.name}</p>
                <span>{cartData.quantity}</span>
              </div>
              <div className="count">
                <span className="material-icons-outlined" onClick={()=>HandleQuanitityMinus(index)}>-</span>
                  <h3>{cartData.Quantity}</h3>
                <span className="material-icons-outlined" onClick={()=>HandleQuanitityPlus(index)}>+</span>
              </div>
              <span className="amount">${(cartData.price*cartData.Quantity).toFixed(2)}</span>
              <span className="material-icons-outlined remove" onClick={() => removeCart(cartData)}>clear</span>
            </div>
            ))}            
             
            <div className="Drag_drop">
              <span>Drag&Drop</span>
            </div>
            <div className="total">
              <p>Total</p>
              <span>${cart.length ? subtotal.toFixed(2) : 0}</span>
            </div>
            <Link to="/cart">
            <button  >Checkout</button>
            </Link>
          </div>
        </div>
    </div>
  );
};

export default PrimaryPage;
