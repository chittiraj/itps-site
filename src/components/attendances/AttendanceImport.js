import React from 'react';
import './AttendanceImport.css';
function AttendanceImport() {
  return (
    <div>
          <div className='Attimporthead'>
            <div className="Attimportstop">
              <h5>Employee</h5>
              <p>Attendance Imports</p>
            </div>
              <div className="row">
                <div className="col Attimportdate">
                    <h6>Year<span>*</span></h6>
                    <select class="Att-select" style={{outline:'none', backgroundColor:'rgb(240,240,240)'}} aria-label="Large select example">
                          <option selected>Choose a year</option>
                          <option value="1">2024</option>
                          <option value="2">2025</option>
                          <option value="3"></option>
                    </select>
                    <hr className="Attimportline"></hr>
                </div>
              </div>
              <div className='row'>
                  <div className="col Attimportdate">
                      <h6>Month<span>*</span></h6>
                      <select class="Att-select" style={{outline:'none', backgroundColor:'rgb(240,240,240)'}} aria-label="Large select example">
                          <option selected>Choose a Month</option>
                          <option value="1">March</option>
                          <option value="2">April</option>
                          <option value="3">may</option>
                    </select>
                      <hr className="Attimportline"></hr>
                  </div>
                </div>
              
              <div className='row'>
                <div className="col Attimportdate">
                    <h6>Company Name<span>*</span></h6>
                    <select class="Att-select" style={{outline:'none', backgroundColor:'rgb(240,240,240)'}} aria-label="Large select example">
                          <option selected>Choose Company</option>
                          <option value="1">Hexware</option>
                          <option value="2">TCS</option>
                          <option value="3"></option>
                    </select>
                    <hr className="Attimportline"></hr>
                </div>
              </div>
              <div className="row Attimportfile">
                    <h6>Attach Excel<span>*</span></h6>
                      <div className="col-sm-1">
                        <button>File</button>
                      </div>
                      <div className="col">
                        <input type="text"className='Attimportfileinput' style={{width:'80%'}}></input>
                        <hr className="Attimportline"></hr>
                      </div>
              </div>
              <div className='row Attimportformate'>
                  <div className='col d-flex '>
                    <div>
                      <h6>Sample File format</h6>
                    </div>
                    <div>
                      <button><img src='../images/5880893-200.png' alt='file formate' style={{filter: 'invert(24%) sepia(84%) saturate(7491%) hue-rotate(356deg) brightness(95%) contrast(115%)'}}></img>Click Here</button>
                    </div>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default AttendanceImport;