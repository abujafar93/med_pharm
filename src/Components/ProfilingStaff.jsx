import React from 'react'

const ProfilingStaff = () => {
  return (
    <div className='profilingStaff'>
        <div className='profileContainer'>
                <div className='profile_info'>
                    <div className='pInfo'>
                      <div>Processing Information</div>
                      <button className='cancel_icon'>X</button>
                    </div>

                </div>

                <div className='profileWaitInfo'>
                    <div className='loader'></div>
                    <div className='loader_info'>Please wait while we profile the staff you added</div>
                </div>
        </div>
    </div>
  )
}

export default ProfilingStaff