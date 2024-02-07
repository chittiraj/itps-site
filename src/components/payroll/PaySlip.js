import React from 'react';
import './PaySlip.css';
function PaySlip() {
  return (
    <div>
      <div className='row'>
        <div className='col-sm-3'>
              <h6>Year</h6>
              <select className="pay-select" style={{outline:'none', backgroundColor:'rgb(240,240,240)'}} aria-label="Large select example">
                    <option selected>2022</option>
                    <option value="1">2023</option>
                    <option value="2">2024</option>
                    <option value="3"></option>
              </select>
              <hr className="payslipline"></hr>
        </div>
        <div className='col-sm-3'>
              <h6>month Upto</h6>
              <select className="pay-select" style={{outline:'none', backgroundColor:'rgb(240,240,240)'}} aria-label="Large select example">
                    <option selected>January</option>
                    <option value="1">feb</option>
                    <option value="2">mar</option>
                    <option value="3"></option>
              </select>
              <hr className="payslipline"></hr>
        </div>
        <div className='col-sm-3'>
              <h6>Employee</h6>
              <select className="pay-select" style={{outline:'none', backgroundColor:'rgb(240,240,240)'}} aria-label="Large select example">
                    <option selected>1029837654-tcs</option>
                    <option value="1">134567899-hexware</option>
                    <option value="2">123456789-hcl</option>
                    <option value="3"></option>
              </select>
              <hr className="payslipline"></hr>
        </div>
        <div className='col-sm payslipdatabutton'>
            <button>Filter</button>
        </div>
        <div className='col-sm Pdfdatabutton' >
            <button>PDF</button>
        </div>
        <div className='col printdatabutton'>
            <button>Print</button>
        </div>
      </div>
    </div>
  )
}

export default PaySlip;