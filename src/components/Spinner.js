import React from 'react';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'


export default function Spinner() {
return(
    <div className='loader'>
      <ClimbingBoxLoader size={25} loading color="yellow" speedMultiplier={2}/>
    </div>
    )
}