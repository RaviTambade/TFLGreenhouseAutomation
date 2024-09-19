import { Link } from "react-router-dom";
const Navbar = () => (
    <nav>
        <Link to="/">Home</Link> |
        <Link to="/list">List</Link>|
        <Link to="/customers">Customers</Link> |
        <Link to="/aboutus">About us</Link>|
        <Link to="/contact">Contact</Link> |
        <Link to="/services">Services</Link> |
        <Link to="/dashboard">Dashboard</Link> |
        <Link to="/bi">Business Intelligence</Link> |
        <Link to="/login">Login</Link>
    </nav>
);
export default Navbar;
//Implicit return
//When you use parentheses directly after the arrow, 
//it allows for an implicit return.
// This means that you can return a value without explicitly using the return keyword: