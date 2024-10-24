
import {Routes, Route} from "react-router-dom";
import Home from "../components/standard/Home";
import Aboutus from "../components/standard/Aboutus";
import Contact from "../components/standard/Contact";
import Services from "../components/standard/Services";
import List from "../components/catalog/List";
import Login from "../components/membership/Login";
import Dashboard from "../components/crm/Dashboard";
import Profile from "../components/crm/Profile";
import Settings from "../components/crm/Settings";
import Bi from "../components/charts/Bi";
import BarChart from "../components/Charts/Barchart";
import LineChart from "../components/Charts/Linechart";
import PieChart from "../components/Charts/Piechart";
import Customers from "../components/crm/crud/customers";
import Customer from "../components/crm/crud/customer";
import CustomerInsert from "../components/crm/crud/CustomerInsert";
import CustomerUpdate from "../components/crm/crud/CustomerUpdate";
import CustomerDelete  from "../components/crm/crud/CustomerDelete";

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<Aboutus/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/list" element={<List/>}/>
        <Route path="/login" element= {<Login/>}/>

        <Route path="/dashboard" element={<Dashboard/>}>
            {/*  Nested Routes  */}
            <Route path="profile" element={<Profile/>} />
            <Route path="settings" element={<Settings/>} />
        </Route>

        <Route path="/bi" element={<Bi/>}>
            {/*  Nested Routes  */}
            <Route path="bar" element={<BarChart/>} />
            <Route path="line" element={<LineChart/>} />
            <Route path="pie" element={<PieChart/>} />
        </Route>

        <Route path="customers" element={<Customers/>}/>
        <Route path="customers/details/:id" element={<Customer/>}/>
        <Route path="customers/update/:id" element={ <CustomerUpdate/>}/>
        <Route path="customers/delete/:id" element={<CustomerDelete/>}/>
        <Route path="customers/insert" element={<CustomerInsert/>}/>
        
</Routes>
);
export default AppRoutes;