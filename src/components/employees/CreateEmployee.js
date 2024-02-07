import Lroute from "./Lroute";
import './CreateEmployee.css';
function CreateEmployee() {
    return(
        <>
        <Lroute/>
        <hr className="hline"></hr>
        <div className="forms">
            <form>
                    <div className="formhead"><b>Create Employee:</b></div>
                    <div className="row">
                        <div className="col">
                            <h6>Emp No<span>*</span></h6>
                            <input type="text"className="forminput" style={{width:'80%'}}></input>
                            <hr className="formline"></hr>
                        </div>
                        <div className="col">
                            <h6>Present Adress</h6>
                            <input type="text"className="forminput" style={{width:'80%'}}></input>
                            <hr className="formline"></hr>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h6>Card number(8 Digit nly)<span>*</span></h6>
                            <input type="text"className="forminput" style={{width:'80%'}}></input>
                            <hr className="formline"></hr>
                        </div>
                        <div className="col">
                            <h6>Premanent Adress<span>*</span></h6>
                            <input type="text"className="forminput" style={{width:'80%'}}></input>
                            <hr className="formline"></hr>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h6>Full Name<span>*</span></h6>
                            <input type="text"className="forminput" style={{width:'80%'}}></input>
                            <hr className="formline"></hr>
                        </div>
                        <div className="col">
                            <h6>city<span>*</span></h6>
                                <select className="create-select" style={{outline:'none', backgroundColor:'rgb(240,240,240)'}} aria-label="Large select example">
                                    <option selected>Choose a City</option>
                                    <option value="1">Vizag</option>
                                    <option value="2">chennai</option>
                                    <option value="3"></option>
                                </select>
                            <hr className="formline"></hr>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h6>Father Name<span>*</span></h6>
                            <input type="text"className="forminput" style={{width:'80%'}}></input>
                            <hr className="formline"></hr>
                        </div>
                        <div className="col">
                            <h6>Pin Code<span>*</span></h6>
                            <input type="text"className="forminput" style={{width:'80%'}}></input>
                            <hr className="formline"></hr>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h6>Email<span>*</span></h6>
                            <input type="email"className="forminput" style={{width:'80%'}}></input>
                            <hr className="formline"></hr>
                        </div>
                        <div className="col">
                            <h6>Company Name<span>*</span></h6>
                            <select className="create-select "style={{outline:'none', backgroundColor:'rgb(240,240,240)'}} aria-label="Large select example">
                                    <option selected>Choose a Company</option>
                                    <option value="1">Hexware</option>
                                    <option value="2">TCS</option>
                                    <option value="3"></option>
                                </select>
                            <hr className="formline"></hr>
                        </div>
                    </div>
            </form>
        </div>
    </>
    )
}
export default CreateEmployee;