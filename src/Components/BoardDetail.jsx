import React from 'react'

const BoardDetail = () => {
  return (
    <div className='onBoardPerDetail'>
    <div  className='InputRow'>
            <div>
                <label>First Name</label><br />
                <input type="text" placeholder='Enter your choosen Name' /><br />
                <label>Email Address</label><br />
                <input type="email" placeholder='Enter your Email Address' /><br />
                <label>Phone Number</label><br />
                <input type="number" placeholder='Enter Phone Number' />
            </div>
            <div>
                <label>Last Name</label><br />
                <input type="text" placeholder='Enter your family Name'/><br />
                <label>Gender</label><br />
                <input type="sex" placeholder='Gender'/><br />
                <label>Designation</label><br />
                <input type="text" placeholder='Marketer' />
            </div>
    </div>

    <div className='upload'>
        <div><input type="" /></div>
        <p>Upload image</p>
    </div>
        </div>
  )
}

export default BoardDetail