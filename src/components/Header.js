import { LOGO_URL } from '../utils/constants';
import { useEffect, useState } from 'react';
const Header = () => {

const[Login , setLogin] = useState("Login");
//dependency array allows it to render once only that too at initial render
useEffect(()=>{
console.log("header rendered");
},[]);//if we put anything in this array it will render when it changes to any other value



    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL} alt="App Logo" className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login"
                    onClick={()=> { 
                        Login === "Login"
                       ? setLogin("Logout")
                     : setLogin("Login");
                        }
                    }>
                    {Login} 
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
