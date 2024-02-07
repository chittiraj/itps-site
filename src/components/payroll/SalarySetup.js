import React from 'react';
import './SalarySetup.css';
function SalarySetup() {
  return (
    <div>
      <div className='d-flex justify-content-between manualhead'>
                <div className='manualchild'>
                    <h5>List of paySetup</h5>
                    <div className='d-flex'>
                        <p>2</p>
                            of
                        <p>2</p>
                        Results Found
                    </div>
                </div>
                <div style={{margin:'0px 20px 0px 0px '}}>
                    <button>Add PaySetup</button>
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
                        <th scope="col">Card No</th>
                        <th scope="col">Department</th>
                        <th scope="col">Designation</th>
                        <th scope="col">Company Name</th>
                        <th scope="col">Salary Amt</th>
                        <th scope="col">Effective Date</th>
                        <th scope="col" style={{padding:"0px 30px"}}>Action</th>
                    
                        </tr>
                    </thead>
                        <tbody className='tbody'>
                            <tr>
                            <th scope="row">1</th>
                            <td>chitti</td>
                            <td>1234567</td>
                            <td>00000056</td>
                            <td>Dev</td>
                            <td>Senior Engineer</td>
                            <td>ITPS TECH INFO PVT LTD</td>
                            <td>289000</td>
                            <td>22/02/2024</td>
                            <td>
                               <div  className="manualbutton-container">
                               <button className="manualbuttonedit">
                                    <img className="manualbutton-img" style={{filter:'invert(97%) sepia(6%) saturate(7206%) hue-rotate(295deg) brightness(130%) contrast(145%)'}} src="../images/2247411-200.png" alt="edit" />
                                </button>
                                <button className="manualbuttonedelete">
                                    <img className="manualbutton-img1" style={{filter:'invert(97%) sepia(6%) saturate(7206%) hue-rotate(295deg) brightness(130%) contrast(145%)'}} src="../images/6349361-200.png" alt="delete" />
                                </button>
                               </div>
                            </td>
                            </tr>
                        </tbody>
                        <tbody className='tbody'>
                            <tr>
                            <th scope="row">1</th>
                            <td>chitti</td>
                            <td>1234567</td>
                            <td>00000056</td>
                            <td>Dev</td>
                            <td>Senior Engineer</td>
                            <td>ITPS TECH INFO PVT LTD</td>
                            <td>289000</td>
                            <td>22/02/2024</td>
                            <td >
                                <div className="button-container">
                                <button className="buttonedit">
                                    <img className="button-img" style={{filter:'invert(97%) sepia(6%) saturate(7206%) hue-rotate(295deg) brightness(130%) contrast(145%)'}} src="../images/2247411-200.png" alt="edit" />
                                </button>
                                <button className="buttonedelete">
                                    <img className="button-img1" style={{filter:'invert(97%) sepia(6%) saturate(7206%) hue-rotate(295deg) brightness(130%) contrast(145%)'}} src="../images/6349361-200.png" alt="delete" />
                                </button>
                                </div>
                            </td>
                            </tr>
                        </tbody>
                        <tbody className='tbody'>
                            <tr>
                            <th scope="row">1</th>
                            <td>chitti</td>
                            <td>1234567</td>
                            <td>00000056</td>
                            <td>Dev</td>
                            <td>Senior Engineer</td>
                            <td>ITPS TECH INFO PVT LTD</td>
                            <td>289000</td>
                            <td>22/02/2024</td>
                            <td>
                                <div className="button-container">
                                <button className="buttonedit">
                                    <img className="button-img" src="../images/2247411-200.png" alt="edit" />
                                </button>
                                <button className="buttonedelete">
                                    <img className="button-img1" src="../images/6349361-200.png" alt="delete" />
                                </button>
                                </div>
                            </td>
                            </tr>
                        </tbody>
                </table>
                </div>
            </div>

            <div className="salarysetdown"><b>Add paysetup</b></div>
        <div className="row">
            <div className="col">
                <h6>Select Employee</h6>
                <select className="set-select" style={{outline:'none', backgroundColor:'rgb(240,240,240)'}} aria-label="Large select example">
                        <option selected>Choose Employee</option>
                        <option value="1">dev</option>
                        <option value="2">tester</option>
                        <option value="3">dev</option>
                </select>
                  <hr className="formline"></hr>
            </div>
            <div className="col">
                <h6>salary Amount</h6>
                <input type="number"className="forminput" style={{width:'80%'}}></input>
                <hr className="formline"></hr>
            </div>
        </div>
        <div className='row'>
                <div className='d-flex justify-content-center'>
                    <div className='setchild'>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" for="flexCheckDefault">
                          Daywise Salary
                        </label>
                      </div>
                    </div>
                    <div className='setchild'>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" for="flexCheckDefault">
                          Monthly Salary
                        </label>
                      </div>
                    </div>
                    <div className='setchild'>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" for="flexCheckDefault">
                          Hours Based Salary
                        </label>
                      </div>
                    </div> 
                </div> 
        </div>
        <div className='row'>
            <div className="col">
                <h6>ESI No:</h6>
                <input type="text"className="setinput" style={{width:'80%'}}></input>
                <hr className="formline"></hr>
            </div>
            <div className="col">
                <h6>PF NO:</h6>
                <input type="text"className="setinput" style={{width:'80%'}}></input>
                <hr className="formline"></hr>
            </div>
        </div>
    </div>
  )
}

export default SalarySetup;