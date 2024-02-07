import React from 'react';
import { Outlet, useLocation , Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
function Attendance() {
  const location = useLocation();
  const AttendanceNavList ={
    '/attendance/attendance-import' : 'Attendance Import',
    '/attendance/manual-punching' : 'Manual Punching',
    '/attendance/leave-application' : 'Leave Application',
    '/attendance/absent-details' : 'Absent Details',
    '/attendance/attendance-verfication' : 'Attendance verfication'
  }
  return (
    <div className='bread'>
      <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/" style={{textDecoration:'none', color:'#000000'}}>< FaHome/> Home</Link></li>
                    <li class="breadcrumb-item" style={{textDecoration:'none',color:'#0000000'}}>Attendance</li>
                    <li class="breadcrumb-item active" aria-current="page">{AttendanceNavList[location.pathname]}</li>
                </ol>
                <hr></hr>
            </nav>
      <Outlet/>
    </div>
  )
}

export default Attendance;