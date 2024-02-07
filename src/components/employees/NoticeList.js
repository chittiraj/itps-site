function NoticeList(){
    return(
        <div>
            <div>
            <div className='d-flex justify-content-between awardshead'>
                <div className='awardschild'>
                    <h5>Notice List</h5>
                    <div className='d-flex'>
                        <p>2</p>
                            of
                        <p>2</p>
                        Results Found
                    </div>
                </div>
                <div style={{margin:'0px 20px 0px 0px '}}>
                    <button>Add new notice</button>
                </div>
            </div>
            <div className='row'>
                <div className='col dataform'>
                    <h6>Data From</h6>
                    <input type="text"className="awardsinput"></input>
                    <hr className="awardsline"></hr>
                </div>
                <div className='col dataupto'>
                    <h6>Data upto</h6>
                    <input type="text"className="awardsinput"></input>
                    <hr className="awardsline"></hr>
                </div>
                <div className='col databutton'>
                    <button>Filter</button>
                </div>
            </div>
            <div className='d-flex justify-content-between awardsshow' >
                <div><h6>Show<span>10</span>entries</h6></div>
                <div className='row'>
                    <div className='col'>
                        <div className='d-flex'>
                        <div className='awardssearch'>
                            <h6>search :</h6>
                        </div>
                       <div className='awardsdreachdata'>
                            <input type="search" ></input>
                            <hr></hr>
                       </div>
                        </div>
                    </div> 
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                <table className="table">
                    <thead className='thead'>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Descripiton</th>
                        <th scope="col">Status</th>
                        <th scope="col">create on</th>
                        <th scope="col" style={{padding:'0px 30px'}}>Action</th>
                        </tr>
                    </thead>
                        <tbody className='tbody'>
                            <tr>
                            <th scope="row">1</th>
                            <td>Company Innovation Awards Function</td>
                            <td>The world is a vast and beautiful place, full of wonder and excitement. From the towering mountains to the deepest oceans,
                                 there is something for everyone to explore. There are so many different cultures and people, all with their own 
                                 unique stories to tell. We are all connected, and we all have a role to play in making the world a better place.
                                  Let's work together to create a future that is bright and full of hope.</td>
                            <td>Active</td>
                            <td>2021/03/08</td>
                            <td>
                               <div  className="button-container">
                               <button className="buttonedit">
                                    <img className="button-img" style={{filter:'invert(97%) sepia(6%) saturate(7206%) hue-rotate(295deg) brightness(130%) contrast(145%)'}} src="../images/2247411-200.png" alt="edit" />
                                </button>
                                <button className="buttonedelete">
                                    <img className="button-img1" style={{filter:'invert(97%) sepia(6%) saturate(7206%) hue-rotate(295deg) brightness(130%) contrast(145%)'}} src="../images/6349361-200.png" alt="delete" />
                                </button>
                               </div>
                            </td>
                            </tr>
                        </tbody>
                        <tbody className='tbody'>
                        <tr>
                            <th scope="row">2</th>
                            <td>Company Innovation Awards Function</td>
                            <td>The world is a vast and beautiful place, full of wonder and excitement. From the towering mountains to the deepest oceans,
                                 there is something for everyone to explore. There are so many different cultures and people, all with their own unique stories to tell. 
                                 We are all connected, and we all have a role to play in making the world a better place. 
                                Let's work together to create a future that is bright and full of hope.</td>
                            <td>Active</td>
                            <td>2021/03/08</td>
                            <td>
                               <div  className="button-container">
                               <button className="buttonedit">
                                    <img className="button-img" style={{filter:'invert(97%) sepia(6%) saturate(7206%) hue-rotate(295deg) brightness(130%) contrast(145%)'}} src="../images/2247411-200.png" alt="edit" />
                                </button>
                                <button className="buttonedelete">
                                    <img className="button-img1" style={{filter:'invert(97%) sepia(6%) saturate(7206%) hue-rotate(295deg) brightness(130%) contrast(145%)'}} src="../images/6349361-200.png" alt="delete" />
                                </button>
                               </div>
                            </td>
                            </tr>
                        </tbody>
                        <tbody className='tbody'>
                        <tr>
                            <th scope="row">3</th>
                            <td>Company Innovation Awards Function</td>
                            <td>The world is a vast and beautiful place, full of wonder and excitement. From the towering mountains to the deepest oceans,
                                 there is something for everyone to explore. There are so many different cultures and people, all with their own unique 
                                 stories to tell. We are all connected, and we all have a role to play in making the world a
                                 better place. Let's work together to create a future that is bright and full of hope.</td>
                            <td>Active</td>
                            <td>2021/03/08</td>
                            <td>
                               <div  className="button-container">
                               <button className="buttonedit">
                                    <img className="button-img" style={{filter:'invert(97%) sepia(6%) saturate(7206%) hue-rotate(295deg) brightness(130%) contrast(145%)'}} src="../images/2247411-200.png" alt="edit" />
                                </button>
                                <button className="buttonedelete">
                                    <img className="button-img1" style={{filter:'invert(97%) sepia(6%) saturate(7206%) hue-rotate(295deg) brightness(130%) contrast(145%)'}} src="../images/6349361-200.png" alt="delete" />
                                </button>
                               </div>
                            </td>
                            </tr>
                        </tbody>
                </table>
                </div>
            </div>
        </div>
        </div>
    )
}
export default NoticeList;