import './EmployeeImports.css';
function EmployeeImports() {
  return (
        <div className='importhead'>
            <div className="importstop">
              <h5>Employee Imports :</h5>
              <p></p>
            </div>
              <div className="row">
                <div className="col importdate">
                    <h6>Date<span>*</span></h6>
                    <input type="text" className='importinput'></input>
                    <hr className="importline"></hr>
                </div>
              </div>
              <div className="row importfile">
                    <h6>Attach Excel<span>*</span></h6>
                      <div className="col-sm-1">
                        <button>File</button>
                      </div>
                      <div className="col">
                        <input type="text"className='importfileinput' style={{width:'80%'}}></input>
                        <hr className="importline"></hr>
                      </div>
              </div>
              <div className='row importformat'>
                  <div className='col d-flex '>
                    <div>
                      <h6>Sample File format</h6>
                    </div>
                    <div>
                      <button><img src='../images/5880893-200.png' alt='file formate' style={{filter: 'invert(24%) sepia(84%) saturate(7491%) hue-rotate(356deg) brightness(95%) contrast(115%)'}}></img>Click Here</button>
                    </div>
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
  )
}

export default EmployeeImports;