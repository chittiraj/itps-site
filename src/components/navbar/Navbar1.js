import './Navbar1.css';
import Profile from '../profile/Profile.js';
import {Link} from 'react-router-dom';
function Navbar1(){
    return(
        <div className=''>
                <div>
                    <nav className="navbar navbar-expand-lg nav" >
                        <div className="container-fluid">
                            <a className="navbar-brand">
                                <Link to='/'><img src="./images/logo.png" alt="Logo" width="50" height="40" className="d-inline-block align-text-top"/></Link>
                            </a>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <div className="d-flex">
                               <Profile/>
                            </div>
                            </div>
                        </div>
                    </nav>
                </div>
        </div>
    )
}

export default Navbar1;