import './Navbar.css';
import Login from '../login/Login';

function Navbar(){
    return(

        <div className=''>
                <div>
                    <nav className="navbar navbar-expand-lg nav" >
                        <div className="container-fluid">
                            <a className="navbar-brand">
                                <img src="./images/logo.png" alt="Logo" width="50" height="40" className="d-inline-block align-text-top"/>
                            </a>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <div className="d-flex">
                               <Login/>
                            </div>
                            </div>
                        </div>
                    </nav>
                </div>
        </div>
    )
}

export default Navbar;