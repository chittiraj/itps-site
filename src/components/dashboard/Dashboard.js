import './Dashboard.css';
import { useLocation , Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
function Dashboard(){
    const location = useLocation();
    console.log(location.pathname);

    const dashboardList = {
        '/dashboard' : 'Dashboard'
    }

    return(
        <div className='dashbread'>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/" style={{textDecoration:'none', color:'#000000'}}>< FaHome/> Home</Link></li>
                    <li className="breadcrumb-item" style={{textDecoration:'none',color:'#0000000'}}>DashBoard</li>
                    <li className="breadcrumb-item active" aria-current="page">{dashboardList[location.pathname]}</li>
                </ol>
            </nav>
            <hr></hr>

            <div className='d-flex flex-row' style={{gap:'20px',margin:'30px 20px 15px 20px'}}>
                <div className='dashcard'>
                   <div className='d-flex' style={{backgroundColor:'transparent'}}>
                        <div style={{backgroundColor:'transparent'}}>
                            <h4>Total Employee</h4>
                            <p className='text-center'>7</p>
                        </div>
                        <div className='dashphoto' style={{backgroundColor:'transparent'}}>
                            <img src='./images/525919-200.png' alt='cards'></img>
                        </div>
                    </div>
                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar" style={{width: '25%'}}></div>
                    </div>
                   
                </div>
                <div className='dashcard1'>
                    <div className='d-flex items-center justify-between' style={{backgroundColor:'transparent'}}> 
                        <div style={{backgroundColor:'transparent'}}>
                            <h4>Total Present</h4>
                            <p  className='text-center'>0</p>
                        </div>
                        <div className='dashphoto'>
                           <img src='./images/3661492-200.png' alt=''></img>
                        </div>
                    </div>
                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar" style={{width: '25%'}}></div>
                    </div>
                </div>
                <div className='dashcard2'>
                    <div className='d-flex items-center justify-between' style={{backgroundColor:'transparent'}}>
                        <div style={{backgroundColor:'transparent'}}>
                            <h4>Total Absent</h4>
                            <p  className='text-center'>10</p>
                        </div>
                        <div className='dashphoto'>
                            <img src='./images/3137601-200.png' alt=''></img>
                        </div>
                    </div>
                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar" style={{width: '25%'}}></div>
                    </div>
                </div>
            </div>
            <div className='dashdep'>
                <h4>Department Summary :</h4>
                <div className='d-flex flex-row text-center'>
                    <div className='dashdepchild'>
                        <h5>Accounts</h5>
                        <hr className="dashline"></hr>
                        <h6>1</h6>
                    </div>
                    <div className='dashdepchild'>
                        <h5>Development</h5>
                        <hr className="dashline"></hr>
                        <h6>1</h6>
                    </div>
                    <div className='dashdepchild'>
                        <h5>Adiministartor</h5>
                        <hr className="dashline"></hr>
                        <h6>1</h6>
                    </div>
                    <div className='dashdepchild'>
                        <h5>scales</h5>
                        <hr className="dashline"></hr>
                        <h6>1</h6>
                    </div>
                    <div className='dashdepchild'>
                        <h5>scales</h5>
                        <hr className="dashline"></hr>
                        <h6>1</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
