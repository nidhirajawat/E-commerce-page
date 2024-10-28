import React from 'react'
import Countdown from 'react-countdown'

const Timer = () => {
  return (
    <div className='timer'>
      <Countdown date={Date.now()+1*60*100} />
    </div>
  )
}

export default Timer
