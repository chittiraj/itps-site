import './Profile.css';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
function Profile({...props}){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <div>
            <div className='profile'>
                <button variant="primary" onClick={handleShow} className="button me-2">
                    <img src='https://www.jiocinema.com/images/profile/profile_avatar-v2.svg' alt=''></img>
                </button>
                <Offcanvas show={show} onHide={handleClose} {...props} placement='end'>
                    <div className='offcanvas_img'>
                    <Offcanvas.Header>
                    <Offcanvas.Title style={{position:'absolute',top: '-21px', left: '50%', transform: 'translateX(-50%)'}}>
                            <img src='https://www.jiocinema.com/images/profile/profile_avatar-v2.svg' alt=''></img>
                    </Offcanvas.Title>
                    </Offcanvas.Header>
                    </div>
                    <div className='offcanvas_border'>
                    <div className='row offcanvas_name'>
                                <div className='col'>
                                <h3>chitti raj</h3>
                                </div>
                            </div>
                    </div>
                    <Offcanvas.Body>
                        <div className='d-flex flex-column' style={{padding:'0px 0px 0px 15px'}}>
                        <Link className='buttonconvas'>Settings</Link>
                        <hr></hr>
                        <Link className='buttonconvas'>Help & Legal</Link>
                        <Link to="" className='buttonconvas'>Logout</Link>

                        </div>
                        
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </div>
    )
}
export default Profile;