import './Login.css';
function Login(){
    return(
        <div className='login-back'>
                    <div className='face'>
                        <button type="button" className="btn btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal">Login</button>
                    </div>
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered inner" >
                            <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5 loginimage" id="exampleModalLabel" style={{margin:'0px 80px 0px -50px'}}><img src='./images/logo.png'></img></h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body form">
                            <form>
                                <div>
                                    <div className='login' style={{textAlign:'start'}}>
                                        <h2>Login</h2>
                                    </div>
                                </div>
                            <div className="form-outline mb-4" style={{textAlign:'start'}}>
                                    <label className="form-label " for="form2Example1">Email:</label>
                                    <input type="email" id="form2Example1" className="form-control" />
                                </div>
                                <div className="form-outline mb-4" style={{textAlign:'start'}}>
                                    <label className="form-label" for="form2Example2">Password:</label>
                                    <input type="password" id="form2Example2" className="form-control" />
                                </div>

                                <div className="row mb-4">
                                    <div className="col d-flex justify-content-start">
                                        <div className="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                            <label className="form-check-label" for="form2Example31" style={{justifyItems:'start'}}>Remember me</label>
                                        </div>
                                    </div>
                                    <div className="col d-flex justify-content-end">
                                        <div className='forgot-password'>
                                        <a href="#!">Forgot password?</a>
                                        </div>
                                    </div>
                                    {/* </div> */}

                                    {/* <div className="col ">
                                    <a href="#!">Forgot password?</a>
                                    </div> */}
                                </div>
                            </form>
                            </div>
                            <div className="modal-footer login justify-content-center" >
                                <button type="submit" className="btn btn-md">Login</button>
                            </div>
                            </div>
                        </div>
                </div>
        </div>



    )
}

export default Login;