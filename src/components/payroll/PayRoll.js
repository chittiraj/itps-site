import React from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import './PayRoll.css';
function PayRoll() {
    const location = useLocation();
    const PayRollNavbar = {
        '/payroll/pay-slip' : 'Pay-slip',
        '/payroll/salary-setup' : 'Salary Setup',
        '/payroll/salary-process' : 'Salary Process',
        '/payroll/employee-loan' : 'Employee Loan',
        '/payroll/employee-conveyance' : 'Employee Conveyance',
        '/payroll/tax-file-upload' : 'Tax-File-Upload'
    }
    return (
      <div className='bread'>
          <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                      <li class="breadcrumb-item"><Link to="/" style={{textDecoration:'none', color:'#000000'}}>< FaHome/> Home</Link></li>
                      <li class="breadcrumb-item" style={{textDecoration:'none',color:'#0000000'}}>Pay roll</li>
                      <li class="breadcrumb-item active" aria-current="page">{PayRollNavbar[location.pathname]}</li>
                  </ol>
                  <hr></hr> 
              </nav>
          <Outlet/>
      </div>
    )
}

export default PayRoll;