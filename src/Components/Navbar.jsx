
import {React, useState}from 'react';
import { Link , useHistory} from 'react-router-dom/cjs/react-router-dom.min';
import PizzaHut from "../pizza-hut-512.png"

const Navbar = () => {


    const [searchKey, setSearchKey] = useState('');
    const history = useHistory();

    const handleSearch = () => {
        if (searchKey) {
            history.push(`/search/${searchKey}`);
        }
    }
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src={PizzaHut} alt="Restaurant Logo" className="navbar-logo" />
                <span className="navbar-title">Halli Mane</span>
            </div>

            <div className="navbar-middle">
                <input type="text"
                    placeholder="Search..."
                    className="navbar-search"
                    value={searchKey}
                    onChange={(e) => setSearchKey(e.target.value)}
                />
                <button className="navbar-button" >Search</button>
            </div>
            <div className="navbar-right">
                
                <Link to="/addfood" className="navlinks">Add Food</Link>
                <Link to="/orders" className="navlinks">Orders</Link>
            </div>
        </nav>
    );
};

export default Navbar;
