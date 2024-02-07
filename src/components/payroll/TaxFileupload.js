import React from 'react';
import './TaxFileupload.css';
function TaxFileupload() {
  return (
    <div>
      <div className='importhead'>
            <div className="taxstop">
              <h5>Employee</h5>
              <p>Tax File uploads</p>
              <p></p>
            </div>
              <div className="row">
                <div className="col importdate">
                    <h6>Year<span>*</span></h6>
                    <select className="tax-select" style={{outline:'none', backgroundColor:'rgb(240,240,240)'}} aria-label="Large select example">
                                    <option selected>2022</option>
                                    <option value="1">2023</option>
                                    <option value="2">2024</option>
                                    <option value="3"></option>
                    </select>
                    <hr className="importline"></hr>
                </div>
              </div>
              <div className="row">
                <div className="col importdate">
                    <h6>Employee Name<span>*</span></h6>
                    <select className="tax-select" style={{outline:'none', backgroundColor:'rgb(240,240,240)'}} aria-label="Large select example">
                                    <option selected>Employee Name</option>
                                    <option value="1">chitti</option>
                                    <option value="2">jyothish</option>
                                    <option value="3"></option>
                      </select>
                    <hr className="importline"></hr>
                </div>
              </div>
              <div className="row importfile">
                    <h6>Attach file<span>*</span></h6>
                      <div className="col-sm-1">
                        <button>File</button>
                      </div>
                      <div className="col">
                        <input type="text"className='importfileinput' style={{width:'80%'}}></input>
                        <hr className="importline"></hr>
                      </div>
              </div>
              <div className='d-flex flex-row importfooter'>
                <div className='importcancel'>
                  <button>Cancel</button>
                </div>
                <div className='impportrest'>
                  <button>Rest</button>
                </div>
                <div className='importimport'>
                  <button>Import</button>
                </div>
              </div>
        </div>
    </div>
  )
}

export default TaxFileupload;