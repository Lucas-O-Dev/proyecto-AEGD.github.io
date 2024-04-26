import React from 'react'
import './_landing.scss'
import SectionOneLanding from './SectionOneLanding'
import SectionSecondLanding from './SectionSecondLanding'

const Landing = () => {
  return (
    <div className='principalConteinerLanding'>
      <SectionOneLanding/>
      <SectionSecondLanding />
    </div>
  )
}

export default Landing