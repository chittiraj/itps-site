import React from 'react';
import './AttendanceVerfication.css';
function AttendanceVerfication() {
  return (
    <div>
      <div className='row'>
            <div className='col-sm-3'>
              <h6>Year</h6>
              <select className="ver_select" aria-label="Large select example">
                      <option value="1">2024</option>
                      <option value="2">2023</option>
                      <option value="3">2022</option>
              </select>
            </div>
            <div className='col-sm-3'>
              <h6>Month</h6>
              <select className="ver_select" aria-label="Large select example">
                      <option value="1">march</option>
                      <option value="2">april</option>
                      <option value="3">may</option>
              </select>
            </div>
            <div className='col-sm-3'>
              <h6>Company</h6>
              <select className="ver_select" aria-label="Large select example">
                      <option value="1">tcs</option>
                      <option value="2">Hexware</option>
                      <option value="3">hcl</option>
              </select>
            </div>
              <div className='col verdatabutton'>
                      <button>Filter</button>
              </div>
      </div>
      <div className='row'>
        <div className='col'>
        <div className='error'>
        <h2>Sorry, not generated, please selecte company Related Employee Details...!</h2>
      </div>
        </div>
      </div>
    </div>
  )
}

export default AttendanceVerfication;