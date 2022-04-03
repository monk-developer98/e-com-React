import { Link } from "react-router-dom";

const Sidenav = ({navToggle}) => {
  
    return (
    <div className={navToggle?"SIDENAV activeItem":"SIDENAV"} >
        <div className="navHead">
            <h1>
                <span className="material-icons-outlined">local_fire_department</span>Fire Meal
            </h1>
        </div>
      <ul className="navlinks">
        <Link to='/'>
            <li><span className="material-icons-outlined">home</span>Home</li>
        </Link>
        <Link to='/'>
            <li><span className="material-icons-outlined">restaurant_menu</span>Menu</li>
        </Link>
        <Link to='/cart'>
            <li><span className="material-icons-outlined">shopping_cart</span>Cart</li>
        </Link>
        <Link to='/'>
            <li><span className="material-icons-outlined">breakfast_dining</span>Orders</li>
        </Link>
        <Link to='/'>
            <li><span className="material-icons-outlined">stacked_bar_chart</span>Statistics</li>
        </Link>
        <Link to='/'>
            <li><span className="material-icons-outlined">dinner_dining</span>Meals Items</li>
        </Link>
        <Link to='/'>
            <li><span className="material-icons-outlined">contact_support</span>Contact Us</li>
        </Link>
        <Link to='/'>
            <li><span className="material-icons-outlined">logout</span>Log Out</li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidenav;
