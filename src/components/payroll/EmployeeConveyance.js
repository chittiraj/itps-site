import React from 'react';

function EmployeeConveyance() {
  return (
    <div>
      <div className='d-flex justify-content-between manualhead'>
                <div className='manualchild'>
                    <h5>Employee Conveyance</h5>
                    <div className='d-flex'>
                        <p>2</p>
                            of
                        <p>2</p>
                        Results Found
                    </div>
                </div>
                <div style={{margin:'0px 20px 0px 0px '}}>
                    <button>Add Conveyance</button>
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
                        <th scope="col">Company Name</th>
                        <th scope="col">Conveyance Date</th>
                        <th scope="col">Amount</th>
                        <th scope="col" style={{padding:"0px 30px"}}>Action</th>
                        </tr>
                    </thead>
                        <tbody className='tbody'>
                            <tr>
                            <th scope="row">1</th>
                            <td>chitti</td>
                            <td>Hexware</td>
                            <td>22/02/2024</td>
                            <td>289000</td>
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
                            <td>Hexware</td>
                            <td>22/02/2024</td>
                            <td>289000</td>
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
                            <td>Hexware</td>
                            <td>22/02/2024</td>
                            <td>289000</td>
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
    </div>
  )
}

export default EmployeeConveyance;