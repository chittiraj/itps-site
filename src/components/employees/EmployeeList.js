import './EmployeeList.css';
function EmployeeList(){
    return(
        <div>
            <table className="table">
                <thead className='thead'>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Profile</th>
                    <th scope="col">Join Date</th>
                    <th scope="col">Emp#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Designation</th>
                    <th scope="col">Email / Moblie</th>
                    <th scope="col">Department</th>
                    <th scope="col">Remarks</th>
                    </tr>
                </thead>
                    <tbody className='tbody'>
                        <tr>
                        <th scope="row">1</th>
                        <td><img src='../images/2005178-200.png' alt='photo' className='tphoto'></img></td>
                        <td>20-02-2024</td>
                        <td>1234567</td>
                        <td>Chitti</td>
                        <td><p className='gender'>M</p></td>
                        <td>Junior dev</td>
                        <td>chittiraja@gmail.com</td>
                        <td>tester</td>
                        <td><p className='remarks'>yet to done</p></td>
                        </tr>
                    </tbody>
                    <tbody className='tbody'>
                        <tr>
                        <th scope="row">1</th>
                        <td><img src='../images/2005178-200.png' alt='photo' className='tphoto'></img></td>
                        <td>20-02-2024</td>
                        <td>1234567</td>
                        <td>Chitti</td>
                        <td><p className='gender'>M</p></td>
                        <td>Junior dev</td>
                        <td>chittiraja@gmail.com</td>
                        <td>tester</td>
                        <td><p className='remarks'>yet to done</p></td>
                        </tr>
                    </tbody>
                    <tbody className='tbody'>
                        <tr>
                        <th scope="row">1</th>
                        <td><img src='../images/2005178-200.png' alt='photo' className='tphoto'></img></td>
                        <td>20-02-2024</td>
                        <td>1234567</td>
                        <td>Chitti</td>
                        <td><p className='gender'>M</p></td>
                        <td>Junior dev</td>
                        <td>chittiraja@gmail.com</td>
                        <td>tester</td>
                        <td><p className='remarks'>yet to done</p></td>
                        </tr>
                    </tbody>
            </table>
        </div>
    )
}
export default EmployeeList;