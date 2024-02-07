import { Link } from "react-router-dom";
function Lroute() {
  return (
    <div>
           <div className='d-flex flex-row justify-content-center'>
          <Link to='/employees/create' className="text-start" style={{margin:'0px 45px',textDecoration:'none' , color: '#000000'}}>
                <div><b>Step 1</b></div>
                <div><b>Baisc Details</b></div>
            </Link>
            <Link to='/employees/education-qualification' className="text-start"  style={{margin:'0px 45px',textDecoration:'none' , color: '#000000'}}>
                <div><b>Step 2</b></div>
                <div><b>Education Qualification</b></div>
            </Link>
            <Link className="text-start"  style={{margin:'0px 45px',textDecoration:'none' , color: '#000000'}} >
                <div><b>Step 3</b></div>
                <div><b>Work Experience</b></div>
            </Link>
            <Link className="text-start"  style={{margin:'0px 45px',textDecoration:'none' , color: '#000000'}}>
                <div><b>Step 4</b></div>
                <div><b>Bank Details</b></div>
            </Link>
            <Link className="text-start"  style={{margin:'0px 45px',textDecoration:'none' , color: '#000000'}}>
                <div><b>Step 5</b></div>
                <div><b>Proof Details</b></div>
            </Link>
            </div>
    </div>
  )
}

export default Lroute;