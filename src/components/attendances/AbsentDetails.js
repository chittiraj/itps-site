function AbsentDetails() {
  return (
    <div>
      <div className='d-flex justify-content-between manualhead'>
                <div className='manualchild'>
                    <h5>Absent List</h5>
                    <div className='d-flex'>
                        <p>44</p>
                            of
                        <p>44</p>
                        Results Found
                    </div>
                </div>
                <div style={{margin:'0px 20px 0px 0px '}}>
                    <button>Add Absents</button>
                </div>
            </div>
            <div className='row'>
                <div className='col manualdataform'>
                    <h6>Data From</h6>
                    <input type="text"className="manualinput"></input>
                    <hr className="manualline"></hr>
                </div>
                <div className='col manualdataupto'>
                    <h6>Data upto</h6>
                    <input type="text"className="manualinput"></input>
                    <hr className="manualline"></hr>
                </div>
                <div className='col manualdatabutton'>
                    <button>Filter</button>
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
                        <th scope="col">Absent date</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                        <tbody className='tbody'>
                            <tr>
                            <th scope="row">1</th>
                            <td>chitti</td>
                            <td>1234567</td>
                            <td>00000056</td>
                            <td>20/02/2024</td>
                            <td>Absent Imports data</td>
                            <td>
                               <div  className="manualbutton-container">
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
                            <td>20/02/2024</td>
                            <td>Absent Imports data</td>
                            <td >
                                <div className="button-container">
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
                            <td>20/02/2024</td>
                            <td>Absent Imports data</td>
                            <td>
                                <div className="button-container">
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

export default AbsentDetails;