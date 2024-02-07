import React from 'react';
import './SalaryProcess.css';
function SalaryProcess() {
  return (
      <div>
            <div className='row'>
            <div className='col-sm-3'>
                  <h6>Year</h6>
                  <select className="process-select" style={{outline:'none', backgroundColor:'rgb(240,240,240)'}} aria-label="Large select example">
                        <option selected>2022</option>
                        <option value="1">2023</option>
                        <option value="2">2024</option>
                        <option value="3"></option>
                  </select>
                  <hr className="processline"></hr>
            </div>
            <div className='col-sm-3'>
                  <h6>month Upto</h6>
                  <select className="pay-select" style={{outline:'none', backgroundColor:'rgb(240,240,240)'}} aria-label="Large select example">
                        <option selected>January</option>
                        <option value="1">feb</option>
                        <option value="2">mar</option>
                        <option value="3"></option>
                  </select>
                  <hr className="processline"></hr>
            </div>
            <div className='col-sm-3'>
                  <h6>Employee</h6>
                  <select className="process-select" style={{outline:'none', backgroundColor:'rgb(240,240,240)'}} aria-label="Large select example">
                        <option selected>1029837654-tcs</option>
                        <option value="1">134567899-hexware</option>
                        <option value="2">123456789-hcl</option>
                        <option value="3"></option>
                  </select>
                  <hr className="processline"></hr>
            </div>
            <div className='col-sm processbutton'>
                  <button>Filter</button>
            </div>
      </div>
      <div className='row'>
            <div className='col'>
                        <div className='processhead'>
                              <div className='processchild'>
                                    <h5>Salary Process</h5>
                              </div>
                        </div>
                        <div className='d-flex justify-content-between manualshow' >
                              <div><h6>Show<span>10</span>entries</h6></div>
                              <div className='row'>
                                    <div className='col'>
                                          <div className='d-flex'>
                                          <div className='manualsearch'>
                                          <h6>search :</h6>
                                          </div>
                                    <div className='manualdreachdata'>
                                          <input type="search" ></input>
                                          <hr></hr>
                                    </div>
                                          </div>
                                    </div> 
                              </div>
                        </div>
                        <div className='row'>
                              <div className='col'>
                              <table className="table">
                                    <thead className='thead'>
                                          <tr>
                                          <th scope="col">#</th>
                                          <th scope="col">Employee Name</th>
                                          <th scope="col">Emp Code</th>
                                          <th scope="col">Gross Salary No</th>
                                          <th scope="col">Emp Salary Type</th>
                                          <th scope="col">Company Name</th>
                                          </tr>
                                    </thead>
                                          <tbody className='tbody'>
                                          <tr>
                                          <th scope="row">1</th>
                                          <td>chitti</td>
                                          <td>1234567</td>
                                          <td></td>
                                          <td></td>
                                          <td>ITPS TECH INFO PVT LTD</td>
                                          </tr>
                                          </tbody>
                                          <tbody className='tbody'>
                                          <tr>
                                          <th scope="row">1</th>
                                          <td>chitti</td>
                                          <td>1234567</td>
                                          <td></td>
                                          <td></td>
                                          <td>ITPS TECH INFO PVT LTD</td>
                                          </tr>
                                          </tbody>
                                          <tbody className='tbody'>
                                          <tr>
                                          <th scope="row">1</th>
                                          <td>chitti</td>
                                          <td>1234567</td>
                                          <td></td>
                                          <td></td>
                                          <td>ITPS TECH INFO PVT LTD</td>
                                          </tr>
                                          </tbody>
                              </table>
                              </div>
                        </div>
            </div>
      </div>
    </div>
  )
}

export default SalaryProcess;