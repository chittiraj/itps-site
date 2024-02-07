import './AwardsList.css';
function AwardsList(){
    return(
        <div>
            <div className='d-flex justify-content-between awardshead'>
                <div className='awardschild'>
                    <h5>Awards List</h5>
                    <div className='d-flex'>
                        <p>2</p>
                            of
                        <p>2</p>
                        Results Found
                    </div>
                </div>
                <div style={{margin:'0px 20px 0px 0px '}}>
                    <button>Add Awards</button>
                </div>
            </div>
            <div className='row'>
                <div className='col dataform'>
                    <h6>Data From</h6>
                    <input type="text"className="awardsinput"></input>
                    <hr className="awardsline"></hr>
                </div>
                <div className='col dataupto'>
                    <h6>Data upto</h6>
                    <input type="text"className="awardsinput"></input>
                    <hr className="awardsline"></hr>
                </div>
                <div className='col databutton'>
                    <button>Filter</button>
                </div>
            </div>
            <div className='d-flex justify-content-between awardsshow' >
                <div><h6>Show<span>10</span>entries</h6></div>
                <div className='row'>
                    <div className='col'>
                        <div className='d-flex'>
                        <div className='awardssearch'>
                            <h6>search :</h6>
                        </div>
                       <div className='awardsdreachdata'>
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
                        <th scope="col">Awards Name</th>
                        <th scope="col">Gift</th>
                        <th scope="col">Awards Date</th>
                        <th scope="col">Action</th>
                    
                        </tr>
                    </thead>
                        <tbody className='tbody'>
                            <tr>
                            <th scope="row">1</th>
                            <td>chitti</td>
                            <td>1234567</td>
                            <td>Best Performance</td>
                            <td>cash</td>
                            <td>20/02/2024</td>
                            <td>
                               <div  className="button-container">
                               <button className="buttonedit">
                                    <img className="button-img" style={{filter:'invert(97%) sepia(6%) saturate(7206%) hue-rotate(295deg) brightness(130%) contrast(145%)'}} src="../images/2247411-200.png" alt="edit" />
                                </button>
                                <button className="buttonedelete">
                                    <img className="button-img1" style={{filter:'invert(97%) sepia(6%) saturate(7206%) hue-rotate(295deg) brightness(130%) contrast(145%)'}} src="../images/6349361-200.png" alt="delete" />
                                </button>
                               </div>
                            </td>
                            {/* <td className='awardsedit'><button><img src='../images/2247411-200.png' alt='edit'></img></button></td>
                            <td className='awardsdelete'><button><img src='../images/2247411-200.png' alt='edit'></img></button></td> */}
                            </tr>
                        </tbody>
                        <tbody className='tbody'>
                            <tr>
                            <th scope="row">1</th>
                            <td>chitti</td>
                            <td>1234567</td>
                            <td>Best Performance</td>
                            <td>cash</td>
                            <td>20/02/2024</td>
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
                            <td>Best Performance</td>
                            <td>cash</td>
                            <td>20/02/2024</td>
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
export default AwardsList;