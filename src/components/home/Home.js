import './Home.css';
import {Link} from 'react-router-dom';
function Home() {
  return (
    <>
        <div className='row' style={{backgroundColor:'transparent'}}>
            <div className='d-flex flex-column' style={{backgroundColor:'transparent'}}>
                <div className='home' ><img src='./images/sapiens.png' alt='home'></img></div>
                <div className='hometext'> <h6>Great check the dashboard and create your <Link to='/employees/create' style={{textDecoration:'none'}}>Account.</Link></h6></div>
            </div>
           
        </div>
    </>

  )
}

export default Home;