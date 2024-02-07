import { Outlet, useLocation,Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import './Employee.css'
function Employee(){
    const location = useLocation();
    console.log(location.pathname);
    const empNavList = {
        '/employees/create' : 'Create Employee',
        '/employees/basic-details' : 'Create Employee',
        '/employees/employee-imports' : 'Employee Imports',
        '/employees/employee-list' : 'Employee List',
        '/employees/awards-list' : 'Awards List',
        '/employees/notice-list' : 'Notice List',
        
    }
    return (
        <div className='bread'>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/" style={{textDecoration:'none', color:'#000000'}}>< FaHome/> Home</Link></li>
                    <li class="breadcrumb-item" style={{textDecoration:'none',color:'#0000000'}}>Employees</li>
                    <li class="breadcrumb-item active" aria-current="page">{empNavList[location.pathname]}</li>
                </ol>
                <hr></hr>
            </nav>
            <Outlet/>
        </div>
    )
}
export default Employee;