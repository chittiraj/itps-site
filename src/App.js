import './App.css';
import { Routes,Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Navbar1 from './components/navbar/Navbar1';
import Center from './components/center/Center';
import SideNavBar from './components/sidenavbar/Sidenavbar';
import Dashboard from './components/dashboard/Dashboard';
import Home from './components/home/Home';

import Employee from './components/employees/Employee';
import CreateEmployee from './components/employees/CreateEmployee';
import EducationQualification from './components/employees/EducationQualification';
import EmployeeImports from './components/employees/EmployeeImports';
import EmployeeList from './components/employees/EmployeeList';
import AwardsList from './components/employees/AwardsList';
import NoticeList from './components/employees/NoticeList';

import Attendance from './components/attendances/Attendance';
import AttendanceImport from './components/attendances/AttendanceImport';
import ManualPuching from './components/attendances/ManualPuching';
import LeaveApplication from './components/attendances/LeaveApplication';
import AbsentDetails from './components/attendances/AbsentDetails';
import AttendanceVerfication from './components/attendances/AttendanceVerfication';

import PayRoll from './components/payroll/PayRoll';
import Payslip from './components/payroll/PaySlip';
import SalarySetup from './components/payroll/SalarySetup';
import SalaryProcess from './components/payroll/SalaryProcess';
import EmployeeLoan from './components/payroll/EmployeeLoan';
import EmployeeConveyance from './components/payroll/EmployeeConveyance';
import TaxFileupload from './components/payroll/TaxFileupload';





function App() {
  const [isUserLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="App">
      {isUserLoggedIn ? (
        <>
          <Navbar1/>
            <div className='row'>
                <div className='col-sm-2 side__nav'>
                  <SideNavBar/>
                </div>
                <div className='col-sm-9 main__center'>
                  <Routes>
                      <Route path='/' element={<Home/>}></Route>
                      <Route path='/dashboard' element={<Dashboard/>}></Route>

                      <Route path="/employees" element={<Employee/>}>
                        <Route path="create" element={<CreateEmployee/>}/>
                        <Route path="employee-list" element={<EmployeeList/>}/>
                        <Route path="employee-imports" element={<EmployeeImports/>}/>
                        <Route path="awards-list" element={<AwardsList/>}/>
                        <Route path="notice-list" element={<NoticeList/>}/>
                        <Route path='education-qualification' element={<EducationQualification/>}/>
                      </Route>
                  

                      <Route path="/attendance" element={<Attendance/>}>
                        <Route path="attendance-import" element={<AttendanceImport/>}/>
                        <Route path="manual-punching" element={<ManualPuching/>}/>
                        <Route path="leave-application" element={<LeaveApplication/>}/>
                        <Route path="absent-details" element={<AbsentDetails/>}/>
                        <Route path="attendance-verfication" element={<AttendanceVerfication/>}/>
                      </Route>

                      <Route path="/payroll" element={<PayRoll/>}>
                        <Route path="pay-slip" element={<Payslip/>}/>
                        <Route path="salary-setup" element={<SalarySetup/>}/>
                        <Route path="salary-process" element={<SalaryProcess/>}/>
                        <Route path="employee-loan" element={<EmployeeLoan/>}/>
                        <Route path="employee-conveyance" element={<EmployeeConveyance/>}/>
                        <Route path="tax-file-upload" element={<TaxFileupload/>}/>
                      </Route>
                  </Routes>
                </div>
            </div>
        </>
          
      ) : (
            <div>
              <Navbar/>
              <Routes>
                <Route path='/' element={<Center/>}></Route>
              </Routes>
            </div> 
      )}
    </div>
  );
}

export default App;
