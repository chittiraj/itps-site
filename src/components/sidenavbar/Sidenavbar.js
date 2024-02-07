import './Sidenavbar.css';
import { HiComputerDesktop } from "react-icons/hi2";
import { IoPersonAddOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { CiMoneyBill } from "react-icons/ci";
import { GoReport } from "react-icons/go";

import { useState } from 'react';
import { Link } from 'react-router-dom';
function Sidenavbar() {
  const [toggleMenu , setToggleMenu] = useState({
      isShowEmployees : false,
      isShowAttendance : false,
      isShowPayroll : false,
      isShowReport : false,
  })
  return (
    <div className='container'>
      <div className='sidebar'>
        <div className='scrollbar'>
          <div className='sidebar-menu'>

                <div className='sidebar-menu-child'>
                    <div className='row'>
                    <div className='col'>
                          <button className='d-flex flex-row'>
                          <h1><HiComputerDesktop /></h1>
                          <Link to="/dashboard" style={{textDecoration:'none'}}><h4 className='buttonmenu'>DashBoard</h4></Link>
                          </button>
                          <hr className='sidehr'></hr>
                    </div>
                    </div>
                     <div className='row'>
                     <div className='col'>
                            <button className='d-flex flex-row' onClick={() => setToggleMenu({toggleMenu, isShowEmployees : !toggleMenu.isShowEmployees})}>
                                <h1><IoPersonAddOutline /></h1>
                                <h5>Employees</h5>
                                <span className='span'>{toggleMenu.isShowEmployees ? '-' : '+'}</span>
                            </button>
                            {toggleMenu.isShowEmployees && (<ul>
                              <Link to="/employees/create"  style={{textDecoration:'none'}}><li className='buttonmenu'>Create Employee</li></Link>
                              <Link to="/employees/employee-list" style={{textDecoration:'none'}}><li className='buttonmenu'>Employee List</li></Link>
                              <Link to="/employees/employee-imports" style={{textDecoration:'none'}}><li className='buttonmenu'>Employee Imports</li></Link>
                              <Link to="/employees/awards-list" style={{textDecoration:'none'}}><li className='buttonmenu'>AwardsList</li></Link>
                              <Link to="/employees/notice-list"  style={{textDecoration:'none'}}><li className='buttonmenu'>Notice List</li></Link>
                          </ul>)}
                          <hr className='sidehr'></hr>
                      </div>
                     </div>
                    
                    <div className='row'>
                      <div className='col'>
                      <button className='d-flex flex-row custom-button' onClick={() => setToggleMenu({toggleMenu, isShowAttendance : !toggleMenu.isShowAttendance})}>
                          <h1><LiaBookSolid /></h1>
                          <h5>Attendance</h5>
                          <span>{toggleMenu.isShowAttendance ? '-' : '+'}</span>
                        </button>
                            {toggleMenu.isShowAttendance && (<ul>
                                <Link to="/attendance/attendance-import"  style={{textDecoration:'none'}}><li className='buttonmenu'>Attendance Import</li></Link>
                                <Link to="/attendance/manual-punching"  style={{textDecoration:'none'}}><li className='buttonmenu'>Manual Punching</li></Link>
                                <Link to="/attendance/leave-application"style={{textDecoration:'none'}}><li className='buttonmenu'>Leave Application</li></Link>
                                <Link to="/attendance/absent-details" style={{textDecoration:'none'}}><li className='buttonmenu'>Absent Details</li></Link>
                                <Link to="/attendance/attendance-verfication" style={{textDecoration:'none'}}><li className='buttonmenu'>Attendance Verification</li></Link>
                            </ul>)}
                            <hr className='sidehr'></hr>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col'>
                        <button className='d-flex flex-row custom-button' onClick={() => setToggleMenu({toggleMenu, isShowPayroll : !toggleMenu.isShowPayroll})}>
                            <h1><CiMoneyBill /></h1>
                            <h5>Payroll</h5>
                            <span>{toggleMenu.isShowPayroll ? '-' : '+'}</span>
                          </button>
                            {toggleMenu.isShowPayroll && (<ul>
                                <Link to="/payroll/pay-slip" style={{textDecoration:'none'}}><li className='buttonmenu'>Payslip</li></Link>
                                <Link to="/payroll/salary-setup" style={{textDecoration:'none'}}><li className='buttonmenu'>Salary Setup</li></Link>
                                <Link to="/payroll/salary-process" style={{textDecoration:'none'}}><li className='buttonmenu'>Salary Process</li></Link>
                                <Link to="/payroll/employee-loan" style={{textDecoration:'none'}}><li className='buttonmenu'>Employee Loan</li></Link>
                                <Link to="/payroll/employee-conveyance" style={{textDecoration:'none'}}><li className='buttonmenu'>Employee Conveyance</li></Link>
                                <Link to="/payroll/tax-file-upload"style={{textDecoration:'none'}}><li className='buttonmenu'>Tax File upload</li></Link>
                            </ul>)}
                            <hr className='sidehr'></hr>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col'>
                        <button className='d-flex flex-row custom-button' onClick={() => setToggleMenu({toggleMenu, isShowReport : !toggleMenu.isShowReport})}>
                            <h1><GoReport /></h1>
                            <h5>Reports</h5>
                            <span>{toggleMenu.isShowReport ? '-' : '+'}</span>
                          </button>
                            {toggleMenu.isShowReport && (<ul>
                                <li className='buttonmenu'>Attendance</li>
                                <li className='buttonmenu'>Payslip Bulk Download</li>
                                <li className='buttonmenu'>Monthly Salary</li>
                                <li className='buttonmenu'>Yearly Salary</li>
                                <li className='buttonmenu'>Salary Deduction Details</li>
                            </ul>)}
                            <hr className='sidehr'></hr>
                      </div>
                    </div>
                  </div>
                  <div className='verticalLine'></div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Sidenavbar;